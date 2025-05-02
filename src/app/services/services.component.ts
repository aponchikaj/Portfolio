import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../interface/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent{
  constructor(private router:Router){}
  //First is Services options

  Services = [
    {
      Title:'Frontend',
      text1:'Creating Websites.',
      text2:'Learning Angular,Tailwind',
      text3:'Making Portfolio',
      price:29.99,
      FinalText:'Starting with',
      ServiceChoose:()=>{this.ScreenOPT=this.FrontendOPT}
    },
    {
      Title:'Backend', 
      text1:'Creating Server.',
      text2:'Learning NodeJS..',
      text3:'Making Full Stack App',
      price:39.99,
      FinalText:'Starting with',
      ServiceChoose:this.ChooseService("Back")
    },
    {
      Title:'Create',
      text1:'Grow your business.',
      text2:'With Angular,Tailwind,Node..',
      text3:'For Small Medium Sized Businesses.',
      price:49.99,
      FinalText:'Starting with',
      ServiceChoose:this.ChooseService("Create")
    },
  ]

  //Frontend development 
  FrontendOPT = [
    {
      Title:'Basics.',
      text1:'Learning Basics With HTML5,CSS3',
      text2:'Write your first code.',
      text3:'Making small websites',
      price:29.99,
      FinalText:'Per Week.'
    },
    {
      Title:'Be Developer.',
      text1:'Learning Basics of JS,TS',
      text2:'Write your functional website.',
      text3:'Making Website.',
      price:34.99,
      FinalText:'Per Week.'
    },
    {
      Title:'Final',
      text1:'Learning Angular,Git,Tailwind',
      text2:'Starting Real Projects',
      text3:'Making Portfolio Website.',
      price:44.99,
      FinalText:'Per Week.'
    },
  ]

  BackendOPT = [
    {
      Title:'Basics',
      text1:"What's Server and Database?",
      text2:'Learning what libaries do.',
      text3:'NodeJS as Server',
      price:34.99,
      FinalText:'Per Week.'
    },
    {
      Title:'Star',
      text1:'Working with servers and databases',
      text2:'Learning ExpressJS and Mongoose',
      text3:'Making Little Server',
      price:44.99,
      FinalText:'Per Week.'
    },
    {
      Title:'Final',
      text1:'Learning Postman,JWT...',
      text2:'Working with Angular.',
      text3:'Making Full Stack Website.',
      price:59.99,
      FinalText:'Per Week.'
    },
  ]

  CreateOPT=[
    {
      Title:'Bronze',
      text1:'3-5 Pages.',
      text2:'Without Backend.',
      text3:'Simple Design',
      price:49.99,
      FinalText:'For small sized Businesses.'
    },
    {
      Title:'Silver',
      text1:'5-9 Pages.',
      text2:'Contact Form.',
      text3:'Custom Design.',
      price:89.99,
      FinalText:'For Medium Small sized Businesses.'
    },
    {
      Title:'Diamond',
      text1:'10-15 Pages.',
      text2:'Authorization System',
      text3:'Any kind of Design',
      price:159.99,
      FinalText:'For Medium sized Businesses.'
    },
  ]

  ScreenOPT:any = this.Services

  ChooseService(ServiceName:string){
    if(ServiceName == "Front"){
      this.ScreenOPT = this.FrontendOPT
      console.log(this.ScreenOPT)
      console.log('Front')
    }else if(ServiceName == "Back"){
      this.ScreenOPT = this.BackendOPT
      console.log('Back')
    }else if(ServiceName == "Create"){
      this.ScreenOPT = this.CreateOPT
    }
  }
}
