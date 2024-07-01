import { endpoints } from "../api";
import responseHanlder from "../apiUtils";

const { LOGIN_API, SIGNIN_API, AUTHENTICATE_USER_API, LOGOUT_USER_API } =
  endpoints;

export const LOGIN = async (formdata) => {
  return await responseHanlder("POST", LOGIN_API, formdata, true, null);
};
export const SIGNUP = async (signupformdata) => {
  return await responseHanlder("POST", SIGNIN_API, signupformdata, true, null);
};
export const AUTHENTICATEUSER = async () => {
  return await responseHanlder("GET", AUTHENTICATE_USER_API, null, true, null);
};
export const LOGOUTUSER = async () => {
  return await responseHanlder("POST", LOGOUT_USER_API, null, true, null);
};
