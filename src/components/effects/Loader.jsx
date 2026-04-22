import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 8) + 2;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase('complete'), 400); 
            return 100;
          }
          return next;
        });
      }, 60);
      return () => clearInterval(interval);
    } else if (phase === 'complete') {
      const t = setTimeout(() => {
        setPhase('exit');
      }, 600);
      return () => clearTimeout(t);
    } else if (phase === 'exit') {
      const t = setTimeout(() => {
        onComplete?.();
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: phase === 'exit' ? 'none' : 'auto',
      backgroundColor: 'transparent'
    }}>
      {/* Splash panels for modern split exit animation */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '50vh',
        backgroundColor: 'var(--bg, #ffffff)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: phase === 'exit' ? 'translateY(-100%)' : 'translateY(0)',
        zIndex: 1
      }} className="loader-panel" />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, width: '100%', height: '50vh',
        backgroundColor: 'var(--bg, #ffffff)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        transform: phase === 'exit' ? 'translateY(100%)' : 'translateY(0)',
        zIndex: 1
      }} className="loader-panel" />

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '500px',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2,
        transition: 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'scale(0.95)' : 'scale(1)',
      }}>
        
        {/* Geometric animated logo alternative */}
        <div style={{
          position: 'relative',
          width: '70px',
          height: '70px',
          marginBottom: '2.5rem'
        }}>
          {/* Inner shape */}
          <div style={{
            position: 'absolute',
            inset: '15px',
            backgroundColor: 'var(--accent, #6366f1)',
            opacity: progress / 100,
            transform: `scale(${0.5 + (0.5 * progress) / 100})`,
            transition: 'opacity 0.2s, transform 0.2s',
            borderRadius: '4px'
          }}></div>
          
          {/* Outer rotating borders */}
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid var(--text, #0f172a)',
            borderRadius: '8px',
            animation: 'loadspin 3s cubic-bezier(0.76, 0, 0.24, 1) infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid transparent',
            borderTopColor: 'var(--accent2, #ec4899)',
            borderBottomColor: 'var(--accent3, #10b981)',
            borderRadius: '8px',
            opacity: 0.7,
            animation: 'loadspin 3s cubic-bezier(0.76, 0, 0.24, 1) infinite reverse'
          }}></div>
        </div>

        {/* Text Area */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          marginBottom: '1.2rem',
          color: 'var(--text, #0f172a)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--muted, #64748b)',
              marginBottom: '0.3rem',
              transform: phase === 'complete' ? 'translateY(20px)' : 'translateY(0)',
              opacity: phase === 'complete' ? 0 : 1,
              transition: 'transform 0.5s ease, opacity 0.5s ease',
            }}>
              System Initialization
            </div>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              fontFamily: 'var(--display, sans-serif)',
              textTransform: 'uppercase',
              transform: phase === 'complete' ? 'translateY(100%)' : 'translateY(0)',
              opacity: phase === 'complete' ? 0 : 1,
              transition: 'transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s',
            }}>
              Loading Portoflio
            </div>
          </div>
          
          <div style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            fontFamily: 'var(--mono, monospace)',
            lineHeight: 0.8,
            display: 'flex',
            alignItems: 'flex-end',
            color: phase === 'complete' ? 'var(--accent, #6366f1)' : 'var(--text, #0f172a)',
            transition: 'color 0.5s ease'
          }}>
            {progress}<span style={{ fontSize: '1.2rem', marginLeft: '4px', marginBottom: '4px', color: 'var(--muted, #64748b)' }}>%</span>
          </div>
        </div>
        
        {/* Sleek Progress Bar */}
        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--border, rgba(0,0,0,0.05))',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: phase === 'complete' ? 'var(--accent3, #10b981)' : 'var(--text, #0f172a)',
            width: `${progress}%`,
            transition: 'width 0.2s ease-out, background 0.5s ease'
          }} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loadspin {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
