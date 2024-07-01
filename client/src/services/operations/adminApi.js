import { adminEndpoints, fileUploadEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const { addProduct_API, getModerationProduct_API } = adminEndpoints;
const { fileUpload_API, deleteFileUpload_API } = fileUploadEndpoints;

export const ADDPRODUCT = async (formdata) => {
  return await responseHanlder("POST", addProduct_API, formdata, true, null);
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

export const GET_MODERATION_PRODUCT = async () => {
  return await responseHanlder(
    "GET",
    getModerationProduct_API,
    null,
    true,
    null
  );
};
