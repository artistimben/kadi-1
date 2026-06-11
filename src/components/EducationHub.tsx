import React, { useState } from 'react';
import { ArrowLeft, BookOpen, GraduationCap, Video, Award, Lightbulb, Users } from 'lucide-react';

interface EducationHubProps {
  onBack: () => void;
}

export const EducationHub: React.FC<EducationHubProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const activities = [
    { title: 'Online Eğitim Platformu', icon: <BookOpen size={20} />, desc: 'Kendi hızınızda öğrenebileceğiniz, zengin görsel ve pratik ders içeriklerine sahip modern LMS altyapısı.' },
    { title: 'Sertifikasyon Programları', icon: <Award size={20} />, desc: 'Sektör genelinde geçerliliği bulunan, yetkinliğinizi uluslararası ölçekte kanıtlayan dijital sertifikalar.' },
    { title: 'Teknoloji Eğitimleri', icon: <GraduationCap size={20} />, desc: 'Yazılım, bulut bilişim, veri tabanı yönetimi ve modern web teknolojileri üzerine kapsamlı müfredatlar.' },
    { title: 'Yapay Zeka & Medya', icon: <Lightbulb size={20} />, desc: 'AI araçları, makine öğrenmesi uygulamaları ve dijital medya araçlarının etkin yönetimi üzerine niş modüller.' },
    { title: 'Kurumsal Eğitimler', icon: <Users size={20} />, desc: 'Şirketlerin dijitalleşen ekipleri için özelleştirilmiş, iş çıktısı odaklı toplu eğitim programları.' },
    { title: 'Webinar & Workshoplar', icon: <Video size={20} />, desc: 'Sektörün uzman isimleriyle canlı kodlama pratikleri, soru-cevap seansları ve dijital atölye çalışmaları.' }
  ];

  const learningSteps = [
    { id: 0, title: 'Temel Bilgi & Seviye', detail: 'Öğrencinin profil analizini çıkartıp yapay zeka destekli eğitim yol haritasını kurgularız.' },
    { id: 1, title: 'Uygulamalı Kodlama Lab', detail: 'Teorik bilgileri anında tarayıcı içi pratikler ve canlı lab çalışmalarıyla pekiştiririz.' },
    { id: 2, title: 'Bitirme Projesi', detail: 'Sektörün gerçek problemlerini çözen, portfolyoda sergilenebilecek capstone projesi geliştirilir.' },
    { id: 3, title: 'Sertifikasyon & İstihdam', detail: 'Nexera Academy onaylı blockchain tabanlı akıllı sertifika alınarak iş dünyasına katılım sağlanır.' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '120px 24px 60px 24px' }} className="animate-fade-in-up">
      {/* Background Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(163, 101, 83, 0.05) 0%, transparent 70%)',
          top: '20%',
          left: '5%'
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
              color: 'var(--color-edu-1)', 
              letterSpacing: '0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Marka: Nexeraacademy.com
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)', 
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1
            }}
          >
            EDUCATION PLATFORM
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>
            **Nexera Academy** markamızla, geleceğin teknoloji liderlerini ve medya uzmanlarını eğitiyoruz. Dijital dünyanın aradığı güncel yetkinlikleri, uygulamalı ve sertifikalı modellerle sunuyoruz.
          </p>
        </div>

        {/* Career Path Map Widget */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>
            Eğitim Yol Haritası (Learning Path)
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', maxWidth: '600px', fontSize: '0.95rem' }}>
            Nexera Academy platformunda öğrencilerin takip ettiği adım adım başarı metodolojisi. İncelemek için adımların üzerine tıklayın.
          </p>

          <div 
            className="glass-panel"
            style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.45)'
            }}
          >
            {/* Step Selector Horizontal Layout */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                flexWrap: 'wrap',
                gap: '20px',
                zIndex: 2
              }}
            >
              {/* Connector line for large screens */}
              <div 
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '5%',
                  right: '5%',
                  height: '2px',
                  background: 'rgba(31, 30, 28, 0.05)',
                  zIndex: -1
                }}
                className="desktop-connector"
              />

              {learningSteps.map((step) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    flex: '1 1 200px',
                    textAlign: 'center'
                  }}
                >
                  {/* Step Bubble */}
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: activeStep === step.id ? 'linear-gradient(135deg, var(--color-edu-1), var(--color-edu-2))' : '#ffffff',
                      border: activeStep === step.id ? 'none' : '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: activeStep === step.id ? '#ffffff' : 'var(--color-text-secondary)',
                      fontWeight: 'bold',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: activeStep === step.id ? '0 0 20px rgba(163, 101, 83, 0.15)' : 'none',
                      marginBottom: '12px'
                    }}
                    className="step-bubble"
                  >
                    {step.id + 1}
                  </div>
                  <h4 style={{ fontSize: '0.95rem', color: activeStep === step.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', transition: 'color 0.3s', fontWeight: activeStep === step.id ? 'bold' : 'normal' }}>
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Step Details Panel */}
            <div 
              style={{
                background: 'rgba(31, 30, 28, 0.015)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '24px',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                animation: 'fadeInUp 0.3s ease-out'
              }}
              key={activeStep} // Remounts to trigger animation
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--color-edu-1)', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                DETAYLAR - ADIM {activeStep + 1}
              </span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>{learningSteps[activeStep].title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {learningSteps[activeStep].detail}
              </p>
            </div>
          </div>
        </div>

        {/* Activities grid */}
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Eğitim Hizmetlerimiz</h2>
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
                    background: 'rgba(163, 101, 83, 0.04)',
                    border: '1px solid rgba(163, 101, 83, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-edu-1)'
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

      </div>
      <style>{`
        .back-btn:hover {
          background: rgba(31, 30, 28, 0.06) !important;
          color: var(--color-text-primary) !important;
          border-color: rgba(31, 30, 28, 0.12) !important;
        }
        @media (max-width: 768px) {
          .desktop-connector {
            display: none !important;
          }
        }
        .step-bubble:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};
