import axios from 'axios';

export const baseURL = process.env.REACT_APP_REST_API;
export const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'json'
};

const convertResponse = response => {
  const totalItems = parseInt(
    response.headers && response.headers['x-total-count'],
    10
  );

  let res = response.data;

  if (!Number.isNaN(totalItems)) {
    res = {
      items: response.data,
      totalItems
    };
  }

  return res;
};

const apiRequest = (url, options = {}) => {
  const { url: unusedUrl, ...restOptions } = options;

  return axios({
    method: 'get',
    headers: {
      ...defaultHeaders,
      ...restOptions.headers
    },
    url: baseURL + url,
    ...restOptions
  }).then(convertResponse);
};

export default apiRequest;
