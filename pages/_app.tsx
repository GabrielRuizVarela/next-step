import '@/styles/globals.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

export const Oufit = localFont({
  src: './fonts/fuentes background/outfit (1)/fonts/variable/Outfit[wght].ttf',
});

export const LogoFont = localFont({
  src: './fonts/logo/fuentes logo/DM_Sans/DMSans-Bold.ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={Oufit.className} />;
}
