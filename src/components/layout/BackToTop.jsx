export default function BackToTop({ show }) {
  return (
    <button 
      id="btt" 
      className={show ? 'show' : ''} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
