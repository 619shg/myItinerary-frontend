import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Guest } from "./components/Entity/guest";
import { AppService } from "./app.service";
 declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resort';
  singlepage=true;
  url:string;
  guest=new Guest();
  message:string;
  constructor(private router: Router,private appService:AppService){}
  public ngOnInit() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/' || events.url === '/login' || events
        .url==='/register') {
          this.singlepage = true;
        } else {
          this.singlepage = false;
           this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
        }
        this.url=events.url;
      
      }
    });
  }
  isSelected(selected){
if(("/"+selected)==this.url){
  return true;
}
  }
  logout(){
this.appService.logout();
    this.router.navigate(['/login']);
}
goto(page){
  this.router.navigate(['/'+page]);
}
modalCall(message){
  this.message=message;
  $('#myModal').modal('show');
setTimeout(function() {
  $('#myModal').modal('hide');
}, 5000);
}
}
