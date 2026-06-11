import React from 'react';
import { ArrowLeft, Cpu, Database, Terminal, Share2, Layers } from 'lucide-react';

interface TechSoftwareHubProps {
  onBack: () => void;
}

export const TechSoftwareHub: React.FC<TechSoftwareHubProps> = ({ onBack }) => {
  const services = [
    { title: 'SaaS Platform Geliştirme', desc: 'Büyüyebilir, çok kiracılı (multi-tenant) bulut tabanlı yazılım platformları tasarlıyoruz.' },
    { title: 'Kurumsal Otomasyon', desc: 'İş süreçlerinizi optimize eden, insan hatalarını sıfıra indiren kurumsal yazılım sistemleri.' },
    { title: 'POS & QR Menü Sistemleri', desc: 'Restoran ve perakende sektörü için yüksek hızlı, çevrimdışı çalışabilen modern ödeme ve sipariş çözümleri.' },
    { title: 'CRM & ERP Yazılımları', desc: 'Müşteri ilişkileri ve kaynak planlama süreçlerinizi entegre yönetebileceğiniz özel paneller.' },
    { title: 'Mobil Uygulama', desc: 'iOS ve Android platformlarında native performans sunan modern mobil uygulamalar.' },
    { title: 'E-Ticaret Altyapıları', desc: 'Yüksek trafik ve eş zamanlı siparişleri sıfır gecikmeyle yöneten güvenli satış platformları.' },
    { title: 'API & Entegrasyonlar', desc: 'Farklı yazılımlar arasında güvenli ve hızlı veri akışı sağlayan mikroservis entegrasyonları.' },
    { title: 'Özel Web Yazılımları', desc: 'Kurumunuza özel tasarlanmış, SEO uyumlu ve yüksek performanslı modern web uygulamaları.' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '120px 24px 60px 24px' }} className="animate-fade-in-up">
      {/* Background Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(81, 106, 130, 0.05) 0%, transparent 70%)',
          top: '20%',
          left: '10%'
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(31, 30, 28, 0.02)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            padding: '10px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 600,
            marginBottom: '40px',
            transition: 'all 0.3s ease'
          }}
          className="back-btn"
        >
          <ArrowLeft size={16} />
          <span>Ana Sayfaya Dön</span>
        </button>

        {/* Division Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
          <span 
            style={{ 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              color: 'var(--color-tech-1)', 
              letterSpacing: '0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Altyapı: X / Yazılım Ekibi: Y
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)', 
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1
            }}
          >
            TECHNOLOGY & SOFTWARE
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>
            Güçlü **X altyapımız** ve uzman **Y yazılım ekibimizle**, işletmelerin dijital dönüşüm süreçlerindeki karmaşık teknolojik problemleri çözüyoruz. Ölçeklenebilir, modern ve geleceğe hazır yapılar kuruyoruz.
          </p>
        </div>

        {/* Dynamic Service Grid */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Teknoloji Portföyümüz</h2>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {services.map((svc, index) => (
              <div 
                key={index} 
                className="glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(81, 106, 130, 0.05)',
                    border: '1px solid rgba(81, 106, 130, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-tech-1)'
                  }}
                >
                  <Cpu size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Diagram Panel */}
        <div 
          className="glass-panel"
          style={{
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-tech-1)', letterSpacing: '0.1em' }}>MİMARİMİZ</span>
            <h3 style={{ fontSize: '1.75rem', marginTop: '8px', marginBottom: '20px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>
              Sürdürülebilir ve Yüksek Performanslı Altyapı
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Yazılım ekibimiz, geliştirdiği projelerde en modern mimarileri (Mikroservisler, Serverless, Event-Driven) kullanarak yüksek trafik altında bile sıfır hata ile çalışan sistemler kurgular.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                <Layers size={16} style={{ color: 'var(--color-tech-1)' }} />
                <span>Modüler ve Ayrıştırılmış Katmanlar (Clean Architecture)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                <Database size={16} style={{ color: 'var(--color-tech-1)' }} />
                <span>Bulut Entegrasyonları ve Optimize Edilmiş Veri Tabanı Katmanı</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                <Share2 size={16} style={{ color: 'var(--color-tech-1)' }} />
                <span>Yüksek Hızlı API ve Mikroservis İletişim Protokolleri</span>
              </li>
            </ul>
          </div>

          {/* Interactive Stack Visualization */}
          <div 
            style={{ 
              background: '#f8f9fc', 
              border: '1px solid var(--color-border)', 
              borderRadius: '16px',
              padding: '24px',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              boxShadow: 'inset 0 2px 10px rgba(31, 30, 28, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
              <Terminal size={14} style={{ color: 'var(--color-tech-1)' }} />
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>x_infrastructure_config.json</span>
            </div>
            <div><span style={{ color: '#888' }}>1</span> <span style={{ color: 'var(--color-text-primary)' }}>{"{"}</span></div>
            <div><span style={{ color: '#888' }}>2</span>   &nbsp;&nbsp;"architecture": <span style={{ color: '#8A735E' }}>"Microservices"</span>,</div>
            <div><span style={{ color: '#888' }}>3</span>   &nbsp;&nbsp;"orchestration": <span style={{ color: '#8A735E' }}>"Kubernetes"</span>,</div>
            <div><span style={{ color: '#888' }}>4</span>   &nbsp;&nbsp;"frameworks": <span style={{ color: 'var(--color-tech-1)' }}>["React", "NestJS", "Go"]</span>,</div>
            <div><span style={{ color: '#888' }}>5</span>   &nbsp;&nbsp;"databases": <span style={{ color: 'var(--color-tech-1)' }}>["PostgreSQL", "Redis"]</span>,</div>
            <div><span style={{ color: '#888' }}>6</span>   &nbsp;&nbsp;"ci_cd": <span style={{ color: 'var(--color-tech-1)' }}>"Automated GitOps"</span>,</div>
            <div><span style={{ color: '#888' }}>7</span>   &nbsp;&nbsp;"build_status": <span style={{ color: 'var(--color-cyber-1)', background: 'rgba(91, 111, 99, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>"SUCCESS"</span></div>
            <div><span style={{ color: '#888' }}>8</span> <span style={{ color: 'var(--color-text-primary)' }}>{"}"}</span></div>
          </div>
        </div>

      </div>
      <style>{`
        .back-btn:hover {
          background: rgba(31, 30, 28, 0.06) !important;
          color: var(--color-text-primary) !important;
          border-color: rgba(31, 30, 28, 0.12) !important;
        }
      `}</style>
    </div>
  );
};
