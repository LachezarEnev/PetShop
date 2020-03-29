import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

import { toastError } from './toasted';

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_By8WcY8IL';
const appSecret = 'fcb3a89e11ec40f6a0f627b975808f75';

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache'
};

const config = {
  baseURL: baseUrl,
  headers: {
    'Cache-Control': 'no-cache'
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
};

const http = axios.create(config);

const authInterceptor = function(config) {
  if (
    (config.url === 'login' || config.url === '') &&
    config.method === 'post'
  ) {
    config.baseURL = `${baseUrl}/user/${appKey}`;
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`)
    };
  } else {
    const token = localStorage.getItem('authtoken');
    config.baseURL = `${baseUrl}/appdata/${appKey}`;
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Authorization: 'Kinvey ' + token
    };
  }
  return config;
};

const loggerInterceptor = config => {
  return config;
};

http.interceptors.request.use(authInterceptor);
http.interceptors.request.use(loggerInterceptor);

const errorInterceptor = function(error) {
  if (error.response.status === 401) {
    toastError(
      `${error.response.statusText}: ${error.response.data.description}`
    );   
  } else if (error.response.status === 500) {
    toastError(`${error.response.statusText}: Server Error`);    
  } else {
    toastError(`${error.response.statusText}`);    
  }

  return Promise.reject(error);
};

const responseInterceptor = function(response) {
  return response;
};

http.interceptors.response.use(responseInterceptor, errorInterceptor);

export { http };