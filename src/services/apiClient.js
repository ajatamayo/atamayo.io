import axios from 'axios';

function createClient() {
  return axios.create({
    baseURL: '/api',
  });
}

function createApiClient() {
  return {
    get(...args) {
      return createClient().get(...args);
    },
    post(...args) {
      return createClient().post(...args);
    },
    put(...args) {
      return createClient().put(...args);
    },
    delete(...args) {
      return createClient().delete(...args);
    },
  };
}

export default createApiClient();
