import axios from 'axios';

const apiUrl = 'https://korea-webtoon-api.herokuapp.com/';


export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    accept: 'application/json',
  },
});