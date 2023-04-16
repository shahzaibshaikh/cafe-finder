import { useRouter } from 'next/router';
import React from 'react';

function CoffeeStore() {
  const router = useRouter();

  return <div>Coffee store page: {router.query.id}</div>;
}

export default CoffeeStore;
