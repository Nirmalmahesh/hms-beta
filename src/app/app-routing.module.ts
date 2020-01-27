import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AuthGuard } from './auth.guard';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'doctor', component: DoctorComponent,canActivate : [AuthGuard] },
      { path: 'patient', component: PatientComponent,canActivate : [AuthGuard] }
    ],
    
  },
  {path : 'dashboard/doctors/add',component:EditDoctorComponent},
  {path:'dashboard/doctors/:id',component:EditDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
