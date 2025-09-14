import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  //Projects Array to Display
  AssetsString:String = '../../assets/'
  Projects = [
    {
      article:'Poster Shop From Tbilisi.',
      name:'Illusion',
      image:`${this.AssetsString}projects/illusion.PNG`,
      url:'https://iluzia.vercel.app/'
    },
    {
      article:'Blogs website',
      name:'Lazares Blogs',
      image:`${this.AssetsString}projects/blogs.PNG`,
      url:'https://lazaresblog.vercel.app/home'
    },
    {
      article:'Osiris Shoes Website (FAKE)',
      name:'Osiris',
      image:`${this.AssetsString}projects/Osiris.PNG`,
      url:'https://osiris-lazare.vercel.app/'
    },
    {
      article:'Information about Die antwoord.',
      name:"Whos Die Antwoord",
      image:`${this.AssetsString}projects/antwoord.PNG`,
      url:'https://whos-dieantwoord.vercel.app/'
    },
    {
      article:'First React Website',
      name:'Plan IT',
      image:`${this.AssetsString}projects/planit.png`,
      url:'https://plan-itt.vercel.app/'
    },
    {
      article:'Todo App',
      name:'Todo',
      image:`${this.AssetsString}projects/todo.PNG`,
      url:'https://todo-by-lazare.vercel.app/'
    },
  ]
}
