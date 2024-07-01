import { toast } from "sonner";
import { getAlert } from "./getAlert";

export const BASEURL = "/";
export const IMAGEURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/uploads/"
    : "https://sellpersonalitem.vercel.app/uploads/";

export function getFormData(formRef) {
  let formData = {};
  formRef.current.forEach((item) => {
    formData[item.name] = item.value;
  });

  return formData;
}

export const getFormatedDate = (date) => {
  if (date) {
    return date.split("T")[0];
  }
  return null;
};

export const getArrayLength = (array) => {
  return array.length;
};
