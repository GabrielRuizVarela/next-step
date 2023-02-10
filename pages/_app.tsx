import '@/styles/globals.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

export const Outfit = localFont({
  src: './fonts/fuentes background/outfit (1)/fonts/variable/Outfit[wght].ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
