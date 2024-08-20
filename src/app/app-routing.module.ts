import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "employees", component: EmployeesComponent},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: "home", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
