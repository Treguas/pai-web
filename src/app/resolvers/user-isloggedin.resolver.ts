import { inject } from "@angular/core";
import { Router } from "@angular/router";
// import { LoginService } from "../services/login.service";

export const userIsLoggedInResolver = () => new Promise((res, rej) => {
  // const loginService = inject(LoginService);
  const router = inject(Router);

  return true

  // const notAuthenticated = () => {
  //   localStorage.clear();
  //   router.navigateByUrl('/login');
  //   rej('USUÁRIO NÃO AUTENTICADO!')
  //   return false;
  // }

  // const token = localStorage.getItem('token');
  // const user = localStorage.getItem('userLogged');

  // if (!token || !user) {
  //   res(notAuthenticated());
  // } else {
  //   res(true);
  // }  
})