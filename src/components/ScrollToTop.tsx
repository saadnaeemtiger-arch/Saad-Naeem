import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gold-900 text-gold-100 hover:bg-gold-500 hover:text-gold-950 transition-all duration-300 shadow-xl border border-gold-800 cursor-pointer flex items-center justify-center hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} className="animate-pulse" />
    </button>
  );
}
