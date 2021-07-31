import '@/styles/globals.css';
import GlobalStyles from '@/components/misc/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
