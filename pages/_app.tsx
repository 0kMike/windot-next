import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/header/header';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={'/windotFavicon.png'} />
        <title>windot</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
