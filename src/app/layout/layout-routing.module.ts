import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard.component';
import { userIsLoggedInResolver } from '../resolvers/user-isloggedin.resolver';
// import { userIsLoggedInResolver } from '../resolvers/user-isloggedin.resolver';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  // },
  // // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // { path: '**', redirectTo: 'error/404' },
  {
    path: '',
    component: LayoutComponent,
    // resolve: {
    //   userIsLoggedIn: userIsLoggedInResolver,
    // },
    children: [
      {
        path: "",
        loadComponent: () => import("./dashboard.component").then(component => component.DashboardComponent),
        resolve: { userIsLoggedIn: userIsLoggedInResolver }
      },
      // {
      //   path: "profile",
      //   loadComponent: () => import("../dashboard/pages/profile/profile.component").then(component => component.ProfileComponent)
      // },
      // { path: 'podcast', component: PodcastComponent },
      // { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
