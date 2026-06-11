import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'linear-gradient(to bottom, rgba(248, 249, 252, 0.4) 0%, rgba(225, 228, 235, 0.9) 100%)',
        padding: '80px 24px 40px 24px',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px'
        }}
      >
        {/* Brand info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            style={{
              fontWeight: 800,
              fontSize: '1.5rem',
              fontFamily: 'var(--font-title)',
              color: 'var(--color-text-primary)'
            }}
          >
            KADIOĞLU <span style={{ color: 'var(--color-tech-1)' }}>GROUP</span>
          </a>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', maxWidth: '320px' }}>
            Medya, teknoloji, yazılım, siber güvenlik ve eğitim alanlarını tek bir akıllı ekosistemde birleştiren yeni nesil dijital yapılanma.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <a href="#" className="social-link" style={socialIconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="social-link" style={socialIconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link" style={socialIconStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        {/* Divisions Quick Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Faaliyet Kolları</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#media" onClick={(e) => { e.preventDefault(); onNavigate('media'); }} style={linkStyle}>Media & Experience</a></li>
            <li><a href="#tech" onClick={(e) => { e.preventDefault(); onNavigate('tech'); }} style={linkStyle}>Technology & Software</a></li>
            <li><a href="#cyber" onClick={(e) => { e.preventDefault(); onNavigate('cyber'); }} style={linkStyle}>Cyber Security & IT</a></li>
            <li><a href="#edu" onClick={(e) => { e.preventDefault(); onNavigate('edu'); }} style={linkStyle}>Education Platform</a></li>
            <li><a href="#community" onClick={(e) => { e.preventDefault(); onNavigate('community'); }} style={linkStyle}>Community & Digital Platforms</a></li>
          </ul>
        </div>

        {/* Corporate info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Kurumsal Vizyon</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={linkStyle}>Hakkımızda</a></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={linkStyle}>Grup Vizyonu</a></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={linkStyle}>Markalarımız</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); }} style={linkStyle}>Kariyer</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontFamily: 'var(--font-title)' }}>İletişim</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={contactItemStyle}><Mail size={16} style={{ color: 'var(--color-tech-1)' }} /> <span>info@kadiogludigital.com</span></li>
            <li style={contactItemStyle}><Phone size={16} style={{ color: 'var(--color-tech-1)' }} /> <span>+90 (212) 555 00 00</span></li>
            <li style={contactItemStyle}><MapPin size={16} style={{ color: 'var(--color-tech-1)' }} /> <span>Levent, İstanbul, Türkiye</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Kadıoğlu Dijital Group. Tüm hakları saklıdır.
        </span>
        
        <button 
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          className="scroll-top-btn"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        .social-link:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        .scroll-top-btn:hover {
          background: var(--gradient-tech) !important;
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(79, 172, 254, 0.5);
          border-color: transparent !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

const socialIconStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-secondary)',
  transition: 'all 0.3s ease'
};

const linkStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--color-text-secondary)',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};

const contactItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '0.9rem',
  color: 'var(--color-text-secondary)'
};
