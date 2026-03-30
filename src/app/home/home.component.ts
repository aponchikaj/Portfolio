import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //Tech stack Object
  assetsFolder = '../../assets/'
  TechStack = [
    {
      icon:this.assetsFolder+'icons/home/frontend.png',
      title:'Frontend Development.',
      article:'React.JS  Angular.JS  Tailwind  TypeScript  Javascript'
    },
    {
      icon:this.assetsFolder+'icons/home/backend.png',
      title:'Backend Development.',
      article:'NodeJS  Express  JWT'
    },
    {
      icon:this.assetsFolder+'icons/home/database.png',
      title:'Databases',
      article:'MongoDB'
    },
    {
      icon:this.assetsFolder+'icons/home/github.png',
      title:'DevOps',
      article:'Git  Github'
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

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.setupSeo();
  }

  private setupSeo(): void {
    const title = 'Lazare Mirziashvili - Full Stack Web Developer & UI/UX Designer | Home';
    const description = 'Lazare Mirziashvili - Professional Full Stack Web Developer and Junior UI/UX Designer from Tbilisi, Georgia. Specializing in Angular, React, Node.js, and modern web technologies.';
    const url = 'https://lazare-mirziashvili.vercel.app/home';

    this.seoService.setPageTitle(title);
    this.seoService.setPageDescription(description);
    this.seoService.setOgTags(title, description, url);
    this.seoService.setTwitterCard(title, description);
    this.seoService.setCanonicalUrl(url);
    this.seoService.setIndexFollow();

    // Set structured data for homepage
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Lazare Mirziashvili",
      "jobTitle": ["Full Stack Web Developer", "UI/UX Designer"],
      "description": description,
      "url": "https://lazare-mirziashvili.vercel.app",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tbilisi",
        "addressCountry": "Georgia"
      },
      "sameAs": [
        "https://ge.linkedin.com/in/lazare-mirziashvili-66092b323",
        "https://github.com/aponchikaj"
      ],
      "knowsAbout": ["Web Development", "UI/UX Design", "Angular", "React", "TypeScript", "Node.js", "Full Stack Development"],
      "offers": {
        "@type": "Service",
        "serviceType": "Web Development Services",
        "description": "Full stack web development, UI/UX design, and consulting services"
      }
    };

    this.seoService.setStructuredData(structuredData);
  }
  
}
