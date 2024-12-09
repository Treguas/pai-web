import { Component, inject, OnInit } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { LoginService } from '../../services/login.service';





@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  loginService = inject(LoginService);

  userLogged = {
    name: "",
    role: ""
  }

  constructor() {
    const user = JSON.parse(localStorage.getItem('userLogged') as string);
    this.userLogged.name = user.name;
    this.userLogged.role = user.role;
  }

  logout() {
    this.loginService.logout();
  }




}
