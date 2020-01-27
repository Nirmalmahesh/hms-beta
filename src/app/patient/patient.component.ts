import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'hms-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private crudService : CrudService) { }
  private patients :any = [];
  private isPageLoaded = false;
  private title = "Patients Profile";
  ngOnInit() {
    this.crudService.getAllPatients().subscribe((data)=>{
      this.patients = data;
      this.isPageLoaded = true;
    })
  }

}
