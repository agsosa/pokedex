import '@/styles/globals.css';
import GlobalStyles from '@/components/misc/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name='description' content='Pokedex App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
