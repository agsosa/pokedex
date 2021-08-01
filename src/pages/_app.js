import '@/styles/globals.css';
import GlobalStyles from '@/components/misc/GlobalStyles';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

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
