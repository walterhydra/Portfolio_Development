import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 15) + 5;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase('complete'), 400); // slight pause at 100%
            return 100;
          }
          return next;
        });
      }, 100);
      return () => clearInterval(interval);
    } else if (phase === 'complete') {
      const t = setTimeout(() => {
        setPhase('exit');
      }, 600);
      return () => clearTimeout(t);
    } else if (phase === 'exit') {
      const t = setTimeout(() => {
        onComplete?.();
      }, 800);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      backgroundColor: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
      opacity: phase === 'exit' ? 0 : 1,
      transform: phase === 'exit' ? 'scale(1.05)' : 'scale(1)',
      color: '#fff',
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        padding: '0 2rem'
      }}>
        {/* Animated logo/text shape */}
        <div className="loader-glitch" data-text="SYSTEM_READY" style={{
          fontSize: '1.2rem',
          letterSpacing: '0.3em',
          fontWeight: '600',
          marginBottom: '2rem',
          color: phase === 'complete' ? '#fff' : '#666',
          transition: 'color 0.5s ease',
          position: 'relative'
        }}>
          {phase === 'complete' ? 'ACCESS_GRANTED' : 'INITIALIZING...'}
        </div>

        {/* Progress Bar Container */}
        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: '#222',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          {/* Progress fill */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            backgroundColor: '#5555ff', // Match the spotlight/accent color
            width: `${progress}%`,
            transition: 'width 0.1s ease-out',
            boxShadow: '0 0 10px rgba(85,85,255,0.8)'
          }} />
        </div>

        {/* Info row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          fontFamily: "'Space Grotesk', monospace",
          fontSize: '0.85rem',
          color: '#888',
          letterSpacing: '0.1em'
        }}>
          <span>MILAN_PORTFOLIO</span>
          <span style={{ color: '#fff', fontWeight: 'bold' }}>{progress}%</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .loader-glitch::before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow: 2px 0 red;
          top: 0;
          color: white;
          background: #050505;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0); 
          animation: noise-anim-2 3s infinite linear alternate-reverse;
        }
        @keyframes noise-anim-2{
            0% { clip: rect(78px, 9999px, 86px, 0); }
            5% { clip: rect(66px, 9999px, 12px, 0); }
            10% { clip: rect(21px, 9999px, 87px, 0); }
            15% { clip: rect(93px, 9999px, 83px, 0); }
            20% { clip: rect(59px, 9999px, 5px, 0); }
            25% { clip: rect(24px, 9999px, 20px, 0); }
            30% { clip: rect(80px, 9999px, 30px, 0); }
            35% { clip: rect(100px, 9999px, 30px, 0); }
            40% { clip: rect(38px, 9999px, 22px, 0); }
            45% { clip: rect(31px, 9999px, 60px, 0); }
            50% { clip: rect(19px, 9999px, 5px, 0); }
            55% { clip: rect(54px, 9999px, 46px, 0); }
            60% { clip: rect(58px, 9999px, 53px, 0); }
            65% { clip: rect(4px, 9999px, 86px, 0); }
            70% { clip: rect(93px, 9999px, 89px, 0); }
            75% { clip: rect(66px, 9999px, 55px, 0); }
            80% { clip: rect(24px, 9999px, 61px, 0); }
            85% { clip: rect(15px, 9999px, 41px, 0); }
            90% { clip: rect(73px, 9999px, 22px, 0); }
            95% { clip: rect(84px, 9999px, 98px, 0); }
            100% { clip: rect(7px, 9999px, 59px, 0); }
        }
      `}} />
      <div style={{
         position: 'absolute',
         inset: 0,
         pointerEvents: 'none',
         background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.2) 51%)',
         backgroundSize: '100% 4px',
         opacity: 0.1
      }}></div>
    </div>
  );
}
