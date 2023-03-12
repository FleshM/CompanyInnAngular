import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoggedInAuthGuard } from './guards/logged-in-auth.guard';

import { CompaniesComponent } from './components/companies/companies.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddCompanyComponent } from './components/add-company/add-company.component'

const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, canActivate: [LoggedInAuthGuard]},
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard]},
  { path: 'companies/add-company', component: AddCompanyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
