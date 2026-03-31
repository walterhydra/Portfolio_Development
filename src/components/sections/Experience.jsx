export default function Experience() {
  const splitTitle = "Experience & Education".split(' ');

  return (
    <section id="experience">
      <div className="section-eyebrow">// Journey</div>
      <h2 className="section-title split-title">
        {splitTitle.map((w, i) => (
          <span key={i} className="word" style={{ transitionDelay: `${i * 0.09}s` }}>{w}{' '}</span>
        ))}
      </h2>

      <div className="journey-grid">
        {/* EXPERIENCE COLUMN */}
        <div className="journey-col">
          <h3 className="tl-heading">Experience</h3>
          <div className="timeline">
            {/* Experience Item 1 (Template) */}
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-date">2025 — Working <span style={{ opacity: 0.6 }}>| Vadodara, Gujarat</span></div>
              <div className="tl-title">Full Stack Developer</div>
              <div className="tl-subtitle">FLYANYTRIP</div>
              <div className="tl-body">
                <ul className="tl-bullets">
                  <li>
                    Developed end-to-end features including <strong>flight search, booking/checkout flow,
                      and user authentication</strong> using React, Node.js, and REST APIs</li>
                  <li>
                    Built a full <strong>Admin Dashboard</strong> for managing bookings, users,
                    and flight data — reducing manual ops overhead significantly
                  </li>
                  <li>
                    Identified and resolved critical bugs across frontend and backend,
                    improving overall <strong>platform stability and user experience</strong>
                  </li>
                  <li>
                    <strong>Stack:</strong> React · Node.js · Express · REST APIs · MySQL/MongoDB
                  </li>
                </ul>
              </div>
              <div className="tl-tags">
                <span className="tl-tag">React</span>
                <span className="tl-tag">Figma</span>
                <span className="tl-tag">Python</span>
              </div>
            </div>

            {/* Experience Item 2 (AI Focus) */}
            <div className="tl-item">
              <div className="tl-dot" style={{ background: 'var(--accent2)' }}></div>
              <div className="tl-date">2025 — Present <span style={{ opacity: 0.6 }}>| Remote / Project-Based</span></div>
              <div className="tl-title">AI & Machine Learning Developer</div>
              <div className="tl-subtitle">Independent Researcher & Developer</div>
              <div className="tl-body">
                <ul className="tl-bullets">
                  <li>Developed and trained custom machine learning models utilizing Python, TensorFlow, and scikit-learn.</li>
                  <li>Integrated OpenAI APIs and LLMs into web applications for dynamic, intelligent automated features.</li>
                  <li>Optimized data pipelines and explored deep learning techniques to improve model accuracy and prediction capabilities.</li>
                </ul>
              </div>
              <div className="tl-tags">
                <span className="tl-tag">Python</span>
                <span className="tl-tag">TensorFlow</span>
                <span className="tl-tag">OpenAI API</span>
                <span className="tl-tag">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION COLUMN */}
        <div className="journey-col">
          <h3 className="tl-heading" style={{ color: 'var(--accent)' }}>Education</h3>
          <div className="timeline">
            {/* Education Item 1 */}
            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#f59e0b' }}></div>
              <div className="tl-date">2022 — 2026 (Present)</div>
              <div className="tl-title">B.Tech</div>
              <div className="tl-subtitle">Parul Institute of Technology — Computer Science And Engineering</div>
              <div className="tl-body">
                <ul className="tl-bullets">
                  <li><strong>Grade/GPA:</strong> 8.20/10 CGPA</li>
                  <li><strong>Key Projects:</strong> ERP Management System , Spotify Clone , AI Chatbot</li>
                  <li><strong>Achievements:</strong> [Scholarships, honors, dean's list]</li>
                </ul>
              </div>
            </div>

            {/* Education Item 2: School (Template) */}
            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#3b82f6' }}></div>
              <div className="tl-date">2021 — 2022</div>
              <div className="tl-title">12th Grade / Higher Secondary</div>
              <div className="tl-subtitle">Kendriya Vidhayalaya Porbandar — CBSE Science Stream (PCM)</div>
              <div className="tl-body">
                <ul className="tl-bullets">
                  <li><strong>Grade/Percentage:</strong> 85%</li>
                  <li><strong>Key Subjects:</strong> Physics, Chemistry, Math, Computer Science</li>
                  <li><strong>Achievements:</strong> [Extracurricular activities, top ranks]</li>
                </ul>
              </div>
            </div>

            {/* Education Item 3: 10th Grade (Template) */}
            <div className="tl-item">
              <div className="tl-dot" style={{ background: '#8b5cf6' }}></div>
              <div className="tl-date">2019 — 2020</div>
              <div className="tl-title">10th Grade / Secondary School</div>
              <div className="tl-subtitle">Kendriya Vidhayalaya Porbandar — CBSE</div>
              <div className="tl-body">
                <ul className="tl-bullets">
                  <li><strong>Grade/Percentage:</strong> 70%</li>
                  <li><strong>Key Subjects:</strong> Science, Mathematics, English, Social Science</li>
                  <li><strong>Achievements:</strong> [Extracurricular activities, top ranks]</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
