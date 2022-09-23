import axios from 'axios';

const request = async (resource, method, body) => {
  const { email, password } = body;
  try {
    const res = await axios[method](`http://localhost:3001${resource}`, {
      email,
      password,
    });
    return res.data;
  } catch (err) { return (err.response.data); }
};

const apiRequestLogin = async (user) => (
  request('/login', 'post', user));

export default apiRequestLogin;
