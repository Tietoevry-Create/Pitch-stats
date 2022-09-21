import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla" rel="stylesheet" />
      </Head>
      <body className="bg-peach20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
