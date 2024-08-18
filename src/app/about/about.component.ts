import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public api:ApiService){}

  userMail:string = ''
  Message:string = ''

  sendMessage(){
    const data = {
      user:this.userMail,
      msg:this.Message
    }

    this.api.sendData(data).subscribe(dat=>{
      console.log('data sent successfully')
    },err=>{
      console.log(err)
    })

    this.userMail = ''
    this.Message = ''
  }
}
