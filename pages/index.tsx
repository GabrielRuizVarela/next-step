import { Messages, Phone } from './components/Phone';
import { Outfit } from './_app';
import Banner from './components/Banner';
import Button from './components/Button';
import Navbar from './components/Navbar';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Outfit.className}>
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
          </div>
        </div>
        <Banner />
      </main>
    </>
  );
}
