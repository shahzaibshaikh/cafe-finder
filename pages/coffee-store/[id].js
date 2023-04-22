import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/coffee-store.module.css';

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
      params: { id: store.id.toString() }
    };
  });

  return {
    paths,
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
      <div className={styles.container}>
        <Link href='/' className={styles.backHomeButton}>
          Back to home
        </Link>
        <h2 className={styles.coffeeTitle}>{coffeeStore.name}</h2>
        <div className={styles.HStack}>
          <Image
            src={coffeeStore.imgUrl}
            width={500}
            height={400}
            alt={coffeeStore.name}
            className={styles.detailImage}
          />
          <div className={styles.detailGlass}>
            <p>{coffeeStore.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeStore;
