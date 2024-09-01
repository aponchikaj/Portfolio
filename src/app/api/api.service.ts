import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  MessageAPI:string = 'http://localhost:3000/message'

  constructor(private http:HttpClient) { }

  SendMessage(Data:any):Observable<any>{
    return this.http.post(this.MessageAPI,Data)
  }
}
