import Document, { Html, Head, Main, NextScript } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />

        <body className="dark:bg-app-dark-window bg-app-light-window dark:text-app-dark-text text-app-light-text">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
