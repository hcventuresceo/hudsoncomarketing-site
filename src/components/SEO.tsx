import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEO({ 
  title = "Hudson & Co. Ventures Holdings LLC | Revenue Operations & Growth Systems",
  description = "Hudson & Co. Ventures is a revenue operations and growth systems firm for founder-led businesses. Senior-level execution, C-level GTM strategy, and acquisition systems that turn demand into booked revenue predictably.",
  path = "/",
  image = "/og-image.png"
}: SEOProps) {
  const baseUrl = 'https://www.hudsoncomarketing.com';
  const siteName = 'Hudson & Co. Ventures';
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `${baseUrl}${path}`, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${baseUrl}${image}`, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'Hudson & Co. Ventures crest and brand mark', true);
    updateMetaTag('og:site_name', siteName, true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', `${baseUrl}${path}`);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${image}`);
    
    // Additional SEO
    updateMetaTag('keywords', 'revenue operations, growth systems, GTM strategy, founder-led businesses, acquisition systems, lead generation, paid ads, CRM systems, Hudson & Co Ventures');
    updateMetaTag('author', 'Hudson & Co. Ventures Holdings LLC');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${path}`;
    
  }, [title, description, path, image]);

  return null;
}
