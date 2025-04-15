'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        className={styles.scrollToTop}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
       <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
