import bigLogo from '../fonts/logo/nxtstepwhite.png';
import { Outfit } from '../pages/_app';
import Button from './Button';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__logo}>
      <Link href="/">
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
      </Link>
    </div>
    <div className={styles.navbar__links}>
      <span  className={Outfit.className}>Eres Profesional</span>
      <span className={Outfit.className}>Eres Reclutador</span>
      <Link href="/login">
        <Button>Log In</Button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
