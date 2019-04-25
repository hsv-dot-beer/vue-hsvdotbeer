import axios from 'axios';

export default() => axios.create({
  baseURL: 'https://dev.hsv.beer/api/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
