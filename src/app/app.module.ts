import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

const mapConfig: YaConfig = {
  apikey: 'ada335ab-bdc6-49e4-8985-c62f7b994e11',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CompaniesComponent,
    AddCompanyComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
