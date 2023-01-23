import axios from 'axios';

export default() => axios.create({
  baseURL: 'https://hsv-dot-beer.fly.dev/api/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
