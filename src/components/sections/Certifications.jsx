import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Certifications({ onModalChange }) {
  const splitTitle = "Certifications".split(' ');
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const navbar = document.getElementById('mainNav');
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (navbar) navbar.style.display = 'none';
      if (onModalChange) onModalChange(true);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (navbar) navbar.style.display = '';
      if (onModalChange) onModalChange(false);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (navbar) navbar.style.display = '';
      if (onModalChange) onModalChange(false);
    };
  }, [selectedCert, onModalChange]);

  const certs = [
    {
      name: "SQL (Advanced) Certification",
      desc: "8 practical case studies — SQL, data cleaning, dashboards, presentations.",
      icon: "🏆",
      id: "90FC6312C20B",
      link: "/SQL.pdf"
    },
    {
      name: "Spotify Clone using React",
      desc: "2-day hands-on project building a production-grade React.js web app.",
      icon: "🎵",
      id: "LUESCAPR1251238",
      link: "/spotify clone.pdf"
    },
    {
      name: "Google Cloud Associate Cloud Engineer",
      desc: "Comprehensive understanding of Google Cloud Platform and cloud computing.",
      icon: "📡",
      id: "Google Cloud Certified",
      link: "/Google Cloud.jpg"
    },
    {
      name: "Research Paper Certification",
      desc: "A study on Sentiment Analysis-Based Product Review Recommendation using Deep Learning.",
      icon: "📡",
      id: "Research Paper Certified",
      link: "/Research paper.jpg"
    },
    {
      name: "Android App Development",
      desc: "Hands-on experience in building and deploying Android applications.",
      icon: "📱",
      id: "App Dev Certified",
      link: "/ANDROID.pdf"
    },
    {
      name: "Hackathon Winner",
      desc: "Participant in the AI Innovation Hackathon - 2026 organized by GEC, Patan.",
      icon: "💻",
      id: "Hackathon Winner",
      link: "/Hachathon certificate.png"
    },

    {
      name: "Internship Completion Certificate",
      desc: "Completed internship at FLYANYTRIP from 10 January 2026 to 10 May 2026.",
      icon: "💻",
      id: "Internship Completion Certificate",
      link: "/1_20260411_141356_0000.png"
    },

    {
      name: "Supervised Machine Learning: Regression and Classification",
      desc: "Online non-credit course authorized by DeepLearning.AI and Stanford University.",
      icon: "🤖",
      id: "86XERZFSMC7A",
      link: "/Gemini_Generated_Image_sub8kzsub8kzsub8.png"
    },
    {
      name: "Professional Certification",
      desc: "Successfully completed the certification requirements.",
      icon: "📜",
      id: "CERT-DFG3DBOK",
      link: "/certificate-dfg3dbokkbo7-1773830603.pdf"
    }
  ];

  return (
    <section id="certifications">
      <div className="section-eyebrow">// Certifications</div>
      <h2 className="section-title split-title">
        {splitTitle.map((w, i) => (
          <span key={i} className="word" style={{ transitionDelay: `${i * 0.09}s` }}>{w}{' '}</span>
        ))}
      </h2>

      <div className="certs-list">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="cert-row"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedCert(cert.link)}
            title={`View ${cert.name} Certificate`}
          >
            <div className="cert-icon-box">{cert.icon}</div>
            <div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-desc">{cert.desc}</div>
            </div>
            <div className="cert-id">{cert.id}</div>
          </div>
        ))}
      </div>

      {selectedCert && createPortal(
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 999999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'auto'
          }}
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#fff',
              fontSize: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              zIndex: 1000000,
              transition: 'background 0.3s ease'
            }}
            title="Close"
          >
            &times;
          </button>

          <div
            className="modal-content"
            style={{
              width: '90%',
              maxWidth: '1000px',
              height: '80vh',
              position: 'relative',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedCert.toLowerCase().endsWith('.pdf') ? (
              <embed
                src={`${selectedCert}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: 'none', outline: 'none', maxWidth: '100%', maxHeight: '100%' }}
                title="Certificate Viewer"
              />
            ) : (
              <img
                src={selectedCert}
                alt="Certificate Viewer"
                style={{ border: 'none', outline: 'none', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}