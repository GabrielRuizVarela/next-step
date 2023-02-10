import styles from '@/styles/Home.module.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const animation1 = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
const animation2 = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

const animation3 = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
};

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div className={styles.bannerContainer} ref={ref}>
      <div className={styles.banner}>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={animation1}
          className={styles.bannerColumn}
        >
          <div className={styles.bannerTitle}>3K</div>
          <div className={styles.bannerSubtitle}>Usuarios activos</div>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"

          variants={animation2}
          className={styles.bannerColumn}
        >
          <div className={styles.bannerTitle}>1K+</div>
          <div className={styles.bannerSubtitle}>Coaches</div>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={animation3}
          className={styles.bannerColumn}
        >
          <div className={styles.bannerTitle}>4.7+</div>
          <div className={styles.bannerSubtitle}>Empresas</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
