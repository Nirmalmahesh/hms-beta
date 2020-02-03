import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'hms-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private crudService: CrudService, private authService: AuthService) { }
  public patients: any = [];
  public isPageLoaded = false;
  public title = 'Patients Profile';
  isLoading = false;
  public src = '';
  deletePatient($event) {
    this.isLoading = true;
    console.log(this.isLoading);
    console.log($event);
    this.crudService.deletePatient($event.patientId).subscribe((data) => {
      this.isLoading = false;
      console.log(this.isLoading);
      this.getAllPatient();
    });
  }
  getAllPatient = () => {
    this.authService.getAllPatients().subscribe((data) => {
      this.patients = data;
      this.isPageLoaded = true;
    });
  }
  ngOnInit() {
    this.getAllPatient();
  }

}
