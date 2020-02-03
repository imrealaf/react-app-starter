import axios from 'axios';

import appConfig from '../constants/config';

/**
 *  Send request method
 */
export const sendRequest = (method, url, data = {}) => {
  // Request config
  const config = {
    baseURL: appConfig.HTTP_CLIENT_BASE,
    method,
    url,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // If request requires sending data ..
  if (method === 'post' || method === 'put') {
    config.data = data;
  }

  return axios(config);
};

/**
 *  Set header method
 */
export const setHeader = (key, value) => {
  if (value) {
    axios.defaults.headers.common[key] = value;
  }
};

/**
 *  Delete header method
 */
export const deleteHeader = key => {
  if (key) {
    delete axios.defaults.headers.common[key];
  }
};

/**
 *  Request error
 */
export const requestError = error => {
  return Object.prototype.toString.call(error.response.data) ===
    '[object String]'
    ? { message: error.response.data }
    : error.response.data;
};
