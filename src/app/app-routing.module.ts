import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
const indexRoute: Route = {
  path: '',
  loadChildren: './login/login.module#LoginModule',
  data: { showHeader: false, showSidebar: false, showFooter: false }
};

const fallbackRoute: Route = {
  path: '**',
  loadChildren: './login/login.module#LoginModule',
  data: { showHeader: false, showSidebar: false, showFooter: false }
};
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate:[AuthGuard] },
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: 'competencyframework', loadChildren: './competencyframework/competencyframework.module#CompetencyframeworkModule'},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { showHeader: false, showSidebar: false, showFooter: false }
  },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule',
    data: { showHeader: false, showSidebar: false, showFooter: false }
  },
  fallbackRoute,
  indexRoute
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
