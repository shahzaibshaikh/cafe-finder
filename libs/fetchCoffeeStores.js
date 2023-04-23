import axios from 'axios';
const fetchCoffeeStores = async () => {
  try {
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/search?ll=24.8607,67.0011&query=coffee+store&fields=photos,fsq_id,name,location&client_id=${process.env.NEXT_CLIENT_ID}&client_secret=${process.env.NEXT_CLIENT_SECRET}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: process.env.NEXT_API_KEY
        }
      }
    );
    return response.data.results;
  } catch (err) {
    throw err;
  }
};

export default fetchCoffeeStores;
