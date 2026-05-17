import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    const baseUrl = 'https://www.hudsoncomarketing.com';

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hudson & Co. Ventures Holdings LLC",
      "alternateName": ["Hudson & Co. Ventures", "Hudson & Co Marketing", "Hudson and Co Marketing"],
      "url": `${baseUrl}/`,
      "logo": `${baseUrl}/logo.png`,
      "image": `${baseUrl}/og-image.png`,
      "description": "Revenue operations and growth systems for founder-led businesses.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": ["https://www.instagram.com/hudsoncomarketing"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": `${baseUrl}/booking`
      }
    };

    // Local Business Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Hudson & Co. Ventures Holdings LLC",
      "image": `${baseUrl}/og-image.png`,
      "logo": `${baseUrl}/logo.png`,
      "url": `${baseUrl}/`,
      "priceRange": "$$$",
      "areaServed": "US",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "description": "Senior-level revenue operations, C-level GTM strategy, acquisition systems, paid media, and lead generation for founder-led businesses.",
      "knowsAbout": [
        "Revenue Operations",
        "Growth Systems",
        "Go-To-Market Strategy",
        "Lead Generation",
        "Paid Acquisition",
        "CRM Systems"
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Revenue Operations and Growth Systems",
      "provider": {
        "@type": "Organization",
        "name": "Hudson & Co. Ventures Holdings LLC",
        "url": `${baseUrl}/`
      },
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Growth Systems and Revenue Operations Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revenue Operations Systems",
              "description": "CRM, pipeline, booking, follow-up, and reporting systems that turn demand into booked revenue."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acquisition Systems",
              "description": "Paid media, landing pages, lead routing, and conversion systems for founder-led businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "C-Level GTM Strategy",
              "description": "Positioning, offer design, funnel architecture, and executive growth strategy."
            }
          }
        ]
      }
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Hudson & Co. Ventures",
      "url": `${baseUrl}/`,
      "publisher": {
        "@type": "Organization",
        "name": "Hudson & Co. Ventures Holdings LLC"
      }
    };

    // Insert or update script tags
    const insertSchema = (id: string, schema: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    insertSchema('schema-organization', organizationSchema);
    insertSchema('schema-service-business', professionalServiceSchema);
    insertSchema('schema-service', serviceSchema);
    insertSchema('schema-website', websiteSchema);

  }, []);

  return null;
}
