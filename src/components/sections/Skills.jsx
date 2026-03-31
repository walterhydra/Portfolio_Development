import { useState, useEffect } from 'react';
import TerminalModal from '../effects/TerminalModal';

export default function Skills() {
  const [isTermOpen, setIsTermOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const skillChips = ['Express.js', 'REST APIs', 'Pandas', 'NumPy', 'HTML5', 'CSS3', 'Sentiment Analysis', 'IoT', 'Role-Based Auth', 'JWT'];

  const splitTitle = "Technical Skills".split(' ');

  const mainSkills = [
    { label: 'React.js', sub: 'Frontend', pct: 90, color: '#5555ff', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', desc: 'Deep expertise in React.js, building scalable Single Page Applications with modern Hooks, modular components, and complex state management. I focus on delivering highly performant, accessible, and responsive user interfaces.' },
    { label: 'Node.js', sub: 'Backend', pct: 85, color: '#ff5580', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', desc: 'Proficient in developing robust, RESTful APIs, securing routing, and building server-side logic and microservices. Highly familiar with the Express.js architecture and efficient database integration.' },
    { label: 'JavaScript', sub: 'Language', pct: 88, color: '#f59e0b', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', desc: 'Core strength in advanced JavaScript (ES6+), encompassing asynchronous programming, DOM manipulation, and object-oriented design critical for full-stack, end-to-end development.' },
    { label: 'Python', sub: 'AI / Data', pct: 80, color: '#22c55e', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', desc: 'Strong foundation in Python used for backend scripting, automated testing, API development, and data-driven systems leveraging Pandas and NumPy for complex manipulation tasks.' },
    { label: 'MongoDB', sub: 'Database', pct: 82, color: '#a78bfa', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', desc: 'Experienced in handling high-scalability NoSQL schema design. Confident in executing complex aggregation pipelines, indexing, and maintaining distributed databases via Mongoose.' },
    { label: 'SQL', sub: 'Advanced', pct: 78, color: '#06b6d4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', desc: 'Advanced certification from HackerRank. Skilled in relational database design, writing optimized queries, complex joins, triggers, and ensuring transactional data integrity and reporting.' }
  ];

  // Removed scroll locking effect for inline panel

  return (
    <section id="skills">
      <div className="section-eyebrow">// Expertise</div>
      <h2 className="section-title split-title">
        {splitTitle.map((w, i) => (
          <span key={i} className="word" style={{ transitionDelay: `${i * 0.09}s` }}>{w}{' '}</span>
        ))}
      </h2>
      
      <div className="skills-rings-grid" id="ringsGrid">
        {mainSkills.map((skill, i) => (
          <div 
            className="skill-ring-card interactive" 
            key={i} 
            style={{ '--pct': skill.pct }}
            onClick={() => setActiveSkill(skill)}
          >
            <div className="ring-wrapper">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle className="ring-track" cx="30" cy="30" r="25"/>
                <circle className="ring-fill" cx="30" cy="30" r="25" stroke={skill.color} transform="rotate(-90 30 30)"/>
              </svg>
              <img src={skill.icon} alt={skill.label} className="ring-icon" />
              <div className="ring-pct-inner" style={{ color: skill.color }}>{skill.pct}%</div>
            </div>
            <div>
              <div className="ring-label">{skill.label}</div>
              <div className="ring-sub">{skill.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Detail Panel */}
      <div className={`skill-showcase-wrapper ${activeSkill ? 'open' : ''}`}>
        <div className="skill-showcase-panel">
          <button className="close-showcase interactive" onClick={() => setActiveSkill(null)}>&times;</button>
          
          {activeSkill ? (
            <>
              <div className="showcase-header">
                <img src={activeSkill.icon} alt={activeSkill.label} className="showcase-img" />
                <div>
                  <h3 className="showcase-title">{activeSkill.label}</h3>
                  <span className="showcase-sub" style={{ color: activeSkill.color }}>Architecture & {activeSkill.sub}</span>
                </div>
              </div>
              
              <div className="showcase-body">
                <p>{activeSkill.desc}</p>
                
                <div className="showcase-stats">
                  <div className="stat-bar-header">
                    <span style={{ color: 'var(--text)' }}>Proficiency</span>
                    <span style={{ fontFamily: 'var(--mono)', color: activeSkill.color, fontWeight: '700' }}>{activeSkill.pct}%</span>
                  </div>
                  <div className="stat-bar-track">
                    <div className="stat-bar-fill showcase-fill" style={{ width: `${activeSkill.pct}%`, background: activeSkill.color, boxShadow: `0 0 10px ${activeSkill.color}80` }}></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
             <div className="showcase-placeholder">Select a skill above for details</div>
          )}
        </div>
      </div>
      
      <div className="skills-row" id="skillsRow">
        {skillChips.map(chip => <span key={chip} className="skill-chip">{chip}</span>)}
      </div>

      <button className="terminal-btn interactive" onClick={() => setIsTermOpen(true)}>$ whoami — Open Terminal</button>

      <TerminalModal isOpen={isTermOpen} onClose={() => setIsTermOpen(false)} />
    </section>
  );
}
