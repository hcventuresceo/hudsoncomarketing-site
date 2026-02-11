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
    return <BookingForm />;
  }

  if (currentView === 'flipside') {
    return <FlipSide />;
  }

  if (currentView === 'services') {
    return <ServicesPage />;
  }

  if (currentView === 'casestudies') {
    return <CaseStudiesPage />;
  }

  if (currentView === 'about') {
    return <AboutPage />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Hero />
      <LogoMarquee />
      <WhoWeWorkWith />
      <ServicesPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}