import { Injectable } from '@angular/core';
import { Http, HttpModule,Headers,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  basicUrl = "http://Myitinerary-env.u4pwqbu2uk.ap-south-1.elasticbeanstalk.com/";
  constructor(private http: Http) { }
  getHeader() {
    return  new RequestOptions({ headers: new Headers({
        'Access-Control-Allow-Origin': '*'
      }) });
  }
  login(data): Observable<any[]> {
    return this.http.post(this.basicUrl + "guest/login", data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getGuest(guestID): Observable<any> {
    return this.http.get(this.basicUrl + "guest/get/" + guestID, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getViewData(guestID) {
    return this.http.get(this.basicUrl + "guest/view/" + guestID, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  save(data) {
    return this.http.post(this.basicUrl + "guest/register", data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
   bookResort(data,id) {
    return this.http.post(this.basicUrl + "booking/resort/"+id, data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
   bookDining(data,id) {
    return this.http.post(this.basicUrl + "booking/dining/"+id, data, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getResortData(id) {
    return this.http.get(this.basicUrl + "booking/resort/get/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  getDiningData(id) {
    return this.http.get(this.basicUrl + "booking/dining/get/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  cancelDining(id) {
    return this.http.put(this.basicUrl + "booking/cancel/dining/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  cancelResort(id) {
    return this.http.put(this.basicUrl + "booking/cancel/resort/" + id, this.getHeader()).pipe(map((response: any) => response.json()));
  }
  logout(){
    window.localStorage.setItem("guest",null);
  }
}
