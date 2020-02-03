import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { CustomError } from '../model/customError';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { AppConstant } from '../constants/ApplicationConstant';

@Component({
  selector: 'hms-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {

  isLoaded = true;
  showError = false;
  isEditPage = false;

  title = 'Add Doctor';

  doctorForm: FormGroup;


  error = new CustomError('', '', '');

  get username() {
    return this.doctorForm.get('userDetails').get('username');
  }
  get password() {
    return this.doctorForm.get('userDetails').get('password');
  }
  get firstName() {
    return this.doctorForm.get('userDetails').get('firstName');
  }
  get lastName() {
    return this.doctorForm.get('userDetails').get('lastName');
  }
  get city() {
    return this.doctorForm.get('userDetails').get('city');
  }
  get state() {
    return this.doctorForm.get('userDetails').get('state');
  }
  get phoneNumber() {
    return this.doctorForm.get('userDetails').get('phoneNumber');
  }
  addUser = () => {
    if (!this.isEditPage) {
      this.crud.addDoctor(this.doctorForm.value).subscribe((data) => {
        this.error.type = 'success';
        this.error.shortMessage = 'Added';
        this.error.message = `User Added Successfully!`;
        this.showError = true;
        console.log();
      }, (err) => {
        this.error.type = 'danger';
        this.error.shortMessage = 'Error';
        this.error.message = `Something went Wrong`;
        this.showError = true;
        console.log(err);
      });
    } else {
      this.crud.updateDoctor(this.doctorForm.value).subscribe((data) => {
        this.error.type = 'success';
        this.error.shortMessage = 'Updated';
        this.error.message = `User Updated Successfully!`;
        this.showError = true;
      });
    }

  }

  loadDoctor = (doctorId) => {
    this.crud.readDoctor(doctorId).subscribe((data) => {

      this.doctorForm.patchValue(data);
    });
  }

  constructor(private crud: CrudService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {


    this.doctorForm = this.fb.group({

      doctorSpecialization: ['', Validators.required],
      userDetails: this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          Validators.minLength(8)
        ])],
        roleId: [4, Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      })
    });

    console.log(this.doctorForm);


    this.route.params.subscribe((params) => {
      console.log(params[AppConstant.ID]);
      const doctorId = params[AppConstant.ID];
      if (doctorId != null) {
        this.isEditPage = true;

      }
      this.loadDoctor(doctorId);
    });
  }
}
