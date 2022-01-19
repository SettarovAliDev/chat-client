import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://ali-chat.herokuapp.com/'
      : 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
