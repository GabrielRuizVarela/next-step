import { Outfit } from '../_app';
import styles from '@/styles/Home.module.css';
import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => (
  <button type="button" className={styles.button}>
    <div className={Outfit.className}>{children}</div>
  </button>
);

export default Button;
