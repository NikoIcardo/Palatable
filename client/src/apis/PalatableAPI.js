import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.baseURL + '/api/v1/restaurants' ||
    'http://localhost:5000/api/v1/restaurants',
});
