import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  setPageTitle(title: string): void {
    this.title.setTitle(title);
  }

  setPageDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  setOgTags(title: string, description: string, url?: string, image?: string): void {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    if (url) {
      this.meta.updateTag({ property: 'og:url', content: url });
    }
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }
  }

  setTwitterCard(title: string, description: string, image?: string): void {
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    if (image) {
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }
  }

  setCanonicalUrl(url: string): void {
    const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (link) {
      link.href = url;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'canonical';
      newLink.href = url;
      document.head.appendChild(newLink);
    }
  }

  setIndexFollow(index: boolean = true, follow: boolean = true): void {
    const content = `${index ? 'index' : 'noindex'}, ${follow ? 'follow' : 'nofollow'}`;
    this.meta.updateTag({ name: 'robots', content });
  }

  setStructuredData(data: object): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
