import { useState, useRef, useEffect } from 'react';

function ProjectCard({ num, type, name, desc, tags, isSpecial, liveLink, githubLink, onClick }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width;
    const my = (e.clientY - r.top) / r.height;

    setStyle({
      transform: `perspective(900px) rotateX(${(my - 0.5) * -10}deg) rotateY(${(mx - 0.5) * 10}deg) translateY(-6px)`,
      '--mx': `${mx * 100}%`,
      '--my': `${my * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: '' });
  };

  const numStyle = isSpecial ? { fontSize: '4rem' } : {};

  return (
    <div
      className="project-card interactive"
      style={{ ...style, cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      ref={cardRef}
    >
      <div className="card-shine"></div>
      <div className="project-card-num" style={numStyle}>{num}</div>
      <div className="project-card-content">
        <div className="project-type">{type}</div>
        <div className="project-name">{name}</div>
        <div className="project-desc">{desc}</div>
        <div className="project-tags">
          {tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
        </div>
      </div>

      <div className="project-links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer" className="project-btn live-btn interactive" onClick={(e) => e.stopPropagation()}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="project-btn github-btn interactive" onClick={(e) => e.stopPropagation()}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function Work({ onModalChange }) {
  const splitTitle = "Work & Projects".split(' ');
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (p) => {
    setActiveProject(p);
  };

  useEffect(() => {
    if (activeProject) {
      document.body.classList.add('lock-scroll');
      if (onModalChange) onModalChange(true);
    } else {
      document.body.classList.remove('lock-scroll');
      if (onModalChange) onModalChange(false);
    }
    return () => {
      document.body.classList.remove('lock-scroll');
      if (onModalChange) onModalChange(false);
    };
  }, [activeProject, onModalChange]);

  const closeProject = () => {
    setActiveProject(null);
  };

  const projectsData = [
    {
      "num": "01",
      "type": "Full Stack Project",
      "name": "R.F. ELECTROTECH ",
      "desc": "Web-based ERP to streamline business operations  user management, inventory, billing, reporting. Secure role-based auth for admins, managers, and employees.",
      "tags": [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs"
      ],
      "image": "/RF copy.png",
      "liveLink": "https://rfelectrotech.com/",
      "githubLink": "https://github.com/walterhydra/R.F.-ELECTROTECH"
    },
    {
      "num": "02",
      "type": "Full Stack Web Dev",
      "name": "Spotify Clone",
      "desc": "Responsive music streaming app with playlist management and real-time audio playback. Modern React UI replicating the Spotify experience across all devices.",
      "tags": [
        "React.js",
        "Node.js",
        "Web Audio API",
        "CSS"
      ],
      "image": "/Spotify.jpeg",
      "liveLink": "spotify-dev-eight.vercel.app",
      "githubLink": "https://github.com/walterhydra/Spotify_Dev"
    },
    {
      "num": "03",
      "type": "Backend & Database",
      "name": "College Management System",
      "desc": "Backend system managing routes, schedules, seat availability, and bookings. Express.js REST APIs handle reservations, cancellations, and admin controls.",
      "tags": [
        "JavaScript",
        "SQL",
        "Express.js",
        "REST APIs"
      ],
      "image": "/image.png",
      "liveLink": "https://example.com",
      "githubLink": "https://github.com/walterhydra/College_Managment_System"
    },
    {
      "num": "05",
      "type": "Web Application",
      "name": "ASKVISA",
      "desc": "A comprehensive visa application and immigration assistance platform designed for a seamless user experience.",
      "tags": [
        "React",
        "Frontend",
        "UI/UX"
      ],
      "image": "/Askvisa.jpeg",
      "liveLink": "https://askvisa.in/",
      "githubLink": "https://github.com/walterhydra/ASK-VISA"
    },
    {
      "num": "06",
      "type": "Travel Tech",
      "name": "FLYANYTRIP",
      "desc": "Modern flight booking and travel planning application with real-time searches and responsive tech integrations.",
      "tags": [
        "React",
        "Web Dev",
        "API"
      ],
      "image": "/flyanytrip.jpeg",
      "liveLink": "https://flyanytrip.com/",
      "githubLink": "https://github.com/walterhydra/FlyAnyTrip-2.0"
    },
    {
      "num": "07",
      "type": "Creative Web Design",
      "name": "Proposal Website",
      "desc": "A creatively designed, interactive proposal website tailored to deliver a highly personalized and memorable digital experience.",
      "tags": [
        "CSS Animations",
        "Frontend",
        "Design"
      ],
      "image": "/proposal.jpeg",
      "liveLink": "https://sharmajii-ecru.vercel.app/",
      "githubLink": "#https://github.com/walterhydra/Proposal_Website"
    },

  ];

  return (
    <section id="work">
      <div className="section-eyebrow">// Projects</div>
      <h2 className="section-title split-title">
        {splitTitle.map((w, i) => (
          <span key={i} className="word" style={{ transitionDelay: `${i * 0.09}s` }}>{w}{' '}</span>
        ))}
      </h2>

      <div className="projects-grid" id="projectsGrid">
        {projectsData.map(p => (
          <ProjectCard
            key={p.num}
            {...p}
            onClick={() => openProject(p)}
          />
        ))}
      </div>

      {activeProject && (
        <div className="project-modal-overlay" onClick={closeProject}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProject}>&times;</button>
            <div className="modal-header">
              <div className="modal-type">{activeProject.type}</div>
              <h3 className="modal-name">{activeProject.name}</h3>
            </div>

            <div className="modal-cover-image" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', backgroundColor: '#1a1a1a', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={activeProject.image || `https://placehold.co/800x450/1a1a1a/ffffff?text=${activeProject.name.replace(/\s+/g, '+')}`} alt={`${activeProject.name} Screenshot`} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div className="modal-body">
              <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Overview</h4>
              <p className="modal-desc" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{activeProject.desc}</p>

              <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>How It Was Built</h4>
              <p className="modal-build-desc" style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-dim)' }}>
                {activeProject.howItWasBuilt || "Developed with modern web technologies, focusing on clean architecture, responsive design, and an intuitive user experience."}
              </p>

              <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Technologies Used</h4>
              <div className="modal-tags">
                {activeProject.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              {activeProject.liveLink && activeProject.liveLink !== '#' && (
                <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="project-btn live-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Visit Live Site
                </a>
              )}
              {activeProject.githubLink && activeProject.githubLink !== '#' && (
                <a href={activeProject.githubLink} target="_blank" rel="noreferrer" className="project-btn github-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  View GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}