import { useState, useEffect } from 'react';

export default function Navbar({ scrolled }) {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
    return () => document.body.classList.remove('lock-scroll');
  }, [isMenuOpen]);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo" style={{ overflow: 'hidden' }}>
          <img src="/profile.png" alt="Milan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          {menuItems.map(item => (
            <li key={item.label}><a href={item.href}>{item.label}</a></li>
          ))}
          <li><span className="nav-clock">{time}</span></li>
          <li>
            <button className="theme-btn" id="themeBtn" title="Toggle theme" onClick={toggleTheme}></button>
          </li>
        </ul>

        {/* Mobile Actions */}
        <div className="mobile-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme"></button>
          <button 
            className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
          <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <span className="nav-clock">{time}</span>
          <button className="theme-btn" onClick={toggleTheme}></button>
        </div>
      </div>
    </>
  );
}
