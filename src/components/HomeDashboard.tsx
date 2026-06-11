import React, { useState } from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Code, GraduationCap, Users } from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (tab: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({ onNavigate }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const divisions = [
    {
      id: 'media',
      title: 'MEDIA & EXPERIENCE',
      brand: 'Dioreal',
      icon: <Activity size={28} />,
      desc: 'Sosyal medya yönetimi, profesyonel video prodüksiyonu ve destinasyon tanıtımı odaklı yaşam tarzı yayımcılığı.',
      color: 'var(--color-media-1)',
      grad: 'var(--gradient-media)'
    },
    {
      id: 'tech',
      title: 'TECHNOLOGY & SOFTWARE',
      brand: 'X Altyapısı / Y Yazılım Ekibi',
      icon: <Code size={28} />,
      desc: 'Kurumsal otomasyonlar, POS & QR menü sistemleri, CRM, e-ticaret ve SaaS çözümleri sunan ileri düzey yazılım mühendisliği.',
      color: 'var(--color-tech-1)',
      grad: 'var(--gradient-tech)'
    },
    {
      id: 'cyber',
      title: 'CYBER SECURITY & IT',
      brand: 'Xy',
      icon: <ShieldCheck size={28} />,
      desc: 'Siber güvenlik danışmanlığı, penetrasyon testleri, HA veri merkezi operasyonları ve failover cluster sistem yönetimi.',
      color: 'var(--color-cyber-1)',
      grad: 'var(--gradient-cyber)'
    },
    {
      id: 'edu',
      title: 'EDUCATION PLATFORM',
      brand: 'Nexera Academy',
      icon: <GraduationCap size={28} />,
      desc: 'Yapay zeka, teknoloji ve dijital medya alanlarında yeni nesil sertifikasyon programları ve kurumsal online eğitimler.',
      color: 'var(--color-edu-1)',
      grad: 'var(--gradient-edu)'
    },
    {
      id: 'community',
      title: 'COMMUNITY & PLATFORMS',
      brand: 'Silvermind',
      icon: <Users size={28} />,
      desc: 'Dijital topluluklar, sosyal fayda projeleri, emekli kamu platformları ve networking üyelik sistemleri.',
      color: 'var(--color-comm-1)',
      grad: 'var(--gradient-comm)'
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Background Radial Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(81, 106, 130, 0.06) 0%, transparent 70%)',
          top: '10%',
          left: '20%'
        }}
      />
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(163, 101, 83, 0.04) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
          animationDelay: '-5s'
        }}
      />

      {/* Hero Section */}
      <section 
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '140px 24px 80px 24px',
          position: 'relative',
          zIndex: 2
        }}
        className="animate-fade-in-up"
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(31, 30, 28, 0.02)',
            border: '1px solid var(--color-border)',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '28px',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)'
          }}
        >
          <Sparkles size={14} style={{ color: 'var(--color-tech-1)' }} />
          <span>Yeni Nesil Dijital Ekosistem</span>
        </div>

        <h1 
          className="text-balance"
          style={{
            fontSize: 'clamp(2.5rem, 1rem + 5.5vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, var(--color-text-primary) 30%, var(--color-tech-1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em'
          }}
        >
          KADIOĞLU<br />DİJİTAL GROUP
        </h1>

        <p 
          className="text-pretty"
          style={{
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
            maxWidth: '650px',
            color: 'var(--color-text-secondary)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}
        >
          Medya, teknoloji, yazılım, siber güvenlik ve eğitim alanlarındaki yenilikçi markaları tek bir çatı altında toplayan entegre dijital güç birliği.
        </p>

        {/* Call to Actions */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#divisions"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-tech-1) 0%, var(--color-tech-2) 100%)',
              color: '#ffffff',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(81, 106, 130, 0.12)',
              cursor: 'pointer'
            }}
            className="action-btn-primary"
          >
            Faaliyet Alanlarımız
          </a>
          <a
            href="#vision"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: 'rgba(31, 30, 28, 0.02)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              fontWeight: 600,
              cursor: 'pointer'
            }}
            className="action-btn-secondary"
          >
            Grup Vizyonu
          </a>
        </div>
      </section>

      {/* Interactive Ecosystem Map Section */}
      <section 
        className="scroll-reveal"
        style={{
          maxWidth: '1000px',
          margin: '0 auto 100px auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 5
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>Entegre Dijital Ekosistem Haritası</h2>
        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '0.95rem' }}>
          Markalarımızın kendi aralarında oluşturduğu organik sinerjiyi ve bağları görsel olarak inceleyin. Hub'lara tıklayarak detaylı sayfaya geçiş yapabilirsiniz.
        </p>

        {/* SVG Interactive Map */}
        <div 
          className="glass-panel"
          style={{
            padding: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <svg 
            viewBox="0 0 600 500" 
            style={{ width: '100%', maxWidth: '650px', height: 'auto', overflow: 'visible' }}
          >
            {/* Connection Lines with glowing properties based on hover state */}
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-tech-1)" />
                <stop offset="100%" stopColor="var(--color-edu-1)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting lines from center to outer nodes */}
            <line x1="300" y1="250" x2="300" y2="70" stroke={hoveredNode === 'media' ? 'var(--color-media-1)' : 'rgba(31, 30, 28, 0.08)'} strokeWidth={hoveredNode === 'media' ? '3' : '1.5'} strokeDasharray={hoveredNode === 'media' ? 'none' : '5,5'} style={{ transition: 'all 0.3s' }} />
            <line x1="300" y1="250" x2="480" y2="160" stroke={hoveredNode === 'tech' ? 'var(--color-tech-1)' : 'rgba(31, 30, 28, 0.08)'} strokeWidth={hoveredNode === 'tech' ? '3' : '1.5'} strokeDasharray={hoveredNode === 'tech' ? 'none' : '5,5'} style={{ transition: 'all 0.3s' }} />
            <line x1="300" y1="250" x2="420" y2="380" stroke={hoveredNode === 'cyber' ? 'var(--color-cyber-1)' : 'rgba(31, 30, 28, 0.08)'} strokeWidth={hoveredNode === 'cyber' ? '3' : '1.5'} strokeDasharray={hoveredNode === 'cyber' ? 'none' : '5,5'} style={{ transition: 'all 0.3s' }} />
            <line x1="300" y1="250" x2="180" y2="380" stroke={hoveredNode === 'edu' ? 'var(--color-edu-1)' : 'rgba(31, 30, 28, 0.08)'} strokeWidth={hoveredNode === 'edu' ? '3' : '1.5'} strokeDasharray={hoveredNode === 'edu' ? 'none' : '5,5'} style={{ transition: 'all 0.3s' }} />
            <line x1="300" y1="250" x2="120" y2="160" stroke={hoveredNode === 'community' ? 'var(--color-comm-1)' : 'rgba(31, 30, 28, 0.08)'} strokeWidth={hoveredNode === 'community' ? '3' : '1.5'} strokeDasharray={hoveredNode === 'community' ? 'none' : '5,5'} style={{ transition: 'all 0.3s' }} />

            {/* Inner-connecting loops to represent synergy */}
            <path d="M 300 70 Q 480 160 480 160 Q 420 380 420 380 Q 180 380 180 380 Q 120 160 120 160 Z" fill="none" stroke="rgba(31, 30, 28, 0.02)" strokeWidth="1" />

            {/* Center Node: KADIOĞLU */}
            <circle cx="300" cy="250" r="45" fill="#ffffff" stroke="url(#line-grad)" strokeWidth="3" filter="url(#glow)" />
            <text x="300" y="247" textAnchor="middle" fill="var(--color-text-primary)" fontSize="12" fontWeight="bold" fontFamily="var(--font-title)">KADIOĞLU</text>
            <text x="300" y="260" textAnchor="middle" fill="var(--color-text-secondary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-sans)">DİJİTAL</text>

            {/* Node 1: Media (Top) */}
            <g 
              cursor="pointer" 
              onClick={() => onNavigate('media')} 
              onMouseEnter={() => setHoveredNode('media')} 
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle cx="300" cy="70" r="32" fill="#ffffff" stroke={hoveredNode === 'media' ? 'var(--color-media-1)' : 'var(--color-border)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
              <circle cx="300" cy="70" r="28" fill="rgba(138, 115, 94, 0.05)" />
              <text x="300" y="74" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-title)">MEDYA</text>
              <text x="300" y="115" textAnchor="middle" fill={hoveredNode === 'media' ? 'var(--color-media-1)' : 'var(--color-text-secondary)'} fontSize="10" fontWeight="bold" style={{ transition: 'color 0.3s' }}>Dioreal</text>
            </g>

            {/* Node 2: Technology & Software (Right Top) */}
            <g 
              cursor="pointer" 
              onClick={() => onNavigate('tech')} 
              onMouseEnter={() => setHoveredNode('tech')} 
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle cx="480" cy="160" r="32" fill="#ffffff" stroke={hoveredNode === 'tech' ? 'var(--color-tech-1)' : 'var(--color-border)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
              <circle cx="480" cy="160" r="28" fill="rgba(81, 106, 130, 0.05)" />
              <text x="480" y="164" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-title)">YAZILIM</text>
              <text x="480" y="205" textAnchor="middle" fill={hoveredNode === 'tech' ? 'var(--color-tech-1)' : 'var(--color-text-secondary)'} fontSize="10" fontWeight="bold" style={{ transition: 'color 0.3s' }}>X / Y</text>
            </g>

            {/* Node 3: Cyber Security & IT (Right Bottom) */}
            <g 
              cursor="pointer" 
              onClick={() => onNavigate('cyber')} 
              onMouseEnter={() => setHoveredNode('cyber')} 
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle cx="420" cy="380" r="32" fill="#ffffff" stroke={hoveredNode === 'cyber' ? 'var(--color-cyber-1)' : 'var(--color-border)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
              <circle cx="420" cy="380" r="28" fill="rgba(91, 111, 99, 0.05)" />
              <text x="420" y="384" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-title)">GÜVENLİK</text>
              <text x="420" y="425" textAnchor="middle" fill={hoveredNode === 'cyber' ? 'var(--color-cyber-1)' : 'var(--color-text-secondary)'} fontSize="10" fontWeight="bold" style={{ transition: 'color 0.3s' }}>Xy Security</text>
            </g>

            {/* Node 4: Education Platform (Left Bottom) */}
            <g 
              cursor="pointer" 
              onClick={() => onNavigate('edu')} 
              onMouseEnter={() => setHoveredNode('edu')} 
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle cx="180" cy="380" r="32" fill="#ffffff" stroke={hoveredNode === 'edu' ? 'var(--color-edu-1)' : 'var(--color-border)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
              <circle cx="180" cy="380" r="28" fill="rgba(163, 101, 83, 0.05)" />
              <text x="180" y="384" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-title)">EĞİTİM</text>
              <text x="180" y="425" textAnchor="middle" fill={hoveredNode === 'edu' ? 'var(--color-edu-1)' : 'var(--color-text-secondary)'} fontSize="10" fontWeight="bold" style={{ transition: 'color 0.3s' }}>Nexera Academy</text>
            </g>

            {/* Node 5: Community & Digital Platforms (Left Top) */}
            <g 
              cursor="pointer" 
              onClick={() => onNavigate('community')} 
              onMouseEnter={() => setHoveredNode('community')} 
              onMouseLeave={() => setHoveredNode(null)}
            >
              <circle cx="120" cy="160" r="32" fill="#ffffff" stroke={hoveredNode === 'community' ? 'var(--color-comm-1)' : 'var(--color-border)'} strokeWidth="2" style={{ transition: 'all 0.3s' }} />
              <circle cx="120" cy="160" r="28" fill="rgba(110, 124, 130, 0.05)" />
              <text x="120" y="164" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold" fontFamily="var(--font-title)">TOPLULUK</text>
              <text x="120" y="205" textAnchor="middle" fill={hoveredNode === 'community' ? 'var(--color-comm-1)' : 'var(--color-text-secondary)'} fontSize="10" fontWeight="bold" style={{ transition: 'color 0.3s' }}>Silvermind</text>
            </g>
          </svg>
        </div>
      </section>

      {/* Grid of Divisions Cards */}
      <section 
        id="divisions"
        className="scroll-reveal"
        style={{
          maxWidth: '1200px',
          margin: '0 auto 100px auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 5
        }}
      >
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>Faaliyet Alanlarımız</h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
            Teknolojinin ve yaratıcılığın farklı katmanlarında geliştirdiğimiz uzman ekiplerimiz ve markalarımız.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {divisions.map((div) => (
            <div
              key={div.id}
              className="glass-card"
              onClick={() => onNavigate(div.id)}
              onMouseEnter={() => setHoveredNode(div.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                padding: '32px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Colored Glow overlay on hover */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: div.color,
                  filter: 'blur(40px)',
                  opacity: hoveredNode === div.id ? 0.12 : 0.02,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none'
                }}
              />

              {/* Icon Frame */}
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.015)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: div.color,
                  boxShadow: `0 4px 12px rgba(0,0,0,0.01)`
                }}
              >
                {div.icon}
              </div>

              {/* Title & Brand */}
              <div>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: div.color, 
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  {div.brand}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px', color: 'var(--color-text-primary)' }}>{div.title}</h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', flexGrow: 1 }}>
                {div.desc}
              </p>

              {/* Footer card link */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  marginTop: '10px'
                }}
              >
                <span>İncele</span>
                <ArrowRight size={14} style={{ color: div.color }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Group Vision Section */}
      <section 
        id="vision"
        className="scroll-reveal"
        style={{
          maxWidth: '1200px',
          margin: '0 auto 100px auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 5
        }}
      >
        <div 
          className="glass-panel"
          style={{
            padding: '60px 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          {/* Glowing node background decoration */}
          <div 
            className="glow-element glow-pulse"
            style={{
              background: 'var(--color-edu-2)',
              left: '-150px',
              bottom: '-150px',
              width: '300px',
              height: '300px',
              opacity: 0.03
            }}
          />

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-tech-1)', letterSpacing: '0.1em' }}>VİZYONUMUZ</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '8px', marginBottom: '20px', color: 'var(--color-text-primary)' }}>Geleceği Bağlı Ekosistemler Şekillendirir</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '1rem' }}>
              Kadıoğlu Dijital Group; birbirinden bağımsız görünen medya, teknoloji, yazılım, güvenlik ve eğitim alanlarını tek bir akıllı dijital ekosistem içerisinde birleştirmeyi hedefler.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
              Amacımız; Türkiye merkezli ancak global vizyona sahip, sürdürülebilir, ölçeklenebilir ve güçlü dijital markalar oluşturarak geleceğe yön vermektir.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.25rem', color: 'var(--color-media-1)', fontWeight: 800 }}>%100</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Entegre Dijital Süreç</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.25rem', color: 'var(--color-tech-1)', fontWeight: 800 }}>Global</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Vizyon & Altyapı</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.25rem', color: 'var(--color-cyber-1)', fontWeight: 800 }}>HA</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>High Availability & Failover</p>
            </div>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '2.25rem', color: 'var(--color-edu-2)', fontWeight: 800 }}>SaaS</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Ölçeklenebilir Yapılar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
