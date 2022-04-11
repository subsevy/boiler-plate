import axios from "axios";

import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  return { type: LOGIN_USER, payload: request };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  return { type: REGISTER_USER, payload: request };
};

export const authUser = () => {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return { type: AUTH_USER, payload: request };
};
