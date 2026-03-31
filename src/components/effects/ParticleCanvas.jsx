import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ isPaused = false }) {
  const cnvRef = useRef(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const cnv = cnvRef.current;
    if (!cnv) return;
    const c = cnv.getContext('2d', { alpha: false }); // Optimize by removing alpha channel
    if (!c) return;
    
    let animationId;
    let step = 0;
    
    const resizeCnv = () => {
      cnv.width = window.innerWidth;
      cnv.height = window.innerHeight;
    };
    resizeCnv();
    window.addEventListener('resize', resizeCnv);

    // Track theme changes with MutationObserver for better performance rather than checking on every frame
    let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    
    const draw = () => {
      animationId = requestAnimationFrame(draw);

      if (isPausedRef.current) return; // Skip rendering frame if paused

      // Clear background based on theme
      c.fillStyle = isDark ? '#030303' : '#ffffff';
      c.fillRect(0, 0, cnv.width, cnv.height);

      // Increase step for animation flow
      step += 0.006;
      
      const lines = 12; // reduced slightly for fps
      
      for (let i = 0; i < lines; i++) {
        c.beginPath();
        c.lineWidth = i === 5 ? 2.5 : 1.5;
        
        // Base color for waves
        const alpha = isDark ? (0.03 + (i / lines) * 0.15) : (0.04 + (i / lines) * 0.25);
        c.strokeStyle = 'rgba(85, 85, 255, ' + alpha + ')';

        for (let x = 0; x <= cnv.width; x += 30) { // Increased step size to reduce path operations
          // Complex interwoven sine wave generation
          const y = (cnv.height / 2) 
            + Math.sin(x * 0.002 + step + i * 0.15) * 150 
            + Math.sin(x * 0.004 - step * 1.5 + i * 0.05) * 80
            + Math.cos(x * 0.001 + step * 0.5 + i * 0.2) * 200;
            
          if (x === 0) c.moveTo(x, y);
          else c.lineTo(x, y);
        }
        c.stroke();
      }
    };
    
    // Start animation loop
    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCnv);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return <canvas id="net-canvas" ref={cnvRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}></canvas>;
}
