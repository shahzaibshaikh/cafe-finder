import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find(store => {
        return '300' === params.id;
      })
    }
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true
  };
}

function CoffeeStore({ coffeeStore }) {
  const router = useRouter();

  if (router.isFallback === true) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      Coffee store page: {router.query.id}
      <Link href='/'>Back to home</Link>
      <Link href='/coffee-store/dynamic'>Back to dynamic</Link>
      <p>{coffeeStore.name}</p>
    </div>
  );
}

export default CoffeeStore;
