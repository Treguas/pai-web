import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "",
    loadComponent: () => import("./website/website.component").then(component => component.WebsiteComponent)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: "dashboard",
  //   loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  // },
  // {
  //   path: 'errors',
  //   loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule),
  // },
  // { path: '**', redirectTo: 'errors/404' },
];
