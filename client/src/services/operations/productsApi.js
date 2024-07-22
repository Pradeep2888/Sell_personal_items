import responseHanlder from "../apiUtils";
import { productEndPoint } from "../api";

const { getProducts_API, getProductCategory_API } = productEndPoint;

export const GET_ALL_PRODUCTS = async (searchParams) => {
  return await responseHanlder(
    "GET",
    getProducts_API,
    null,
    false,
    null,
    searchParams
  );
};
export const GET_SINGLE_PRODUCTS = async (params, searchParams) => {
  return await responseHanlder(
    "GET",
    getProducts_API + "/" + params,
    null,
    false,
    null,
    searchParams
  );
};
export const GET_PRODUCT_CATEGORY = async () => {
  return await responseHanlder(
    "GET",
    getProductCategory_API,
    null,
    false,
    null
  );
};
