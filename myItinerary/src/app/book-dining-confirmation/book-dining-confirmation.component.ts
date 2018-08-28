import { Component, OnInit } from '@angular/core';
import { Guest } from "../components/Entity/guest";
import {ActivatedRoute} from '@angular/router';
import {Dining} from '../components/Entity/dining';
import { AppService } from "../app.service";
import { Router } from '@angular/router';
import {AppComponent } from '../app.component';
declare var $;
@Component({
  selector: 'app-book-dining-confirmation',
  templateUrl: './book-dining-confirmation.component.html',
  styleUrls: ['./book-dining-confirmation.component.css']
})
export class BookDiningConfirmationComponent implements OnInit {
 guest=new Guest();
diningId:string;
dining=new Dining();
cancelId:string;
cancelBooking:boolean;
  constructor(private appComponent: AppComponent,private route:ActivatedRoute,private appService: AppService,private router:Router) { 
    this.diningId = route.snapshot.params['id'];
  }

  ngOnInit() {
     this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
   if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.getResult()
  }
getResult(){
  this.appService.getDiningData(this.diningId).subscribe(data=>{
  this.dining=<Dining>JSON.parse(JSON.stringify(data));
},error=>{

});
}
 cancelDining(id){
   this.cancelId=id;
$('#cancelModal').modal('show');
  }
  cancelConfirm(){
 this.appService.cancelDining(  this.cancelId).subscribe(data => {
      // alert("Dining cancelled Succesfully");
       this.appComponent.modalCall("Dining cancelled Succesfully");
      this.getResult();
    }, error => {
      //  alert("Dining cancellation failed!!!");
        this.appComponent.modalCall("Dining cancellation failed!!!");
    });
  }
 
 logout(){
this.appService.logout();
 this.router.navigate(['/login']);
}
}