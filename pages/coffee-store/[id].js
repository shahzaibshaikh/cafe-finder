import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';
import Head from 'next/head';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStores.find(store => {
        return store.id.toString() === params.id;
      })
    }
  };
}

export function getStaticPaths() {
  const paths = coffeeStores.map(store => {
    return {
      params: { id: store.id }
    };
  });

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
      <Head>
        <title>{coffeeStore.name}</title>
      </Head>
      <Link href='/'>Back to home</Link>
      <p>{coffeeStore.name}</p>
    </div>
  );
}

export default CoffeeStore;
