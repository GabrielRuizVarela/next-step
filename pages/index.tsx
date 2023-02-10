import phoneImg from '../public/phone.png';
import { Messages, Phone } from './Phone';
import { Oufit } from './_app';
import Button from './components/Button';
import Navbar from './components/Navbar';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Oufit.className}>
        <Navbar />
        <div className={styles.section1}>
          <div className={styles.main__container}>
            <div className={styles.main__title}>
              El apoyo que necesitas para tu proximo <div>desafío laboral.</div>
            </div>
            <div className={styles.main__subtitle}>
              Conecta con un reclutardor mediante un match de hablidades
              laborales.
            </div>
            <Button>Mas Informacion</Button>
            <Phone>
              <Messages />
            </Phone>
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
          </div>
        </div>
      </main>
    </>
  );
}

// const AudioChatBubble = (
