import { adminEndpoints, fileUploadEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const { addProduct_API, getModerationProduct_API, getMyProducts_API } =
  adminEndpoints;
const { fileUpload_API, deleteFileUpload_API } = fileUploadEndpoints;

export const ADDPRODUCT = async (formdata) => {
  return await responseHanlder("POST", addProduct_API, formdata, true, null);
};
export const UPDATEPRODUCT = async (formdata) => {
  return await responseHanlder(
    "PUT",
    addProduct_API,
    formdata,
    true,
    null
  );
};
export const UPLOADS = async (formdata) => {
  return await responseHanlder("POST", fileUpload_API, formdata, true, null);
};
export const DELETEUPLOADS = async (id) => {
  return await responseHanlder(
    "DELETE",
    deleteFileUpload_API + `/${id}`,
    null,
    true,
    null
  );
};

export const GET_MODERATION_PRODUCT = async (params) => {
  return await responseHanlder(
    "GET",
    getModerationProduct_API,
    null,
    true,
    null,
    params,
  );
};
export const GET_MODERATION_PRODUCTByID = async (params) => {
  return await responseHanlder(
    "GET",
    getModerationProduct_API + "/" + params.id,
    null,
    true,
    params
  );
};

export const DELETE_MODERATION_PRODUCT = async (id) => {
  return await responseHanlder(
    "DELETE",
    getModerationProduct_API + "/" + id,
    null,
    true,
    null
  );
};

export const MODERATION_PRODUCT_STATUSUPDATE = async (data) => {
  return await responseHanlder(
    "PUT",
    getModerationProduct_API,
    data,
    true,
    null
  );
};

export const GET_MY_PRODUCT = async (params) => {
  return await responseHanlder("GET", getMyProducts_API, null, true, null,params);
};
export const GET_MY_PRODUCT_BY_ID = async (id) => {
  return await responseHanlder("GET", getMyProducts_API+"/"+id, null, true, null);
};
export const DELETE_MY_PRODUCT = async (id) => {
  return await responseHanlder(
    "DELETE",
    getMyProducts_API + "/" + id,
    null,
    true,
    null
  );
};
