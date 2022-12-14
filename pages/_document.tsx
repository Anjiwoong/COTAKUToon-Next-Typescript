import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  Html,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <div id="overlay-root"></div>
          <div id="backdrop-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
