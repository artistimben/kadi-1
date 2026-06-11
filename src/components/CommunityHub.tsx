import React from 'react';
import { ArrowLeft, Users, Heart, MessageSquare, Radio } from 'lucide-react';

interface CommunityHubProps {
  onBack: () => void;
}

export const CommunityHub: React.FC<CommunityHubProps> = ({ onBack }) => {
  const activities = [
    { title: 'Dijital Topluluk Platformları', desc: 'Belli ilgi alanlarına, hedeflere veya profesyonel gruplara hitap eden ölçeklenebilir özel sosyal ağlar.' },
    { title: 'Sosyal Fayda Projeleri', desc: 'Toplumsal faydayı gözeterek tasarlanmış dijital farkındalık, bağış veya ortak çalışma platformları.' },
    { title: 'Forum & Topluluk Altyapıları', desc: 'Soru-cevap, forum ve interaktif kütüphaneleri bir araya getiren modern bilgi havuzu çözümleri.' },
    { title: 'Dijital Üyelik Sistemleri', desc: 'Özel üyelik kademeleri, abonelik modelleri ve yetkilendirme altyapıları sunan topluluk modülleri.' },
    { title: 'Emekli Kamu Platformları', desc: 'Emekli kamu çalışanları gibi özel hedef kitlelerin iletişimini, dayanışmasını ve bilgi paylaşımını sağlayan portallar.' },
    { title: 'Networking & B2B Projeleri', desc: 'Profesyonelleri bir araya getiren, iş birliklerini ve ağ kurmayı kolaylaştıran özel ekosistem yazılımları.' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '120px 24px 60px 24px' }} className="animate-fade-in-up">
      {/* Background Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(110, 124, 130, 0.05) 0%, transparent 70%)',
          bottom: '20%',
          right: '10%'
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
              color: 'var(--color-comm-1)', 
              letterSpacing: '0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Marka: Silvermind
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)', 
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1
            }}
          >
            COMMUNITY & DIGITAL PLATFORMS
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>
            **Silvermind** markamızla, insanları ortak hedefler ve sosyal fayda paydalarında buluşturan dijital topluluk ekosistemleri inşa ediyoruz. Dijital etkileşimi kalıcı bağlara dönüştürüyoruz.
          </p>
        </div>

        {/* Mock Analytics Dashboard Widget */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>
            Silvermind Topluluk Metrikleri
          </h2>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px'
            }}
          >
            <div className="glass-card" style={{ padding: '24px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>AKTİF ÜYE SAYISI</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-comm-1)', boxShadow: '0 0 10px var(--color-comm-1)' }} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>124,520</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-comm-1)', marginTop: '4px', fontWeight: 'bold' }}>▲ 12% geçen aya göre</p>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>SOSYAL FAYDA PROJELERİ</span>
                <Heart size={16} style={{ color: 'var(--color-media-1)' }} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>12</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>Tamamlanan & Aktif</p>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>GÜNLÜK ETKİLEŞİM</span>
                <MessageSquare size={16} style={{ color: 'var(--color-tech-1)' }} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>45,800</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-tech-1)', marginTop: '4px', fontWeight: 'bold' }}>Mesaj & Yorum</p>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>AĞ KAPSAMA ALANI</span>
                <Radio size={16} style={{ color: 'var(--color-edu-1)' }} />
              </div>
              <h3 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>81 İL</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>Türkiye Geneli Erişim</p>
            </div>
          </div>
        </div>

        {/* Activities grid */}
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Faaliyet Alanlarımız</h2>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {activities.map((act, index) => (
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
                    background: 'rgba(110, 124, 130, 0.04)',
                    border: '1px solid rgba(110, 124, 130, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-comm-1)'
                  }}
                >
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>{act.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{act.desc}</p>
              </div>
            ))}
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
