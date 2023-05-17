import axios from 'axios';

const API_KEY = '35004841-c462f882069db81ac1cfa6a88';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
