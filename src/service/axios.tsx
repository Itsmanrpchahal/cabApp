import axios from 'axios';

import {apiUri, baseURL} from './apiEndPoints';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
