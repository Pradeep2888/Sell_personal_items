const isProd =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/v1"
    : "https://sellpersonalitem.vercel.app/api/v1";

// const isProd = "https://reviewsix.vercel.app/api/v1"

const BASE_URL = isProd;

// AUTH ENDPOINTS
export const endpoints = {
  LOGIN_API: BASE_URL + "/login",
  AUTHENTICATE_USER_API: BASE_URL + "/authenticate",
  LOGOUT_USER_API: BASE_URL + "/logout",
  SIGNIN_API: BASE_URL + "/signup",
  UPDATE_PASSOWRD_API: BASE_URL + "/updatePassword",
};

export const membershipEndpoints = {
  GET_MEMBERSHIP_API: BASE_URL + "/membership",
  GETPLANS_API: BASE_URL + "/plans",
};

export const donationEndpoints = {
  DONATION_API: BASE_URL + "/donation/create",
};
export const fileUploadEndpoints = {
  // imageUpload_API: BASE_URL + "/uploads",
  fileUpload_API: BASE_URL + "/uploads",
  deleteFileUpload_API: BASE_URL + "/uploads",
};
export const adminEndpoints = {
  addProduct_API: BASE_URL + "/addproduct",
  getModerationProduct_API: BASE_URL + "/moderation",
  moderationProduct_Statusupdate_API: BASE_URL + "/moderation",
  getOrders_API: BASE_URL + "/orders",
  getMyProducts_API: BASE_URL + "/my-products",
  getFavourites_API: BASE_URL + "/fovourites",
  getMessages_API: BASE_URL + "/messages",
  getMyOrders_API: BASE_URL + "/my-orders",
  getSettings_API: BASE_URL + "/settings",
};
