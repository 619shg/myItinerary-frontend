import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import { Router } from '@angular/router';
import {Dining} from '../components/Entity/dining';
import {AppComponent } from '../app.component';
// declare var $;

@Component({
  selector: 'app-book-dining',
  templateUrl: './book-dining.component.html',
  styleUrls: ['./book-dining.component.css']
})
export class BookDiningComponent implements OnInit {
 bookDiningForm: FormGroup;
   guest=new Guest();
   dining = new Dining();
    today = new Date();
minDate :any;
   constructor (private appComponent: AppComponent,private http: Http,private appService: AppService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
         let date=JSON.stringify(this.today);
    this.minDate ={year: +date.substring(1,5), month: +date.substring(6,8), day:  +date.substring(9,11)};
     this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
      if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.bookDiningForm = this.formBuilder.group({
      diningType: new FormControl('-1', [Validators.required]),
      arrivalDate: new FormControl('', [Validators.required]),
         time: new FormControl('Select Time', [Validators.required]),
          noOfPeople: new FormControl('-2', [Validators.required])
    });

  }
  book(){
     var arrivalmonth = '';
    if (this.bookDiningForm.controls['arrivalDate'].value.month < 10) {
      arrivalmonth = '0' + this.bookDiningForm.controls['arrivalDate'].value.month;
    } else {
      arrivalmonth = this.bookDiningForm.controls['arrivalDate'].value.month;
    }
    var arrivalday = '';
    if (this.bookDiningForm.controls['arrivalDate'].value.day < 10) {
      arrivalday = '0' + this.bookDiningForm.controls['arrivalDate'].value.day;
    } else {
      arrivalday = this.bookDiningForm.controls['arrivalDate'].value.day;
    }
    this.bookDiningForm.patchValue({arrivalDate: this.bookDiningForm.controls['arrivalDate'].value.year+'-'+arrivalmonth+'-'+arrivalday});
   console.log(JSON.stringify(this.guest));
    this.appService.bookDining(this.bookDiningForm.value,this.guest.guestID).subscribe(data => {
      this.dining=<Dining>JSON.parse(JSON.stringify(data));
        this.router.navigate(['/BookDiningConfirmation',this.dining.dReservationNumber]);
      //  alert("Dining booking done Succesfully");
          this.appComponent.modalCall("Dining booking done Succesfully");
      // this.reset();
    }, error => {
    // alert("Dining booking failed");
       this.appComponent.modalCall("Dining booking failed");
    });
  }
reset() {
    this.bookDiningForm.reset();
  }
  diningTypeSelect()
{
  
 switch (this.bookDiningForm.controls['diningType'].value) {
   case 'breakfast': this.bookDiningForm.patchValue({time:'Breakfast (7am-11am)'});
     
     break;
      case 'lunch':this.bookDiningForm.patchValue({time:'Lunch (12pm-3pm)'});
     
     break;
      case 'dinner':this.bookDiningForm.patchValue({time:'Dinner (7pm-11pm)'});
     
     break;
      case 'snacks':this.bookDiningForm.patchValue({time:'Snacks (4pm-6pm)'});
     
     break;
 
   default:
     break;
 } 
}

 logout(){
this.appService.logout();
 this.router.navigate(['/login']);
}
}
