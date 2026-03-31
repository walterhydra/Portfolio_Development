import { useState, useEffect } from 'react';

export default function Navbar({ scrolled }) {
  const [time, setTime] = useState('');

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

  return (
    <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo" style={{ overflow: 'hidden' }}>
        <img src="/profile.png" alt="Milan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><span className="nav-clock">{time}</span></li>
        <li>
          <button className="theme-btn" id="themeBtn" title="Toggle theme" onClick={toggleTheme}></button>
        </li>
      </ul>
    </nav>
  );
}
