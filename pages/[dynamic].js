import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function DynamicRoute() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      <h1>Hi I'm a {router.query.dynamic} route.</h1>
    </div>
  );
}

export default DynamicRoute;
