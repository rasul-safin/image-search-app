import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID${' SJ6lFnFD4bftv3tP2ZagKad8fNEJLq4Vn9lRGQzLXcM'}`,
  },
});
//
