import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const phrases = ['React & Node apps', 'full-stack solutions', 'AI-powered tools', 'responsive UIs', 'REST API services'];
    let pi = 0, ci = 0, del = false;
    let timeoutId;

    const tw = () => {
      const cur = phrases[pi];
      if (!del) {
        setTypedText(cur.slice(0, ci + 1));
        ci++;
        if (ci === cur.length) {
          del = true;
          timeoutId = setTimeout(tw, 1600);
          return;
        }
      } else {
        setTypedText(cur.slice(0, ci - 1));
        ci--;
        if (ci === 0) {
          del = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(tw, del ? 50 : 85);
    };
    tw();

    return () => clearTimeout(timeoutId);
  }, []);

  const headingWords = "Hi, I'm Milan, a principal engineer where reliability, scale, and precision are never an afterthought.".split(' ');

  const handleWordEnter = (e) => {
    const letters = e.currentTarget.querySelectorAll('.hero-letter');
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('float');
      }, i * 30);
    });
  };

  const handleWordLeave = (e) => {
    const letters = e.currentTarget.querySelectorAll('.hero-letter');
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.remove('float');
      }, i * 30);
    });
  };

  return (
    <section id="home">
      <div className="hero-role-row">
        <span className="hero-role" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }}></span>
          Available for New Projects
        </span>
        <a href="/MILAN_FINAL_RESUME.pdf" className="btn-cv" download="MILAN_FINAL_RESUME.pdf">Download CV</a>
      </div>
      <h1 className="hero-heading" id="heroHeading">
        {headingWords.map((w, wi) => (
          <span
            key={wi}
            className="word hero-word"
            style={{ animationDelay: `${(0.35 + wi * 0.06).toFixed(2)}s` }}
            onMouseEnter={handleWordEnter}
            onMouseLeave={handleWordLeave}
          >
            {w.split('').map((ch, ci) => (
              <span key={ci} className="hero-letter">{ch}</span>
            ))}
          </span>
        ))}
      </h1>
      <div className="hero-sub">
        <span className="hero-intro">I build &amp; design —</span>
        <div className="typewriter-line" id="twLine" style={{ color: 'var(--accent)' }}>
          {typedText}<span className="cursor-blink"></span>
        </div>
        <p className="hero-desc" style={{ maxWidth: '650px', lineHeight: '1.6' }}>
          Designing fault-tolerant backend infrastructures and precision-crafted interfaces that turn ambitious ideas into polished, production-ready realities.
        </p>
        
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', pointerEvents: 'auto' }}>
          <a href="#work" style={{ padding: '0.8rem 1.8rem', background: 'var(--text)', color: 'var(--bg)', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            Explore My Work
          </a>
          <a href="#contact" style={{ padding: '0.8rem 1.8rem', background: 'var(--text)', color: 'var(--bg)', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            Let's Talk
          </a>
        </div>
      </div>
      <div className="scroll-hint"><span>Scroll</span><span className="scroll-arrow">↓</span></div>
    </section>
  );
}
