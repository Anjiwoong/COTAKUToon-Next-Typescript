import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import { Provider } from 'next-auth/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
