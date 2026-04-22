import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { personal } from '../../data/personal';
import styles from './Contact.module.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <h2 className="section-title">Get In Touch</h2>
      <p className={styles.subtitle}>Feel free to reach out — I'd love to connect!</p>

      <motion.div 
        className={styles.iconContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.a
          href={`mailto:${personal.social.email}`}
          className={styles.iconCard}
          variants={itemVariants}
          title="Email"
        >
          <FiMail className={styles.icon} />
          <span className={styles.label}>Email</span>
        </motion.a>

        <motion.a
          href={personal.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCard}
          variants={itemVariants}
          title="LinkedIn"
        >
          <FiLinkedin className={styles.icon} />
          <span className={styles.label}>LinkedIn</span>
        </motion.a>

        <motion.a
          href={personal.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconCard}
          variants={itemVariants}
          title="GitHub"
        >
          <FiGithub className={styles.icon} />
          <span className={styles.label}>GitHub</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
