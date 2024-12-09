import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, RouterModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fields = {
    email: "",
    password: ""
  }

  buttonText: string = 'Entrar';  // Default text button login;

  loading: boolean = false;

  subs: Subscription[] = [];

  router = inject(Router);
  loginService = inject(LoginService);

  constructor() { }

  // login(event:any): void {
  //   this.buttonText = 'Logging in...';
  //   this.loading = true;

  //   const sub = this.loginService.login(this.fields.email, this.fields.password).subscribe((login) => {
  //     debugger
  //     localStorage.setItem('token', JSON.stringify(login.token))
  //     localStorage.setItem('userLogged', JSON.stringify(login.user))
  //     this.router.navigateByUrl('/dashboard');
  //   })
  //   this.subs.push(sub);
  // }

  login():void {
    debugger
    this.buttonText = 'Entrando... ';
    this.loading = true;
    const sub = this.loginService.login(this.fields.email, this.fields.password).subscribe(
      (loginResponse) => {
        if (loginResponse?.token && loginResponse?.user) {
          // Armazena o token e os dados do usuário no localStorage
          localStorage.setItem('token', JSON.stringify(loginResponse.token));
          localStorage.setItem('userLogged', JSON.stringify(loginResponse.user));

          this.router.navigateByUrl('/dashboard');
        } else {
          // Em caso de erro (por exemplo, resposta incompleta)
          console.error('Erro no login: resposta inválida da API');
        }
      },
      (error) => {
        // Tratar erros de conexão ou falha na autenticação
        alert(error.error.message)
        this.buttonText = "Entrar"
        this.loading = false;
        console.error('Erro ao fazer login:', error);
      }
    );
  }

}
