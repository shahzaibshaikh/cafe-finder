import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find(store => store.id === params.id)
    }
  };
}

function CoffeeStore() {
  const router = useRouter();

  return (
    <div>
      Coffee store page: {router.query.id}
      <Link href='/'>Back to home</Link>
      <Link href='/coffee-store/dynamic'>Back to dynamic</Link>
    </div>
  );
}

export default CoffeeStore;
