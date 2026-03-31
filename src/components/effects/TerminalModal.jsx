import { useEffect, useRef, useState } from 'react';

const termLines = [
  { text: '<span class="t-prompt">milan@portfolio</span>:<span class="t-blue">~</span>$ whoami', delay: 0 },
  { text: '<span class="t-green">Milan Pandavadra</span> — ML &amp; Web Developer', delay: 400 },
  { text: '', delay: 500 },
  { text: '<span class="t-prompt">milan@portfolio</span>:<span class="t-blue">~</span>$ cat skills.json', delay: 600 },
  { text: '{', delay: 900 },
  { text: '&nbsp;&nbsp;<span class="t-yellow">"frontend"</span>: ["React.js", "HTML5", "CSS3"],', delay: 1050 },
  { text: '&nbsp;&nbsp;<span class="t-yellow">"backend"</span>: ["Node.js", "Express", "REST APIs"],', delay: 1200 },
  { text: '&nbsp;&nbsp;<span class="t-yellow">"database"</span>: ["MongoDB", "SQL (Advanced)"],', delay: 1350 },
  { text: '&nbsp;&nbsp;<span class="t-yellow">"ai_ml"</span>: ["Python", "Pandas", "NumPy"],', delay: 1500 },
  { text: '&nbsp;&nbsp;<span class="t-yellow">"cgpa"</span>: <span class="t-green">7.20</span>', delay: 1650 },
  { text: '}', delay: 1750 },
  { text: '', delay: 1850 },
  { text: '<span class="t-prompt">milan@portfolio</span>:<span class="t-blue">~</span>$ echo "Open to work!"', delay: 1950 },
  { text: '<span class="t-pink">Open to work! 🚀</span>', delay: 2150 },
  { text: '', delay: 2250 },
  { text: '<span class="t-prompt">milan@portfolio</span>:<span class="t-blue">~</span>$ <span class="t-cursor"></span>', delay: 2350 },
];

export default function TerminalModal({ isOpen, onClose }) {
  const [lines, setLines] = useState([]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setLines([]);
      let timeouts = [];
      termLines.forEach((line, i) => {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, line.text]);
          if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
          }
        }, line.delay);
        timeouts.push(timeout);
      });
      return () => timeouts.forEach(clearTimeout);
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('terminal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`terminal-overlay ${isOpen ? 'open' : ''}`} id="terminalOverlay" onClick={handleOverlayClick}>
      <div className="terminal-box">
        <div className="terminal-bar">
          <div className="t-dot t-close" onClick={onClose}></div>
          <div className="t-dot t-min"></div>
          <div className="t-dot t-max"></div>
          <span className="terminal-title">milan@portfolio ~ bash</span>
        </div>
        <div className="terminal-body" id="terminalBody" ref={bodyRef}>
          {lines.map((htmlStr, idx) => (
            <div key={idx} className="t-line show" dangerouslySetInnerHTML={{ __html: htmlStr }} />
          ))}
        </div>
      </div>
    </div>
  );
}
