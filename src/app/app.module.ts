import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import {AuthGuard} from './auth.guard'

import { CardDisplayDetailsComponent } from './card-display-details/card-display-details.component'
import { TokenInterceptorService } from './token-interceptor.service';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    DoctorComponent,
    PatientComponent,
    CardDisplayDetailsComponent,
    EditDoctorComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
