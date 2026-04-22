import { useState, useRef, useEffect } from 'react';

function MagneticButton({ onClick, children, isSent }) {
  const btnRef = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left - r.width / 2) * 0.35;
    const ny = (e.clientY - r.top - r.height / 2) * 0.35;
    setTransform(`translate(${nx}px, ${ny}px)`);
  };

  const handleMouseLeave = () => setTransform('');

  return (
    <button
      ref={btnRef}
      className="btn-magnetic"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, background: isSent ? '#22c55e' : '' }}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btnText, setBtnText] = useState('Send Message →');
  const [isSent, setIsSent] = useState(false);
  const containerRef = useRef(null);

  const launchConfetti = () => {
    const btn = document.querySelector('.btn-magnetic');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();

    const colors = ['#5555ff', '#ff5580', '#22c55e', '#f59e0b', '#a78bfa', '#06b6d4'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      const angle = Math.random() * Math.PI * 2;
      const dist = 120 + Math.random() * 200;

      p.style.cssText = `
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top}px;
        background: ${colors[~~(Math.random() * colors.length)]};
        --dx: ${Math.cos(angle) * dist}px;
        --dy: ${-(80 + Math.random() * 180)}px;
        --dur: ${0.8 + Math.random() * 0.8}s;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        width: ${6 + Math.random() * 6}px;
        height: ${6 + Math.random() * 6}px;
      `;
      document.body.appendChild(p);
      setTimeout(() => { if (p.parentNode) p.parentNode.removeChild(p); }, 1700);
    }
  };

  const handleSend = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!name || !email || !message) {
      setBtnText('Please fill all fields');
      setTimeout(() => setBtnText('Send Message →'), 2000);
      return;
    }

    setBtnText('Sending...');

    // Web3Forms Integration
    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", "New Message from Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        const friendName = name.trim() || '';
        launchConfetti();
        setBtnText(`✓ Sent! Thanks ${friendName}`);
        setIsSent(true);
        setName(''); setEmail(''); setMessage('');

        setTimeout(() => {
          setBtnText('Send Message →');
          setIsSent(false);
        }, 4000);
      } else {
        setBtnText('Error sending email');
        setTimeout(() => setBtnText('Send Message →'), 4000);
      }
    } catch (err) {
      setBtnText('Network Error');
      setTimeout(() => setBtnText('Send Message →'), 4000);
    }
  };

  return (
    <section id="contact" ref={containerRef}>
      <div className="contact-grid">
        <div className="reveal">
          <div className="section-eyebrow">// Contact</div>
          <h2 className="contact-big-title">Let's Connect</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
          <div className="c-label">Email</div><div className="c-val">milanpandavadra84@gmail.com</div>
          <div className="c-label">Based in</div><div className="c-val">Vadodara, Gujarat, India</div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/milan-pandavdara/" target="_blank" rel="noreferrer" className="social-link">
              <span className="s-dot" style={{ background: '#0077b5' }}></span>LinkedIn
            </a>
            <a href="https://github.com/walterhydra" target="_blank" rel="noreferrer" className="social-link">
              <span className="s-dot" style={{ background: '#888' }}></span>GitHub
            </a>
            <a href="https://leetcode.com/walterhydra" target="_blank" rel="noreferrer" className="social-link">
              <span className="s-dot" style={{ background: '#f59e0b' }}></span>LeetCode
            </a>
          </div>
        </div>
        <div className="reveal d2">
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell me about your project..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <MagneticButton onClick={handleSend} isSent={isSent}>{btnText}</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
