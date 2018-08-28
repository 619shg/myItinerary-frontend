import { Component, OnInit } from '@angular/core';
import { Guest } from "../components/Entity/guest";
import {ActivatedRoute} from '@angular/router';
import {Resort} from '../components/Entity/resort'
import { AppService } from "../app.service";
import { Router } from '@angular/router';
import {AppComponent } from '../app.component';
declare var $;
@Component({
  selector: 'app-book-resort-confirmation',
  templateUrl: './book-resort-confirmation.component.html',
  styleUrls: ['./book-resort-confirmation.component.css']
})
export class BookResortConfirmationComponent implements OnInit {
 guest=new Guest();
  resortId:string;
  resort=new Resort();
  cancelId:string;
  
  constructor(private appComponent: AppComponent,private route:ActivatedRoute,private appService: AppService,private router:Router) { 
    this.resortId = route.snapshot.params['id'];
  }


  ngOnInit() {
      this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
 if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.getResult()
  }
getResult(){
  this.appService.getResortData(this.resortId).subscribe(data=>{
  this.resort=<Resort>JSON.parse(JSON.stringify(data));
},error=>{

});
}

  cancelResort(id){
    this.cancelId=id;
$('#cancelModal').modal('show');

  }
  cancelConfirm(){
 this.appService.cancelResort( this.cancelId).subscribe(data => {
     this.appComponent.modalCall("Resort cancelled Succesfully");
    // alert("Resort cancelled Succesfully");
       this.getResult();
    }, error => {
      // alert("resort cancellation failed");
        this.appComponent.modalCall("Resort cancelled Succesfully");
    });
  }
  logout(){
this.appService.logout();
 this.router.navigate(['/login']);
}
}
