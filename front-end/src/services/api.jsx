import axios from 'axios';

const request = async (resource, method, body) => {
  try {
    if (method === 'post') {
      const res = await axios[method](`http://localhost:3001${resource}`, body);
      return res.data;
    } if (method === 'get') {
      const res = await axios[method](`http://localhost:3001${resource}`, {
        headers: {
          authorization: body,
        },
      });
      return res.data;
    }
  } catch (err) { return (err.response.data); }
};

export const apiRequestLogin = async (user) => (
  request('/login', 'post', user));

export const apiRequestCadaster = async (user) => (
  request('/user', 'post', user));

export const apiRequestProductsGetAll = async (token) => (
  request('/products', 'get', token));
