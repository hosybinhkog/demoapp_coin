import axios from 'axios';

const baseURL = 'http://localhost:5555/api/v1/';

export const createUser = async (data) => await clientAxios.post('user/register', data);

const clientAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'access-control-allow-origin': 'http://localhost:3000',
  },
  withCredentials: true,
});

export default clientAxios;
