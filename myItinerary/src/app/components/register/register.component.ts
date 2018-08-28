import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { AppService } from "../../app.service";
import { AppComponent } from '../../app.component'
// declare var $;
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resortForm: FormGroup;
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  address: string = "";
  phone: number;
  //    password: '',
  //    confirmPassword: '',

  constructor(private appComponent: AppComponent, private appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.resortForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z \-\']+')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z \-\']+')]),
      address: new FormControl('', [Validators.maxLength(255)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(20)])
    },
      {
        validator: PasswordValidation.MatchPassword
      })
  }

  onSubmit() {
    const request = {
      email: this.resortForm.value.email,
    }
    this.appService.save(this.resortForm.value).subscribe(data => {
      // alert("registered Succesfully");
      this.appComponent.modalCall("Registered Succesfully");
      this.reset();
    }, error => {
      //  alert("Registration failed");
        if(error.status==400){
  this.appComponent.modalCall("Email Already Exist");
      }else
      this.appComponent.modalCall("Registration failed");
    });
    //  console.log(this.resortForm)
    //  localStorage.setItem('registration', this.resortForm.value.email);
  }
  reset() {
    this.resortForm.reset();
  }
  restrictNumeric(e) {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
      e.preventDefault();
    }
  }
  restrictAlpha(e) {
    if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode != 8) {
      e.preventDefault();
    }
  }
}

