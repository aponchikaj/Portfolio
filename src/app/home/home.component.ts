import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Tech stack Object
  assetsFolder = '../../assets/'
  TechStack = [
    {
      icon:this.assetsFolder+'icons/home/frontend.png',
      title:'Frontend Development.',
      article:'React.JS | Angular.JS | Tailwind | TypeScript | Javascript'
    },
    {
      icon:this.assetsFolder+'icons/home/backend.png',
      title:'Backend Development.',
      article:'NodeJS | Express | JWT'
    },
    {
      icon:this.assetsFolder+'icons/home/database.png',
      title:'Databases',
      article:'MongoDB'
    },
    {
      icon:this.assetsFolder+'icons/home/github.png',
      title:'DevOps',
      article:'Git | Github'
    },
    {
      icon:this.assetsFolder+'icons/home/create.png',
      title:'Create',
      article:'Making Websites for Medium Sized businesses.'
    },
    {
      icon:this.assetsFolder+'icons/home/lessons.png',
      title:'Teaching',
      article:'Teaching Web Development.'
    },
  ]

  //Contact
  ContactServerMessage:string = ''
  
}
