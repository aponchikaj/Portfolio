import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo/seo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
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

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    const title = 'Projects - Lazare Mirziashvili | Web Development Portfolio';
    const description = 'Explore the portfolio projects of Lazare Mirziashvili - Full Stack Web Developer. Featuring web applications like Algoora, DevHealth, AlertUp, and more built with modern technologies.';
    const url = 'https://lazare-mirziashvili.vercel.app/projects';

    this.seoService.setPageTitle(title);
    this.seoService.setPageDescription(description);
    this.seoService.setOgTags(title, description, url);
    this.seoService.setTwitterCard(title, description);
    this.seoService.setCanonicalUrl(url);
    this.seoService.setIndexFollow();

    // Set structured data for projects page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Lazare Mirziashvili - Projects Portfolio",
      "description": description,
      "url": url,
      "mainEntity": {
        "@type": "Person",
        "name": "Lazare Mirziashvili"
      },
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "Algoora",
          "url": "https://algoora.vercel.app/",
          "description": "Algoora web application"
        },
        {
          "@type": "SoftwareApplication",
          "name": "DevHealth",
          "url": "https://www.devhealth.online",
          "description": "DevHealth platform"
        },
        {
          "@type": "SoftwareApplication",
          "name": "AlertUp",
          "url": "https://www.alertup.world/",
          "description": "AlertUp notification system"
        }
      ]
    };

    this.seoService.setStructuredData(structuredData);
  }
}
