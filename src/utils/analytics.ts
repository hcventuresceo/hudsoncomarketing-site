/**
 * Analytics tracking utilities for Hudson & Co Marketing
 * Provides easy-to-use functions for tracking user interactions
 */

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  category: string,
  label: string,
  value?: string | number
) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', 'Engagement', `Book Call CTA - ${location}`);
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (destination: string) => {
  trackEvent('navigation', 'Engagement', `Navigate to ${destination}`);
};

/**
 * Track page views (for SPA routing)
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, label: string) => {
  trackEvent('external_link', 'Outbound', label, url);
};

/**
 * Track Calendly embed loads
 */
export const trackCalendlyLoad = () => {
  trackEvent('calendly_load', 'Conversion', 'Calendly Embed Loaded');
};
