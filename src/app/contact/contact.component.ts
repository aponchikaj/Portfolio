import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  Email:string = ''
  Message:string = ''

  ServerMessage:string = ''

  constructor(private api:ApiService){}


  SendMsg(){
    const Data = {
      Message:this.Message,
      Email:this.Email
    }

    this.api.SendMessage(Data).subscribe((R)=>{
      this.ServerMessage = R.Message
    },err=>{
      console.log(err)
    })
  }
  
}
