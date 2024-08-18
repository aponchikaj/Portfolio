import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  defaultURL:string = 'http://localhost:3000/api/data'

  constructor(private http:HttpClient) { }

  sendData(data:any):Observable<any>{
    return this.http.post(this.defaultURL, data)
  }
}
