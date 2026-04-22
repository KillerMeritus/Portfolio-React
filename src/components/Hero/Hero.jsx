import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personal } from '../../data/personal';
import profilePic from '../../assets/profile_picture.png';
import styles from './Hero.module.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const fullText = personal.subtitle;
    
    // Slight delay before typing starts
    const startDelay = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTypingComplete(true);
        }
      }, 50); // Typing speed
      
      return () => clearInterval(typeInterval);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Photo */}
          <div className={styles.avatarContainer}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>
                <img src={profilePic} alt={personal.name} className={styles.profileImage} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>{personal.greeting}</h1>
          
          {/* Subtitle with Typewriter */}
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitle}>
              {typedText}
              <span className={`${styles.cursor} ${isTypingComplete ? styles.blink : ''}`}>|</span>
            </p>
          </div>

          {/* CTAs */}
          <div className={styles.actions}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.btnPrimary}
            >
              View My Work
            </Link>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
