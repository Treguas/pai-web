import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ILogin } from '../../interfaces/iuser';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = environment.API_URL;


  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }


  login(email: string, password: string) {
    const params = {
      email,
      password
    }
    return this.httpClient.post<ILogin>(this.API + '/auth/signin', params);
  }


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
