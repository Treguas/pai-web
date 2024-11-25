import { Injectable } from '@angular/core';

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
    return this.httpClient.post<ILogin>(this.API + '/users/auth', params);
  }


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
