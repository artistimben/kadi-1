import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'all',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'all',
        message: ''
      });
      
      // Clear success screen after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact-section"
      className="scroll-reveal"
      style={{
        maxWidth: '800px',
        margin: '80px auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div 
        className="glass-panel"
        style={{
          padding: '48px',
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.55)'
        }}
      >
        {/* Glow */}
        <div 
          className="glow-element glow-pulse"
          style={{
            background: 'var(--color-tech-1)',
            top: '-200px',
            right: '-200px',
            width: '350px',
            height: '350px',
            opacity: 0.05
          }}
        />

        {isSubmitted ? (
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px 0',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            <CheckCircle2 size={64} style={{ color: 'var(--color-cyber-1)', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>Mesajınız Alındı!</h3>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
              Kadıoğlu Dijital Group ekibi olarak mesajınızı aldık. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>Bize Ulaşın</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Projeleriniz, yatırımlarınız veya iş birlikleri hakkında konuşmak için formumuzu doldurabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Row 1 */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={inputContainerStyle}>
                  <label htmlFor="name" style={labelStyle}>Adınız & Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Örn: Ahmet Kadıoğlu"
                  />
                </div>

                <div style={inputContainerStyle}>
                  <label htmlFor="email" style={labelStyle}>E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={inputContainerStyle}>
                  <label htmlFor="phone" style={labelStyle}>Telefon Numarası</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+90 (___) ___ __ __"
                  />
                </div>

                <div style={inputContainerStyle}>
                  <label htmlFor="subject" style={labelStyle}>İlgilendiğiniz Alan</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={selectStyle}
                  >
                    <option value="all">Genel İletişim / İş Birliği</option>
                    <option value="media">Media & Experience (Dioreal)</option>
                    <option value="tech">Technology & Software</option>
                    <option value="cyber">Cyber Security & IT (Xy)</option>
                    <option value="edu">Education Platform (Nexera Academy)</option>
                    <option value="community">Community & Digital Platforms (Silvermind)</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div style={inputContainerStyle}>
                <label htmlFor="message" style={labelStyle}>Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={textareaStyle}
                  placeholder="Bize projenizden bahsedin..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--color-tech-1) 0%, var(--color-tech-2) 100%)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.25)',
                  marginTop: '10px'
                }}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <span>İletişime Geç</span>
                    <Send size={16} />
                  </>
                )}
              </button>

            </form>
          </div>
        )}
      </div>

      <style>{`
        /* Form inputs validation visual states from best practices CSS guide */
        input:user-invalid, textarea:user-invalid {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1) !important;
        }
        input:user-valid, textarea:user-valid {
          border-color: rgba(16, 185, 129, 0.3) !important;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4) !important;
          filter: brightness(1.05);
        }
        
        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

const inputContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  position: 'relative'
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-title)'
};

const inputStyle: React.CSSProperties = {
  padding: '14px 18px',
  borderRadius: '12px',
  background: 'rgba(0, 0, 0, 0.015)',
  border: '1px solid var(--color-border)',
  color: 'var(--color-text-primary)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'var(--font-sans)',
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)'
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'none',
  background: 'rgba(0, 0, 0, 0.015) url("data:image/svg+xml;utf8,<svg fill=\'%2364748b\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>") no-repeat right 12px center'
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: 'vertical'
};
