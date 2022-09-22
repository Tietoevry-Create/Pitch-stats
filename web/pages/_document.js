import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link href="public/TietoevrySans1-Regular.otf" rel="stylesheet"/>
      </Head>
      <body className="bg-peach20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
