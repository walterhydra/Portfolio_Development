import { useState } from 'react';

export default function About() {
  const splitTitle = "About Me".split(' ');
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about">
      <div className="section-eyebrow">// About</div>
      <h2 className="section-title split-title">
        {splitTitle.map((w, i) => (
          <span key={i} className="word" style={{ transitionDelay: `${i * 0.09}s` }}>{w}{' '}</span>
        ))}
      </h2>
      <div className="about-grid">
        <div className="reveal">
          <div className="about-text">
            <p><strong>Full Stack Web Developer and AI enthusiast</strong> with a passion for building impactful digital solutions. Currently pursuing a B.Tech at Parul Institute of Technology, Vadodara. I specialize in <strong>end-to-end development</strong>, <strong>data cleaning</strong>, and <strong>visualization</strong>, with hands-on experience in sentiment analysis and data processing using<strong> Pandas and NumPy</strong>. I thrive in fast-paced environments and am always eager to collaborate on meaningful projects that<strong> solve real-world problems </strong>.</p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="detail-label">Phone</div><div className="detail-val">+91-7383303388</div>
            <div className="detail-label">Email</div><div className="detail-val"><a href="mailto:milanpandavadra84@gmail.com">milanpandavadra84@gmail.com</a><br /><a href="mailto:milan.flyanytrip@gmail.com">milan.flyanytrip@gmail.com</a></div>
            <div className="detail-label">Based in</div><div className="detail-val">Vadodara, Gujarat, India</div>
            <div className="detail-label">GitHub</div><div className="detail-val"><a href="https://github.com/walterhydra" target="_blank" rel="noreferrer">github.com/walterhydra</a></div>
            <div className="detail-label">LeetCode</div><div className="detail-val"><a href="https://leetcode.com/walterhydra" target="_blank" rel="noreferrer">leetcode.com/walterhydra</a></div>
            <div className="detail-label">LinkedIn</div><div className="detail-val"><a href="https://www.linkedin.com/in/milan-pandavdara/" target="_blank" rel="noreferrer">linkedin.com/in/milan-pandavdara</a></div>
          </div>
        </div>
        <div className="reveal d2">
          <div className={`edu-card-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)} style={{ cursor: 'pointer' }}>
            <div className="edu-card-inner">
              {/* FRONT OF CARD */}
              <div className="edu-card-front" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'left', flex: 1, paddingRight: '2rem', zIndex: 2 }}>
                  <div style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: '800' }}>Identity Card</div>
                  <h3 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', fontFamily: 'var(--display)', lineHeight: '1.1' }}>Milan<br />Pandavadra</h3>
                  <p style={{ fontSize: '1.2rem', color: 'var(--muted)', fontWeight: '400', fontFamily: 'var(--mono)', marginTop: '0.8rem' }}>&lt;Software Engineer /&gt;</p>

                  {/* Abstract Barcode */}
                  <div style={{ marginTop: '1.2rem', width: '100px', height: '20px', background: 'repeating-linear-gradient(90deg, var(--text) 0, var(--text) 2px, transparent 2px, transparent 4px, var(--text) 4px, var(--text) 5px, transparent 5px, transparent 8px, var(--text) 8px, var(--text) 12px, transparent 12px, transparent 15px)', opacity: 0.4 }}></div>

                  <div style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="cursor-blink" style={{ background: 'var(--accent2)', margin: 0, width: '8px', height: '8px', borderRadius: '50%' }}></span>
                    Click to flip
                  </div>
                </div>

                <div className="edu-avatar" style={{ margin: '0', width: '130px', height: '130px', flexShrink: 0, border: '4px solid rgba(255,255,255,0.1)', padding: '4px', background: 'transparent', zIndex: 2, position: 'relative' }}>
                  <img src="/profile.png" alt="Milan" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>

                {/* Decorative Text */}
                <div style={{ position: 'absolute', right: '0', bottom: '-15%', fontSize: '10rem', fontWeight: '900', color: 'rgba(255,255,255,0.02)', lineHeight: '0.7', pointerEvents: 'none', userSelect: 'none', fontFamily: 'var(--display)' }}>
                  DEV
                </div>

                {/* Unique ID / Smart Chip */}
                <div style={{ position: 'absolute', top: '2.5rem', right: '3rem', width: '45px', height: '35px', borderRadius: '6px', background: 'linear-gradient(135deg, #ffd700 0%, #d4af37 100%)', border: '1px solid rgba(255,255,255,0.2)', opacity: 0.8, zIndex: 2, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)' }}></div>
                  <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '1px', background: 'rgba(0,0,0,0.2)' }}></div>
                  <div style={{ position: 'absolute', top: '0', left: '50%', width: '1px', height: '100%', background: 'rgba(0,0,0,0.2)' }}></div>
                </div>
                <div style={{ position: 'absolute', bottom: '2.5rem', right: '3rem', textAlign: 'right', zIndex: 2 }}>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)', letterSpacing: '2px' }}>ID: 0x8F9B2A</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--accent2)', fontFamily: 'var(--mono)', letterSpacing: '2px', marginTop: '0.3rem', fontWeight: '700' }}>ACCESS: ROOT</div>
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="edu-card-back" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Magnetic Stripe */}
                <div style={{ width: '100%', height: '45px', background: 'linear-gradient(90deg, #050505 0%, #151515 50%, #050505 100%)', boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.1), 0 3px 5px rgba(0,0,0,0.5)', marginTop: '2rem', zIndex: 1 }}></div>

                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, width: '100%', alignItems: 'center', padding: '0 1rem' }}>
                  {/* Left Side: QR Code */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://wa.me/917383303388?text=Hello 👋 I found your business card and would love to connect to discuss a potential collaboration. Looking forward to your response. ")}`} alt="Scan for WhatsApp" style={{ width: '130px', height: '130px', borderRadius: '8px', background: '#fff', padding: '8px' }} />
                    <p style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Scan to connect</p>
                  </div>

                  {/* Right Side: Details */}
                  <div style={{ flex: 1, padding: '1.5rem 2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.2rem' }}>
                      <div style={{ flex: 1 }}>
                        <div className="detail-label" style={{ color: 'var(--accent)', marginBottom: '0.3rem' }}>Experience</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: '700' }}>Freelance Dev</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>2023 – Present</p>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="detail-label" style={{ color: 'var(--accent2)', marginBottom: '0.3rem' }}>Education</div>
                        <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: '700' }}>B.Tech CSE</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>CGPA: 8.20 / 10</p>
                      </div>
                    </div>

                    <div className="detail-label" style={{ color: '#fff', marginBottom: '0.6rem' }}>Technology Core</div>
                    <div className="tl-tags" style={{ gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span className="tl-tag" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderColor: 'rgba(255,255,255,0.1)' }}>React</span>
                      <span className="tl-tag" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderColor: 'rgba(255,255,255,0.1)' }}>Node.js</span>
                      <span className="tl-tag" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderColor: 'rgba(255,255,255,0.1)' }}>Python</span>
                      <span className="tl-tag" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderColor: 'rgba(255,255,255,0.1)' }}>AI/ML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
