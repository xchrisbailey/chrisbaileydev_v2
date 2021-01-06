import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5LHXDSL9TZ"></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-5LHXDSL9TZ');
          </script>
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
