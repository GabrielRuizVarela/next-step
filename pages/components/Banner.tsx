import styles from '@/styles/Home.module.css';
import React from 'react';

const Banner = () => (
  <div className={styles.bannerContainer}>
    <div className={styles.banner}>
      <div className={styles.bannerColumn}>
        <div className={styles.bannerTitle}>3K</div>
        <div className={styles.bannerSubtitle}>Usuarios activos</div>
      </div>
      <div className={styles.bannerColumn}>
        <div className={styles.bannerTitle}>1K+</div>
        <div className={styles.bannerSubtitle}>Coaches</div>
      </div>
      <div className={styles.bannerColumn}>
        <div className={styles.bannerTitle}>4.7+</div>
        <div className={styles.bannerSubtitle}>Empresas</div>
      </div>
    </div>
  </div>
);

export default Banner;
