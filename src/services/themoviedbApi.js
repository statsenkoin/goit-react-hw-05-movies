import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { key: 'e55542ecb6aab3d889d16953eac82937' };
// https://api.themoviedb.org/3/trending/movie/day?api_key=e55542ecb6aab3d889d16953eac82937
// {
// "page": 1,
// "results": [20 items],
// "total_pages": 1000,
// "total_results": 20000
// }
