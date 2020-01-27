import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { UserDetails } from '../model/userDetails';
import { CrudService } from '../crud.service';
import { CustomError } from '../model/customError';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hms-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  isLoaded = true;
  showError = false;
  
  title = "Add Doctor";
  doctor = new Doctor(null,'',null,null,null,new UserDetails(null,'','',4,'','','','',null,null,null,''));
  error = new CustomError('','','');
  addUser = () =>{
    if(!this.isEditPage){
      this.crud.addDoctor(this.doctor).subscribe((data)=>{
        this.error.type = "success";
        this.error.shortMessage = "Added";
        this.error.message = `User Added Successfully!`;
        this.showError = true;
        console.log()
      },(err)=>{
        this.error.type = "danger";
        this.error.shortMessage = "Error";
        this.error.message = `Something went Wrong`;
        this.showError = true;
        console.log(err);
      })
    }else{
      this.crud.updateDoctor(this.doctor).subscribe((data)=>{
        this.error.type = "success";
        this.error.shortMessage = "Updated";
        this.error.message = `User Updated Successfully!`;
        this.showError = true;  
      })
    }
    
  }
  updateDoctor(){
    console.log(this.doctor);
  }
  loadDoctor = (doctorId) =>{
   this.crud.readDoctor(doctorId).subscribe((data)=>{
      this.doctor = data;
   })
  }
  isEditPage = false;
  constructor(private crud : CrudService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params)=>{
      console.log(params['id']);
      let doctorId = params["id"];
      if(doctorId != null){
        this.isEditPage = true;
      }
      this.loadDoctor(doctorId)
    })
    
  }

}
