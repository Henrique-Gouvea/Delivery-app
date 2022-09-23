import axios from 'axios';

const request = async (resource, method, body) => {
  try {
    const res = await axios[method](`http://localhost:3001${resource}`, body);
    return res.data;
  } catch (err) { return (err.response.data); }
};

export const apiRequestLogin = async (user) => (
  request('/login', 'post', user));

export const apiRequestCadaster = async (user) => (
  request('/user', 'post', user));
