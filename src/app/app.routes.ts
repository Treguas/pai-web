import { Routes } from '@angular/router';

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
