import bigLogo from '../fonts/logo/nxtstepwhite.png';
import { Outfit } from '../pages/_app';
import Button from './Button';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import React from 'react';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__logo}>
      <Image
        src={bigLogo}
        alt="logo"
        style={{
          objectFit: 'fill',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        width={280}
        height={280}
      />
    </div>
    <div className={styles.navbar__links}>
      <a href="#" className={Outfit.className}>
        Eres Profesional
      </a>
      <a href="#" className={Outfit.className}>
        Eres Reclutador
      </a>
      <Button>Log In</Button>
    </div>
  </nav>
);

export default Navbar;
