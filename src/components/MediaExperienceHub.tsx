import React from 'react';
import { ArrowLeft, Sparkles, Share2, Camera, Film, Users, BookOpen, Map, Award } from 'lucide-react';

interface MediaExperienceHubProps {
  onBack: () => void;
}

export const MediaExperienceHub: React.FC<MediaExperienceHubProps> = ({ onBack }) => {
  const activities = [
    { title: 'Sosyal Medya Yönetimi', icon: <Share2 size={20} />, desc: 'Marka kimliğinize uygun, veri odaklı ve etkileşim gücü yüksek sosyal medya stratejileri.' },
    { title: 'İçerik Üretimi', icon: <BookOpen size={20} />, desc: 'Görsel ve yazılı mecralar için hedef kitleyi yakalayan yaratıcı ve profesyonel hikayeler.' },
    { title: 'Influencer Marketing', icon: <Users size={20} />, desc: 'Doğru kanaat önderleriyle markanızı buluşturan, yüksek dönüşümlü kampanya kurguları.' },
    { title: 'Fotoğraf & Video Prodüksiyon', icon: <Camera size={20} />, desc: '4K ve sinematik standartlarda kurumsal tanıtım filmleri, reklamlar ve sosyal medya videoları.' },
    { title: 'Destinasyon Tanıtımı', icon: <Map size={20} />, desc: 'Turistik ve bölgesel değerleri küresel standartlarda tanıtan yenilikçi medya projeleri.' },
    { title: 'Turizm & Yaşam Medya Projeleri', icon: <Award size={20} />, desc: 'Sektör lideri kuruluşlar için lifestyle ve turizm temalı niş yayıncılık projeleri.' },
    { title: 'Marka Konumlandırma', icon: <Sparkles size={20} />, desc: 'Rakipleriniz arasından sıyrılmanızı sağlayacak özgün algı ve kimlik tasarımı.' },
    { title: 'Event & Organizasyon Yönetimi', icon: <Film size={20} />, desc: 'Marka lansmanları, basın toplantıları ve dijital entegrasyonlu fiziksel etkinlikler.' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '120px 24px 60px 24px' }} className="animate-fade-in-up">
      {/* Background Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(138, 115, 94, 0.05) 0%, transparent 70%)',
          top: '10%',
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
              color: 'var(--color-media-1)', 
              letterSpacing: '0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Marka: Dioreal
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)', 
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1
            }}
          >
            MEDIA & EXPERIENCE
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>
            Kadıoğlu Dijital Group bünyesindeki kreatif gücümüzü temsil eden **Dioreal**, dijital dünyada iz bırakan görsel hikayeler, yaşam tarzı yayıncılığı ve profesyonel medya prodüksiyonları tasarlar.
          </p>
        </div>

        {/* Dynamic Activity Grid */}
        <div style={{ marginBottom: '80px' }}>
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
                    background: 'rgba(138, 115, 94, 0.04)',
                    border: '1px solid rgba(138, 115, 94, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-media-1)'
                  }}
                >
                  {act.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)' }}>{act.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Brand Panel */}
        <div 
          className="glass-panel"
          style={{
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            borderLeft: '4px solid var(--color-media-1)',
            background: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Dioreal Lifestyle & Editorial</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Turizm, destinasyon tanıtımı ve premium yaşam tarzı alanlarında markaların dijital görünürlüğünü en üst seviyeye çıkartıyoruz. Dioreal markası altında ürettiğimiz özel yayınlar ve prodüksiyonlarla, kitlelere sadece içerik değil; bütünsel bir deneyim sunuyoruz.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>10M+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Aylık Erişim</p>
              </div>
              <div style={{ width: '1px', height: '30px', background: 'var(--color-border)' }} />
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>200+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Prodüksiyon Projesi</p>
              </div>
            </div>
          </div>
          
          <div 
            style={{ 
              background: 'rgba(138, 115, 94, 0.02)', 
              border: '1px solid rgba(138, 115, 94, 0.06)', 
              padding: '30px', 
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <h4 style={{ color: 'var(--color-media-1)', fontWeight: 700, marginBottom: '8px' }}>Yaratıcı Fikirler & Büyük Kampanyalar</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Hedefimiz, markanızın hikayesini sıradanlıktan uzaklaştırıp birer dijital sanat eserine ve yüksek performans gösteren kampanyalara dönüştürmektir.
            </p>
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
