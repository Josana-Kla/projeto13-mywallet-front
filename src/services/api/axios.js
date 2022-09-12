import axios from "axios";

export const BASE_URL = "http://localhost:5000";

function getLocalToken() {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function addCashIn(body) {
  const config = getLocalToken();
  console.log(config);
  const promise = axios.post(`${BASE_URL}/cash-in`, body, config);
  return promise;
}

function addCashOut(body) {
  const config = getLocalToken();
  console.log(config);
  const promise = axios.post(`${BASE_URL}/cash-in`, body, config);
  return promise;
}

export { signUp, signIn, addCashIn, addCashOut }