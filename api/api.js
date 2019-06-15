import Axios from 'axios';

//const baseUri = 'http://localhost:55438/api/';
const baseUri = 'https://indycivichack20190614105720.azurewebsites.net/api/';

export const get = uri => Axios.get(baseUri + uri);

export const post = (uri, body) => Axios.post(baseUri + uri, body, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const put = (uri, body) => Axios.put(baseUri + uri, body, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});
