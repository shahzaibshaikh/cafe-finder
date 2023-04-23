import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import coffeeStores from '../data/coffee-stores.json';
import axios from 'axios';

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      'https://api.foursquare.com/v3/places/search?ll=24.8607,67.0011&query=coffee+store&fields=photos,fsq_id,name,location&client_id=4YMEURUF4AL2YFP4SLTIMUPMRBFSEGRQX11VAIDQT4S2JO01&client_secret=O0131EOWYCZZU5Q1STTJHXVQV3AFSEK2VYZ0U5PHL3NZJ5MZ',
      {
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3fngmT/TqbdfqgiVDNDQ6+vjoPbX/sEwoqxLEFEqwyhQ='
        }
      }
    );
    return {
      props: {
        coffeeStores: response.data.results
      }
    };
  } catch (err) {
    throw err;
  }
}

export default function Home({ coffeeStores }) {
  function handleOnBannerBtnClick() {
    console.log('Handle Button Click');
  }

  return (
    <>
      <Head>
        <title>Cafe Finder</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerBtnClick} />
        {coffeeStores.length > 0 && (
          <>
            <h2 className={styles.subheading}>Toronto Coffee Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map(store => (
                <Card
                  key={store.fsq_id}
                  name={store.name}
                  imgUrl={store.photos[0].prefix + 'original' + store.photos[0].suffix}
                  href={`/coffee-store/${store.id}`}
                  alt={store.name}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
