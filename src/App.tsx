import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { ServicesPreview } from './components/ServicesPreview';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingForm } from './components/BookingForm';
import { FlipSide } from './components/FlipSide';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { AboutPage } from './components/AboutPage';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'booking' | 'flipside' | 'services' | 'casestudies' | 'about'>('home');

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Make navigation functions available globally
  (window as any).navigateToBooking = () => setCurrentView('booking');
  (window as any).navigateToFlipSide = () => setCurrentView('flipside');
  (window as any).navigateToHome = () => setCurrentView('home');
  (window as any).navigateToServices = () => setCurrentView('services');
  (window as any).navigateToCaseStudies = () => setCurrentView('casestudies');
  (window as any).navigateToAbout = () => setCurrentView('about');

  if (currentView === 'booking') {
    return (
      <>
        <SEO 
          title="Book a Growth Systems Call | Hudson & Co. Ventures"
          description="Schedule a strategy call with Hudson & Co. Ventures to discuss revenue operations, acquisition systems, and GTM execution for your founder-led business."
          path="/booking"
        />
        <StructuredData />
        <BookingForm />
      </>
    );
  }

  if (currentView === 'flipside') {
    return (
      <>
        <SEO 
          title="Early-Stage Founders | Hudson & Co. Ventures"
          description="Growth systems and acquisition execution for early-stage founders building toward predictable revenue."
          path="/early-stage"
        />
        <StructuredData />
        <FlipSide />
      </>
    );
  }

  if (currentView === 'services') {
    return (
      <>
        <SEO 
          title="Services | Hudson & Co. Ventures - Revenue Operations & GTM Systems"
          description="Revenue operations, acquisition systems, paid media, lead generation, CRM infrastructure, and GTM strategy for founder-led businesses."
          path="/services"
        />
        <StructuredData />
        <ServicesPage />
      </>
    );
  }

  if (currentView === 'casestudies') {
    return (
      <>
        <SEO 
          title="Case Studies | Hudson & Co. Ventures - Growth Systems Results"
          description="See how Hudson & Co. Ventures helps founder-led businesses build acquisition systems, improve pipeline quality, and turn demand into booked revenue."
          path="/case-studies"
        />
        <StructuredData />
        <CaseStudiesPage />
      </>
    );
  }

  if (currentView === 'about') {
    return (
      <>
        <SEO 
          title="About | Hudson & Co. Ventures - Execution-First Growth Partners"
          description="Meet the team behind Hudson & Co. Ventures, an execution-first revenue operations and growth systems firm for founder-led businesses."
          path="/about"
        />
        <StructuredData />
        <AboutPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <SEO />
      <StructuredData />
      <Hero />
      <LogoMarquee />
      <WhoWeWorkWith />
      <ServicesPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
