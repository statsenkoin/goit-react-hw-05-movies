import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'e55542ecb6aab3d889d16953eac82937',
};

// https://api.themoviedb.org/3/trending/movie/day&api_key=...
// https://api.themoviedb.org/3/search/movie?query=avatar&api_key=...
// https://api.themoviedb.org/3/movie/{id}&api_key=...
// response.data = {
// "page": 1,
// "results": [20 items],
// "total_pages": 1000,
// "total_results": 20000
// }

export async function fetchTrending() {
  const response = await axios.get(`/trending/movie/day`);
  return response.data.results;
}

export async function fetchMovieByName(query = 'avatar') {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}
