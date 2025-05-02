import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ServerMessage:string = ''

  Email:string = ''
  Message:string = ''

  constructor(private api:ApiService){}

  send(){
    const data={
      email:this.Email,
      message:this.Message
    }
    this.api.SendMessage(data).subscribe((R:any)=>{ 
      this.ServerMessage = R.Message
    })
  }
}
