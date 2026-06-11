import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Check, Play, RefreshCw } from 'lucide-react';

interface CyberSecurityHubProps {
  onBack: () => void;
}

export const CyberSecurityHub: React.FC<CyberSecurityHubProps> = ({ onBack }) => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const activities = [
    { title: 'Siber Güvenlik Danışmanlığı', desc: 'Sistemlerinizi tehditlere karşı korumak için kapsamlı risk analizleri ve yol haritaları hazırlarız.' },
    { title: 'Penetrasyon (Sızma) Testleri', desc: 'Altyapınızdaki güvenlik açıklarını hacker bakış açısıyla tespit eder ve raporlarız.' },
    { title: 'HA (High Availability) Çözümleri', desc: 'Kesintisiz operasyon gerektiren sistemler için yedekli ve yüksek erişilebilir mimariler tasarlarız.' },
    { title: 'Failover & Cluster Sistemleri', desc: 'Sunucu çökmelerine karşı otomatik geçiş ve yük dengeleme altyapıları kurarız.' },
    { title: 'Veri Güvenliği ve Şifreleme', desc: 'Hassas kurumsal verilerin depolanması ve iletilmesi aşamalarında gelişmiş şifreleme çözümleri.' },
    { title: 'Network Altyapı Çözümleri', desc: 'Güvenli, hızlı ve optimize edilmiş yerel/geniş alan ağ mimarileri kurgularız.' },
    { title: 'Güvenlik İzleme Sistemleri', desc: 'Sistemlerinizi 7/24 izleyen, anormal aktiviteleri anında tespit eden alarm mekanizmaları.' },
    { title: 'Veri Merkezi Operasyonları', desc: 'Büyük ölçekli sunucu parkurlarının yönetimi, bakım, optimizasyon ve sistem izleme süreçleri.' }
  ];

  const simulatedLogs = [
    'Initializing vulnerability scanner...',
    'Analyzing network endpoints (port 80, 443, 22)...',
    'Checking SSL/TLS cipher suites... SECURE',
    'Auditing active database connection pools...',
    'Testing High Availability node failover times...',
    'Failover node responded in 18ms. PASS',
    'Checking cluster replication latency... 0.02ms',
    'Running SQL Injection & XSS simulation filters...',
    'Audit Complete: No high-risk vulnerability found.'
  ];

  const startScan = () => {
    setScanState('scanning');
    setLogs([]);
  };

  useEffect(() => {
    if (scanState !== 'scanning') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < simulatedLogs.length) {
        setLogs(prev => [...prev, simulatedLogs[index]]);
        index++;
      } else {
        clearInterval(interval);
        setScanState('success');
      }
    }, 450);

    return () => clearInterval(interval);
  }, [scanState]);

  return (
    <div style={{ position: 'relative', width: '100%', padding: '120px 24px 60px 24px' }} className="animate-fade-in-up">
      {/* Background Glow */}
      <div 
        className="glow-element glow-pulse" 
        style={{
          background: 'radial-gradient(circle, rgba(91, 111, 99, 0.05) 0%, transparent 70%)',
          top: '30%',
          right: '5%'
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
              color: 'var(--color-cyber-1)', 
              letterSpacing: '0.15rem',
              textTransform: 'uppercase'
            }}
          >
            Marka: Xy
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 1.5rem + 3vw, 3.5rem)', 
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1
            }}
          >
            CYBER SECURITY & IT
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', fontSize: '1.1rem' }}>
            Sistemlerinizin güvenliğini ve kesintisiz çalışmasını **Xy** markamız altında garanti altına alıyoruz. Sıfır duruş (zero downtime) hedefiyle veri merkezlerinizi ve sunucularınızı yönetiyoruz.
          </p>
        </div>

        {/* Interactive Terminal Widget */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>
            Xy Güvenlik Simülatörü
          </h2>
          
          <div 
            className="glass-panel"
            style={{
              padding: '32px',
              background: '#f8f9fc',
              border: '1px solid var(--color-border)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}
          >
            {/* Terminal screen */}
            <div 
              style={{
                background: '#f1f5f9',
                borderRadius: '12px',
                border: '1px solid rgba(31, 30, 28, 0.07)',
                padding: '24px',
                fontFamily: 'monospace',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'inset 0 4px 15px rgba(31,30,28,0.02)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ color: 'var(--color-text-muted)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', paddingBottom: '6px', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>XY SECURITY PORTAL v3.1</span>
                  <span>SYSTEM STATUS: OK</span>
                </div>
                
                {logs.length === 0 && scanState === 'idle' && (
                  <div style={{ color: 'var(--color-text-muted)', marginTop: '20px' }}>
                    Sistem taramasını başlatmak için sağdaki butona tıklayın...
                  </div>
                )}

                {logs.map((log, i) => (
                  <div key={i} style={{ color: 'var(--color-cyber-1)', fontSize: '0.85rem', display: 'flex', gap: '8px', fontWeight: 'bold' }}>
                    <span>&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}

                {scanState === 'scanning' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-cyber-2)', fontSize: '0.85rem', marginTop: '4px' }}>
                    <RefreshCw size={12} className="spin" />
                    <span>Analyzing...</span>
                  </div>
                )}
              </div>

              {scanState === 'success' && (
                <div 
                  style={{ 
                    border: '1px solid var(--color-cyber-1)', 
                    background: 'rgba(91, 111, 99, 0.08)', 
                    color: 'var(--color-cyber-1)', 
                    padding: '12px', 
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.85rem',
                    animation: 'fadeInUp 0.3s',
                    fontWeight: 'bold'
                  }}
                >
                  <Check size={16} />
                  <span>Sistem Tamamen Güvenli. Güvenlik Derecesi: 100/100</span>
                </div>
              )}
            </div>

            {/* Controller info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)' }}>Neden Güvenlik Denetimi?</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                Xy Siber Güvenlik ekibi, sistemlerinizin zafiyetlerini proaktif bir yaklaşımla inceler. Altyapınızı en zorlu saldırı senaryolarına göre simüle ederek yapılandırırız.
              </p>
              
              <div>
                {scanState === 'idle' || scanState === 'success' ? (
                  <button
                    onClick={startScan}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, var(--color-cyber-1), var(--color-cyber-2))',
                      border: 'none',
                      color: '#ffffff',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      boxShadow: '0 4px 15px rgba(91, 111, 99, 0.15)'
                    }}
                    className="scan-btn"
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Güvenlik Taramasını Başlat</span>
                  </button>
                ) : (
                  <button
                    disabled
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(0, 0, 0, 0.05)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-muted)',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      cursor: 'not-allowed'
                    }}
                  >
                    <RefreshCw size={16} className="spin" />
                    <span>Analiz Ediliyor...</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Activities grid */}
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-title)' }}>Uzmanlık Alanlarımız</h2>
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
                    background: 'rgba(91, 111, 99, 0.04)',
                    border: '1px solid rgba(91, 111, 99, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-cyber-1)'
                  }}
                >
                  <Shield size={20} />
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1.5s linear infinite;
        }
        .scan-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(91, 111, 99, 0.25) !important;
        }
      `}</style>
    </div>
  );
};
