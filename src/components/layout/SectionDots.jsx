export default function SectionDots({ activeSection }) {
  const dots = [
    { label: 'Home', section: 'home' },
    { label: 'Skills', section: 'skills' },
    { label: 'Work', section: 'work' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'Experience', section: 'experience' },
    { label: 'About', section: 'about' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <div className="section-dots" id="sectionDots">
      {dots.map((dot) => (
        <div 
          key={dot.section}
          className={`section-dot ${activeSection === dot.section ? 'active' : ''}`}
          data-label={dot.label} 
          onClick={() => {
            document.getElementById(dot.section)?.scrollIntoView({ behavior: 'smooth' });
          }}
        ></div>
      ))}
    </div>
  );
}
