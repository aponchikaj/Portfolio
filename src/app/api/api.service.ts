import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  localhostString:string = 'http://localhost:3000/'

  ContactAPI:string = `${this.localhostString}api/message`
  NewStudentAPI:string = `${this.localhostString}api/NewStudent`
  NewWebsiteAPI:string = `${this.localhostString}api/NewWebsite`

  SendMessage(data:object){
    return this.http.post(this.ContactAPI,data)
  }

  SendNewStudentData(data:Object){
    return this.http.post(this.NewStudentAPI,data)
  }

  SendNewWebsiteData(data:Object){
    return this.http.post(this.NewWebsiteAPI,data)
  }
}
