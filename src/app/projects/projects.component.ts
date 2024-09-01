import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  Projects =[
    {
      name:'Iluzia',
      img:'../../assets/Image/Iluzia.png',
      iuareli:'https://iluzia.vercel.app'
    },
    {
      name:"Lazare's Osiris",
      img:'../../assets/Image/orsisirs.png',
      iuareli:'https://osiris-lazare.vercel.app'
    },
    {
      name:"Who's Die Antwoord",
      img:'../../assets/Image/Antwoord.png',
      iuareli:'https://whos-dieantwoord.vercel.app'
    },
    {
      name:"Todo App",
      img:'../../assets/Image/todoapp.png',
      iuareli:'https://todo-by-lazare.vercel.app'
    },
    {
      name:"Lisa",
      img:'../../assets/Image/lisa.png',
      iuareli:'https://lisa-bot.vercel.app'
    },
    {
      name:"TeenWork",
      img:'../../assets/Image/teenwork.PNG',
      iuareli:'https://teenwork.vercel.app/home'
    },
  ]

}
