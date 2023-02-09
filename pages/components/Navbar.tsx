import { LogoFont, Oufit } from '../_app';
import logo from '../fonts/logo/nextlogo.png';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import React from 'react';

const Button = () => (
  <button type="button" className={styles.button}>
    Log In
  </button>
);

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__logo}>
      <Image src={logo} alt="logo" width={40} height={45} />
      <div className={LogoFont.className}>NextStep</div>
    </div>
    <div className={styles.navbar__links}>
      <a href="#" className={Oufit.className}>
        Eres Profesional
      </a>
      <a href="#" className={Oufit.className}>
        Eres Reclutador
      </a>
      <Button />
    </div>
  </nav>
);

export default Navbar;
