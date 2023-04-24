import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import fetchCoffeeStores from '@/libs/fetchCoffeeStores';

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores: coffeeStores
    }
  };
}

export default function Home({ coffeeStores }) {
  function handleOnBannerBtnClick() {
    console.log('Handle Button Click');
  }

  return (
    <>
      <Head>
        <title>Cafe Finder App</title>
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
                  imgUrl={
                    store?.photos[0]?.prefix + 'original' + store?.photos[0]?.suffix
                  }
                  href={`/coffee-store/${store.fsq_id}`}
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
