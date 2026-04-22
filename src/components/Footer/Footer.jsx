import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import styles from './Footer.module.css';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Vivek Sarathe • Built with curiosity and consistency
        </p>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`${styles.topBtn} ${showTopBtn ? styles.show : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp className={styles.topIcon} />
      </button>
    </footer>
  );
};

export default Footer;
