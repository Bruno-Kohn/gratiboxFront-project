import axios from 'axios';
const URL = 'http://localhost:4000';

function trySignup(user) {
  return axios.post(`${URL}/signup`, user);
}

function tryLogin(user) {
  return axios.post(`${URL}/login`, user);
}

function tryToSignAPlan(planInfo) {
  return axios.post(`${URL}/sign-a-plan`, planInfo);
}

function tryToGetInfos() {
  return axios.get(`${URL}/sign-a-plan`);
}

function tryToSendDetails(body) {
  return axios.post(`${URL}/details`, body);
}

export { trySignup, tryLogin, tryToSignAPlan, tryToGetInfos, tryToSendDetails };
