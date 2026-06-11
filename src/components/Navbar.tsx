import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'media', label: 'Media & Experience', color: 'var(--color-media-1)' },
    { id: 'tech', label: 'Tech & Yazılım', color: 'var(--color-tech-1)' },
    { id: 'cyber', label: 'Siber Güvenlik', color: 'var(--color-cyber-1)' },
    { id: 'edu', label: 'Eğitim Platformu', color: 'var(--color-edu-1)' },
    { id: 'community', label: 'Dijital Topluluk', color: 'var(--color-comm-2)' },
  ];

  return (
    <nav 
      className="glass-panel" 
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 100,
        borderRadius: '20px',
        borderColor: 'rgba(0, 0, 0, 0.06)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Logo */}
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 800,
          fontSize: '1.25rem',
          fontFamily: 'var(--font-title)',
          letterSpacing: '-0.02em',
          color: 'var(--color-text-primary)'
        }}
      >
        <span>KADIOĞLU</span>
        <span style={{ 
          fontSize: '0.75rem', 
          background: 'linear-gradient(135deg, var(--color-tech-1), var(--color-edu-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '2px 8px',
          borderRadius: '20px',
          letterSpacing: '0.05em'
        }}>GROUP</span>
      </a>

      {/* Desktop Menu */}
      <ul style={{
        display: 'none',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '24px',
        alignItems: 'center'
      }} className="desktop-menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: currentTab === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                position: 'relative',
                padding: '8px 0',
                transition: 'color 0.2s ease'
              }}
              className="nav-link"
            >
              {item.label}
              {currentTab === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: item.color,
                  borderRadius: '2px',
                  boxShadow: `0 0 10px ${item.color}`
                }} />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div style={{
        display: 'none',
        alignItems: 'center',
        gap: '16px'
      }} className="desktop-actions">
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '8px 16px',
            borderRadius: '12px',
            background: 'rgba(0, 0, 0, 0.03)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-primary)',
            cursor: 'pointer'
          }}
          className="nav-btn"
        >
          İletişim
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          color: 'var(--color-text-primary)',
          cursor: 'pointer',
          padding: '4px'
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '0',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 99,
          borderRadius: '0 0 var(--border-radius-lg) var(--border-radius-lg)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
                setIsOpen(false);
              }}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: currentTab === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                padding: '12px 16px',
                borderRadius: '12px',
                background: currentTab === item.id ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                borderLeft: currentTab === item.id ? `4px solid ${item.color}` : '4px solid transparent'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-tech-1), var(--color-edu-2))',
              color: '#ffffff',
              fontWeight: 600,
              marginTop: '10px'
            }}
          >
            İletişime Geç
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      {/* CSS Styles for responsive navbar logic embedded dynamically */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-text-primary) !important;
        }
        .nav-btn:hover {
          background: rgba(0, 0, 0, 0.06) !important;
          border-color: rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
    </nav>
  );
};
