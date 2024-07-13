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
      name:"Blog Card",
      img:'../../assets/Image/Blog.png',
      iuareli:'https://blog-card-henna.vercel.app'
    },
    {
      name:"Results Summary",
      img:'../../assets/Image/Summary.png',
      iuareli:'https://results-summary-sable.vercel.app'
    },
    {
      name:"FAQs",
      img:'../../assets/Image/FAQ.png',
      iuareli:'https://mentor-faq.vercel.app'
    },
  ]

}
