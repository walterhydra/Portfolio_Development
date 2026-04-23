import { useEffect, useState, useCallback } from 'react';
import Loader from './components/effects/Loader';
import Navbar from './components/layout/Navbar';
import SideDock from './components/layout/SideDock';
import SectionDots from './components/layout/SectionDots';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import CursorBlob from './components/effects/CursorBlob';
import Spotlight from './components/effects/Spotlight';
import ParticleCanvas from './components/effects/ParticleCanvas';

import Home from './components/sections/Home';
import Stats from './components/sections/Stats';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Certifications from './components/sections/Certifications';
import Experience from './components/sections/Experience';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBTT, setShowBTT] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    document.body.style.overflow = '';
  }, []);

  // Lock scroll while loader is active
  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden';
  }, [loading]);

  useEffect(() => {
    // Scroll handling
    let ticking = false;

    const performScrollUpdate = () => {
      setScrolled(window.scrollY > 40);

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / documentHeight) * 100;
      setScrollProgress(pct);

      setShowBTT(window.scrollY > 400);

      // Section dots
      const secs = ['home', 'skills', 'work', 'certifications', 'experience', 'about', 'contact'];
      for (const id of secs) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5) {
            setActiveSection(id);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(performScrollUpdate);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Intersection Observer for reveals `.vis`
    const counter = (el, target, dur=1300) => {
      let s = null;
      const step = (ts) => {
        if (!s) s = ts;
        const p = Math.min((ts - s) / dur, 1);
        el.textContent = Math.floor(p * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('vis');
        el.querySelectorAll('.count').forEach(c => counter(c, +c.dataset.target));
        
        if (el.id === 'skillsRow') el.querySelectorAll('.skill-chip').forEach((c, i) => setTimeout(() => c.classList.add('vis'), i * 45));
        if (el.id === 'ringsGrid') {
          el.querySelectorAll('.skill-ring-card').forEach((c, i) => {
            setTimeout(() => {
              c.classList.add('vis');
            }, i * 110);
          });
        }
        if (el.id === 'projectsGrid') el.querySelectorAll('.project-card').forEach((c, i) => setTimeout(() => c.classList.add('vis'), i * 110));
        if (el.classList.contains('certs-list')) el.querySelectorAll('.cert-row').forEach((c, i) => setTimeout(() => c.classList.add('vis'), i * 100));
        if (el.classList.contains('timeline')) el.querySelectorAll('.tl-item').forEach((c, i) => setTimeout(() => c.classList.add('vis'), i * 130));
        
        io.unobserve(el);
      });
    }, { threshold: 0.06 });

    // Allow slight delay to ensure child components are rendered before observing
    setTimeout(() => {
      document.querySelectorAll('.reveal, .split-title, #skillsRow, #ringsGrid, #projectsGrid, .certs-list, .timeline, .stats-strip').forEach(el => io.observe(el));
    }, 100);

    // Safety timeout to ensure loader clears and opacity is set
    const safetyTimeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
      document.body.style.opacity = '1';
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Global click ripple
  useEffect(() => {
    const handleClick = (e) => {
      const r = document.createElement('div');
      r.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:8px;height:8px;background:rgba(85,85,255,.55);border-radius:50%;pointer-events:none;z-index:9994;transform:translate(-50%,-50%);animation:ripple .6s ease forwards`;
      document.body.appendChild(r);
      setTimeout(() => { if (r.parentNode) r.parentNode.removeChild(r); }, 640);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div id="prog" style={{ width: `${scrollProgress}%` }}></div>
      <Spotlight />
      <ParticleCanvas isPaused={false} />
      <CursorBlob isHidden={false} />
      
      <Navbar scrolled={scrolled} />
      <SideDock />
      <SectionDots activeSection={activeSection} />
      <BackToTop show={showBTT} />

      <main>
        <Home />
        <Stats />
        <Skills />
        <Work onModalChange={setIsModalOpen} />
        <Certifications onModalChange={setIsModalOpen} />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
