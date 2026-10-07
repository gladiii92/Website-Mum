import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/" />
        <title>Weiterleitung...</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Du wirst zur Startseite weitergeleitet...</p>
      </div>
    </>
  );
}
