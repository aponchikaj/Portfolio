import { Injectable } from '@angular/core';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  // Google Analytics 4 Configuration
  private readonly GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

  // Initialize Google Analytics
  initializeGA(): void {
    try {
      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      const gtagScript = document.createElement('script');
      gtagScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${this.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          custom_map: {'custom_parameter_1': 'custom_parameter_1'}
        });
      `;
      document.head.appendChild(gtagScript);

      console.log('Google Analytics initialized');
    } catch (error) {
      console.error('Error initializing Google Analytics:', error);
    }
  }

  // Track page view
  trackPageView(path: string): void {
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', this.GA_MEASUREMENT_ID, {
          page_path: path
        });
      }
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }

  // Track custom events
  trackEvent(eventName: string, parameters?: { [key: string]: any }): void {
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, parameters);
      }
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }

  // Track user interactions (button clicks, form submissions, etc.)
  trackInteraction(action: string, category: string, label?: string): void {
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'interaction', {
          event_category: category,
          event_label: label,
          value: action
        });
      }
    } catch (error) {
      console.error('Error tracking interaction:', error);
    }
  }

  // Track project clicks
  trackProjectClick(projectName: string, projectUrl: string): void {
    this.trackEvent('project_click', {
      project_name: projectName,
      project_url: projectUrl
    });
  }

  // Track contact form submissions
  trackContactForm(): void {
    this.trackEvent('contact_form_submission', {
      event_category: 'lead_generation'
    });
  }

  // Track service selections
  trackServiceSelection(serviceName: string, serviceId: string): void {
    this.trackEvent('service_selection', {
      service_name: serviceName,
      service_id: serviceId
    });
  }

  // Set user dimensions (if user identification is needed)
  setUserDimension(dimensionName: string, value: string): void {
    try {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', this.GA_MEASUREMENT_ID, {
          [dimensionName]: value
        });
      }
    } catch (error) {
      console.error('Error setting user dimension:', error);
    }
  }
}
