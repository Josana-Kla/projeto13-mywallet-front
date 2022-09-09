import axios from "axios";

export const BASE_URL = "localhost://5000";


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
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

export { signUp, signIn }