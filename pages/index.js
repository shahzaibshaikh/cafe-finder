import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner';
import Card from '@/components/Card';
import coffeeStores from '../data/coffee-stores.json';

export default function Home() {
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
        <div className={styles.cardLayout}>
          {coffeeStores.map(store => (
            <Card
              name={store.name}
              imgUrl={store.imgUrl}
              href={`/coffee-store/${store.id}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}
