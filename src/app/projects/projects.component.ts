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
      article:'Algoora',
      name:'Algoora',
      image:`${this.AssetsString}projects/algoora.png`,
      url:'https://algoora.vercel.app/'
    },
    {
      article:'DevHealth',
      name:'DevHealth',
      image:`${this.AssetsString}projects/devhealth.png`,
      url:'https://www.devhealth.online'
    },
    {
      article:'AlertUp',
      name:"Alert Up",
      image:`${this.AssetsString}projects/alertup.png`,
      url:'https://www.alertup.world/'
    },
    {
      article:'Poster Shop From Tbilisi.',
      name:'Illusion',
      image:`${this.AssetsString}projects/iluzia.png`,
      url:'https://iluzia.vercel.app/'
    },
    {
      article:'Sandro Menabde',
      name:'Sandromenabde',
      image:`${this.AssetsString}projects/sandromenabde.png`,
      url:'https://sandromenabde.vercel.app/'
    },
    {
      article:'Blogs website',
      name:'Lazares Blogs',
      image:`${this.AssetsString}projects/blogs.PNG`,
      url:'https://lazaresblog.vercel.app/home'
    },
  ]
}
