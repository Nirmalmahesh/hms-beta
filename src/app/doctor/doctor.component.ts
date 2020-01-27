import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hms-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doEdit = (doctorId) => {
    this.router.navigate(["dashboard/doctors/", doctorId])
  }
  doDelete = (doctorId) => {
    console.log(doctorId);
    this.crudService.deleteDelete(doctorId).subscribe((data) => {
      console.log(data);
      console.log("Deleted Successfully");
      this.getAllDoctors();
    })
  }
  getAllDoctors = () => {
    this.crudService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(data)
      this.isPageLoaded = true;
    })
  }
  constructor(private crudService: CrudService, private router: Router) { }
  private doctors: any = [];
  private isPageLoaded = false;
  private title = "Doctors Profile";
  private src = "https://img.icons8.com/dusk/256/000000/contract-job.png";
  ngOnInit() {
    this.getAllDoctors();
  }

}
