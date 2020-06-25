import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQueriesComponent } from './add-queries/add-queries.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'addQuery', component: AddQueriesComponent},
  { path:'viewQuery', component: ViewQueriesComponent},
  { path:'viewProfile', component: ProfileComponent},
  { path:'authenticate', component: AuthenticationComponent},
  { path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
