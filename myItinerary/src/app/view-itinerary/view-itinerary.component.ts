import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import { Resort } from "../components/Entity/resort";
import { Dining } from "../components/Entity/dining";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
declare var $;
@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {
  guestID: string;
  guest = new Guest();
  resortList: Resort[];
  diningList: Dining[];
  login = false;
  cancelId: string;
  isDining: boolean;
  constructor(private appService: AppService, private router: Router, private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.getGuest();
  }

  getGuest() {
    this.guest = <Guest>JSON.parse(window.localStorage.getItem("guest"));
    if (this.guest == null) {
      this.router.navigate(['/login']);
    }
    this.getViewData();
  }
  getViewData() {
    this.appService.getViewData(this.guest.guestID).subscribe(data => {
      this.resortList = [];
      this.diningList = [];
      this.resortList = <any[]>JSON.parse(JSON.stringify(data[0]));
      this.diningList = <any[]>JSON.parse(JSON.stringify(data[1]));
    }, error => {

    });
  }
  cancelDining(id) {
    this.cancelId = id;
    this.isDining = true;
    $('#cancelModal').modal('show');
  }

  cancelResort(id) {
    this.cancelId = id;
    this.isDining = false;
    $('#cancelModal').modal('show');
  }
  bookDining(){
    this.router.navigate(['/BookDining']);
  }
  bookResort(){
    this.router.navigate(['/BookResort']);
  }
  cancelConfirm() {
    if (this.isDining) {
      this.appService.cancelDining(this.cancelId).subscribe(data => {
        this.resortList = [];
        this.diningList = [];
        // alert("Dining cancelled Succesfully");
        this.appComponent.modalCall("Dining cancelled Succesfully");
        this.getViewData();
      }, error => {
        //  alert("Dining cancellation failed");
        this.appComponent.modalCall("Dining cancellation failed");
      });
    } else {
      this.appService.cancelResort(this.cancelId).subscribe(data => {
        this.resortList = [];
        this.diningList = [];
        //  alert("Resort cancelled Succesfully");
        this.appComponent.modalCall("Resort cancelled Succesfully");
        this.getViewData();
      }, error => {
        //  alert("Resort cancellation failed");
        this.appComponent.modalCall("Resort cancellation failed");
      });
    }
  }
}
