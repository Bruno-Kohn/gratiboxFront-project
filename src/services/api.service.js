import axios from 'axios';
const URL = 'http://localhost:4000';

function trySignup(user) {
  return axios.post(`${URL}/signup`, user);
}

function tryLogin(user) {
  return axios.post(`${URL}/login`, user);
}

export { trySignup, tryLogin };
