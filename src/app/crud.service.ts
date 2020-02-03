import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './model/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://hms-demo-app.us-east-1.elasticbeanstalk.com:8080';
  private title = 'Patients Profiles';

  constructor(private http: HttpClient) { }
  // public getAllDoctors = () => {
  //   return this.http.get(`${this.url}/api/doctors/`);
  // }
  // public getAllPatients = () => {
  //   return this.http.get(`${this.url}/api/patients/`);
  // }
  public deleteDelete = (doctorId) => {
    return this.http.delete(`${this.url}/api/doctors/${doctorId}`);
  }

  public addDoctor = (doctor) => {
    console.log(doctor);
    return this.http.post(`${this.url}/api/doctors/`, doctor);
  }

  public readDoctor = (doctorId): Observable<Doctor> => {
    return this.http.get<Doctor>(`${this.url}/api/doctors/${doctorId}`);
  }

  public updateDoctor = (doctor): Observable<Doctor> => {
    return this.http.put<Doctor>(`${this.url}/api/doctors/`, doctor);
  }

  public deletePatient = (doctorId) => {
    return this.http.delete(`${this.url}/api/patients/${doctorId}`);
  }



}
