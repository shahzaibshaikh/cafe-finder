import { useRouter } from 'next/router';
import React from 'react';

function DynamicRoute() {
  const router = useRouter();
  return <h1>Hi I'm a {router.query.dynamic} route.</h1>;
}

export default DynamicRoute;
