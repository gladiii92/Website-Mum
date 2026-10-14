import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@400;600&family=Lato:wght@400;700&family=Great+Vibes&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="AiX_4H1-SraqBMkdFLoM5f0KLmUUnNPhMuLQ5Cm1irI" />
        {/* Google Analytics (gtag.js) mit Google Consent Mode v2 (DSGVO-konform) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'G-1MYPP2C8LX', {
                anonymize_ip: true
              });
            `
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1MYPP2C8LX" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

