import { Oufit } from '../_app';
import styles from '@/styles/Home.module.css';
import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => (
  <button type="button" className={styles.button}>
    <div className={Oufit.className}>{children}</div>
  </button>
);

export default Button;
