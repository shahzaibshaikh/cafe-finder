import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function CoffeeStore() {
  const router = useRouter();

  return (
    <div>
      Coffee store page: {router.query.id}
      <Link href='/'>Back to home</Link>
    </div>
  );
}

export default CoffeeStore;
