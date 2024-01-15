import axios from 'axios';
import {SERVER_URL} from '../../../lib/config';

const api = axios.create({
  baseURL: SERVER_URL,
});
export default api;
