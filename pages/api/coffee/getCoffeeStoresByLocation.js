import fetchCoffeeStores from '@/libs/fetchCoffeeStores';

async function getCoffeeStoresByLocation(req, res) {
  const response = await fetchCoffeeStores();
  if (response) res.status(200).json(response);
}

export default getCoffeeStoresByLocation;
