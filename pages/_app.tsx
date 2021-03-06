import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from '../src/components/Header';
import { theme } from '../src/foundation/theme';
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
