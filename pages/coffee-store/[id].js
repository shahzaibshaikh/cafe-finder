import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find(store => {
        return store.id === 0;
      })
    }
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false
  };
}

function CoffeeStore({ coffeeStore }) {
  const router = useRouter();

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
