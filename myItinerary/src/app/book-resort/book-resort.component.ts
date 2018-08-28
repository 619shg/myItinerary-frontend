import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Resort } from '../components/Entity/resort';
import {AppComponent } from '../app.component';
 declare var $;
@Component({
  selector: 'app-book-resort',
  templateUrl: './book-resort.component.html',
  styleUrls: ['./book-resort.component.css']
})
export class BookResortComponent implements OnInit {
  bookResortForm: FormGroup;
  guest = new Guest();
  resort = new Resort();
  today = new Date();
  minDate: any;
  checkinDate: any;
  constructor(private appComponent: AppComponent,private http: Http, private appService: AppService, private formBuilder: FormBuilder, private router: Router, private datePipe: DatePipe) {

  }

  ngOnInit() {

    let date = JSON.stringify(this.today);
    this.minDate = { year: +date.substring(1, 5), month: +date.substring(6, 8), day: +date.substring(9, 11) };
    this.checkinDate={ year: +date.substring(1, 5), month: +date.substring(6, 8), day: +date.substring(9, 11) };
    this.guest = <Guest>JSON.parse(window.localStorage.getItem("guest"));
    if (this.guest == null) {
      this.router.navigate(['/login']);
    }
    this.bookResortForm = this.formBuilder.group({
      roomType: new FormControl('-1', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
      departureDate: new FormControl('', [Validators.required]),
      noOfPeople: new FormControl('-1', [Validators.required])
    });

  }
  CompareDate() {
    var dateTwo = new Date(this.bookResortForm.controls['departureDate'].value.year, this.bookResortForm.controls['departureDate'].value.month, this.bookResortForm.controls['departureDate'].value.day); //Year, Month, Date
    var dateOne = new Date(this.bookResortForm.controls['arrivalDate'].value.year, this.bookResortForm.controls['arrivalDate'].value.month, this.bookResortForm.controls['arrivalDate'].value.day); //Year, Month, Date
    if (dateOne > dateTwo) {
      return true;
    } else {
      return false;
    }
  }
  getDate() {
    if (this.bookResortForm.controls['arrivalDate'].value != null && this.bookResortForm.controls['arrivalDate'].value != undefined) {
      this.checkinDate = { year: this.bookResortForm.controls['arrivalDate'].value.year, month: this.bookResortForm.controls['arrivalDate'].value.month, day: this.bookResortForm.controls['arrivalDate'].value.day };
      if (this.bookResortForm.controls['departureDate'].value.year != undefined && this.CompareDate()) {
        this.bookResortForm.patchValue({ departureDate: this.checkinDate });
      }
    }
  }
  book() {
    var arrivalmonth = '';
    if (this.bookResortForm.controls['arrivalDate'].value.month < 10) {
      arrivalmonth = '0' + this.bookResortForm.controls['arrivalDate'].value.month;
    } else {
      arrivalmonth = this.bookResortForm.controls['arrivalDate'].value.month;
    }
    var departuremonth = '';
    if (this.bookResortForm.controls['departureDate'].value.month < 10) {
      departuremonth = '0' + this.bookResortForm.controls['departureDate'].value.month;
    } else {
      departuremonth = this.bookResortForm.controls['departureDate'].value.month;
    }
    var arrivaldate = '';
    if (this.bookResortForm.controls['arrivalDate'].value.day < 10) {
      arrivaldate = '0' + this.bookResortForm.controls['arrivalDate'].value.day;
    } else {
      arrivaldate = this.bookResortForm.controls['arrivalDate'].value.day;
    }
    var departuredate = '';
    if (this.bookResortForm.controls['departureDate'].value.day < 10) {
      departuredate = '0' + this.bookResortForm.controls['departureDate'].value.day;
    } else {
      departuredate = this.bookResortForm.controls['departureDate'].value.day;
    }
    this.bookResortForm.patchValue({ arrivalDate: this.bookResortForm.controls['arrivalDate'].value.year + '-' + arrivalmonth + '-' + arrivaldate});
    this.bookResortForm.patchValue({ departureDate: this.bookResortForm.controls['departureDate'].value.year + '-' + departuremonth + '-' + departuredate });
    this.appService.bookResort(this.bookResortForm.value, this.guest.guestID).subscribe(data => {
      this.resort = <Resort>JSON.parse(JSON.stringify(data));
      // this.reset();
      this.router.navigate(['/BookResortConfirmation', this.resort.rReservationNumber]);
          this.appComponent.modalCall("Resort booking done Succesfully");
      // alert("Resort booking done Succesfully");
    }, error => {
          this.appComponent.modalCall("Resort booking failed");
      // alert("Resort booking failed");
    });
  }
  reset() {
    this.bookResortForm.reset();
  }

  logout() {
    this.appService.logout();
     this.router.navigate(['/login']);
  }
}
