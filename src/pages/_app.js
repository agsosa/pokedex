import "nprogress/nprogress.css";
import '@/styles/globals.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import GlobalStyles from '@/components/misc/GlobalStyles';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {  
  return (
    <ChakraProvider>
      <Head>
        <title>Pokedex</title>
        <meta name='description' content='Pokedex App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
