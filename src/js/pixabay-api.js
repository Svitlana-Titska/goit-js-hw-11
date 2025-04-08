import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async query => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
