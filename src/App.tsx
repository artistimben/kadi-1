import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { HomeDashboard } from './components/HomeDashboard';
import { MediaExperienceHub } from './components/MediaExperienceHub';
import { TechSoftwareHub } from './components/TechSoftwareHub';
import { CyberSecurityHub } from './components/CyberSecurityHub';
import { EducationHub } from './components/EducationHub';
import { CommunityHub } from './components/CommunityHub';

function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fallback for scroll reveals in browsers that do not support native CSS View Timeline
  useEffect(() => {
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [currentTab]); // Re-bind observer when view panels switch

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeDashboard onNavigate={handleNavigate} />;
      case 'media':
        return <MediaExperienceHub onBack={() => handleNavigate('home')} />;
      case 'tech':
        return <TechSoftwareHub onBack={() => handleNavigate('home')} />;
      case 'cyber':
        return <CyberSecurityHub onBack={() => handleNavigate('home')} />;
      case 'edu':
        return <EducationHub onBack={() => handleNavigate('home')} />;
      case 'community':
        return <CommunityHub onBack={() => handleNavigate('home')} />;
      default:
        return <HomeDashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        background: 'radial-gradient(ellipse at top, #FAF9F6 0%, #F3F1EB 100%)',
        position: 'relative'
      }}
    >
      {/* Global Navbar */}
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Main Content Pane */}
      <main style={{ flexGrow: 1, width: '100%' }}>
        {renderContent()}

        {/* Display Contact Form on Home or via Navigation scroll trigger */}
        {currentTab === 'home' && <ContactForm />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      <style>{`
        /* IntersectionObserver fallbacks for non-supported animation-timeline browsers */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* When CSS support is present, skip the fallback class trigger and let native handle it */
        @supports ((animation-timeline: view()) and (animation-range: entry)) {
          .scroll-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
        
        .scroll-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

export default App;
