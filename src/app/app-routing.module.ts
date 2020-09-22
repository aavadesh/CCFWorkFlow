import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
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
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
  { path: 'competency-framework/add', loadChildren: './add-competency-framework/add-competency-framework.module#AddCompetencyFrameworkModule', canActivate: [AuthGuard]},
  { path: 'competency-framework:id/edit', loadChildren: './edit-competency-framework/edit-competency-framework.module#EditCompetencyFrameworkModule', canActivate: [AuthGuard]},
  // tslint:disable-next-line:max-line-length
  { path: 'competencyframework', loadChildren: './competencyframework/competencyframework.module#CompetencyframeworkModule', canActivate: [AuthGuard]},
  // tslint:disable-next-line:max-line-length
  { path: 'competencydetail/:id', loadChildren: './competencyframeworddetail/competencydetail.module#CompetencydetailModule', canActivate: [AuthGuard]},
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
