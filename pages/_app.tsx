import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../src/components/header/header';
import Head from 'next/head';
import SideMenu from '../src/components/sideMenu/sideMenu';
import { ReactElement, useReducer, useState } from 'react';
import Footer from '../src/components/footer/Footer';

function reducer(state: any, action: any) {
  return action === true;
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <link rel="icon" href={'/windotFavicon.png'} />
        <title>windot</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <SideMenu />
      <Footer />
    </>
  );
}

export default MyApp;
