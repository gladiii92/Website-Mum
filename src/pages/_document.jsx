import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&family=Lato:wght@400;700&family=Great+Vibes&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="AiX_4H1-SraqBMkdFLoM5f0KLmUUnNPhMuLQ5Cm1irI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

