import fetchCoffeeStores from '@/libs/fetchCoffeeStores';

async function getCoffeeStoresByLocation(req, res) {
  const response = await fetchCoffeeStores();
}

export default getCoffeeStoresByLocation;
