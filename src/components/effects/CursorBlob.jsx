import { useEffect, useRef, useState, memo } from 'react';

const CursorBlob = memo(function CursorBlob({ isHidden }) {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const scale = useRef(1);
  const isActiveRef = useRef(false);

  useEffect(() => {
    if (isHidden) return; // Completely disable mouse tracking when hidden

    let ticking = false;

    const performMouseUpdate = (clientX, clientY, target) => {
      mousePos.current = { x: clientX, y: clientY };

      if (target && target.matches && target.closest) {
        // Precise text detection: matches specific tags or closest interactive parent
        const isWord = target.matches('p, h1, h2, h3, h4, h5, h6, span, li, label, strong, em, b, i, a, button');
        const isInteraction = target.closest('.interactive, .project-card, .dock-link, [role="button"], .cert-row');
        const newActive = !!(isWord || isInteraction);

        if (newActive !== isActiveRef.current) {
          isActiveRef.current = newActive;
          setIsActive(newActive); // Only update state when it changes
        }
      }
      ticking = false;
    };

    const onMouseMove = (e) => {
      if (!ticking) {
        const clientX = e.clientX;
        const clientY = e.clientY;
        const target = e.target;
        requestAnimationFrame(() => performMouseUpdate(clientX, clientY, target));
        ticking = true;
      }
    };

    const animate = () => {
      const lerpFactor = 0.5; // Adjusted to purely blend frames beautifully without feeling slow
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

      const targetScale = isActiveRef.current ? 0.7 : 0.15;
      scale.current += (targetScale - scale.current) * 0.4;

      if (cursorRef.current) {
        const x = cursorPos.current.x.toFixed(1);
        const y = cursorPos.current.y.toFixed(1);
        const s = scale.current.toFixed(3);
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
      }

      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <div className={`custom-cursor ${isActive ? 'active' : ''}`} ref={cursorRef}></div>
  );
});

export default CursorBlob;
