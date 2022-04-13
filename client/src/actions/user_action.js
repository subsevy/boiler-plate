import axios from "axios";

import { USER_SERVER } from "../components/Config";
import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return { type: LOGIN_USER, payload: request };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return { type: REGISTER_USER, payload: request };
};

export const authUser = () => {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return { type: AUTH_USER, payload: request };
};

export const logoutUser = () => {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};
