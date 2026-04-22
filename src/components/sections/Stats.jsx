export default function Stats() {
  const items = ['React.js', 'Node.js', 'MongoDB', 'Python', 'SQL', 'Express', 'REST APIs', 'Pandas', 'NumPy', 'HTML5', 'CSS3', 'JavaScript'];

  return (
    <>
      <div className="stats-strip">
        <div className="stat-box reveal">
          <div className="stat-num"><span className="count" data-target="5">0</span><span>+</span></div>
          <div className="stat-label">Projects Built</div>
        </div>
        <div className="stat-box reveal d1">
          <div className="stat-num"><span className="count" data-target="14">0</span><span>+</span></div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-box reveal d2">
          <div className="stat-num"><span className="count" data-target="6">0</span><span>+</span></div>
          <div className="stat-label">Certifications</div>
        </div>
        <div className="stat-box reveal d3">
          <div className="stat-num">8.20<span>/10</span></div>
          <div className="stat-label">Current CGPA</div>
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...items, ...items].map((t, idx) => (
            <span key={idx} className="marquee-item">
              {t}<span className="dot"> ✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
