import '../index.css'; // Global styles
import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Unregister legacy Create React App service workers that break Next.js dev server
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ursula Heinke - Lebensberatung & Coaching</title>
        <meta name="description" content="Lebensberatung & Coaching - Ursula Heinke" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

