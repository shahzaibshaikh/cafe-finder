import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStores from '../../data/coffee-stores.json';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/coffee-store.module.css';
import axios from 'axios';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: axios
        .get(
          'https://api.foursquare.com/v3/places/search?ll=24.8607,67.0011&query=coffee+store&fields=photos,fsq_id,name,location&client_id=4YMEURUF4AL2YFP4SLTIMUPMRBFSEGRQX11VAIDQT4S2JO01&client_secret=O0131EOWYCZZU5Q1STTJHXVQV3AFSEK2VYZ0U5PHL3NZJ5MZ'
        )
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
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
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeStore;
