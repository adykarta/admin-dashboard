import theme from "@styles/theme/theme";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.teal[500]} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // EXP: comment for now, we want to delete mui/styles since it's not used anymore (legacy) + not compatible with react 18
  // -- old codes start --
  // Render app and page and get the context of the page with collected side effects.
  // const sheets = new ServerStyleSheets();
  // const originalRenderPage = ctx.renderPage;

  // EXP: comment for now, we want to delete mui/styles since it's not used anymore (legacy) + not compatible with react 18
  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) =>
  //       function EnhancedApp(props) {
  //         return sheets.collect(<App {...props} />);
  //       },
  //   });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    // EXP: comment for now, we want to delete mui/styles since it's not used anymore (legacy) + not compatible with react 18
    // styles: [
    //   ...Children.toArray(initialProps.styles),
    //   sheets.getStyleElement(),
    // ],
  };
};
