import { toast } from "sonner";
import { apiConnector } from "./axiosConfig";
import { BASEURL } from "../utils/constants";

const responseHanlder = async (
  method,
  url,
  body,
  loading = false,
  params,
  header
) => {
  let data;
  // let processing;
  if (loading) {
    toast.loading("loading...");
  }
  try {
    const response = await apiConnector(
      method,
      url,
      body ? body : {},
      params,
      header
    );
    // data = response.data;
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.data.message) {
        if (error.response.status === 401) {
          // if (error.response.data.message) {
          //   toast.error(error.response.data.message);
          // }
          localStorage.setItem(
            "authStore",
            JSON.stringify({
              state: { loggedIn: false, authorised: false, userData: {} },
            })
          );
          localStorage.removeItem('_sell_Token')
          window.location.href = BASEURL + "login-register?tab=login";
        } else {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          }
        }
      }
    } else {
      toast.error(error.message);
      // return error;
    }
  } finally {
    toast.dismiss();
  }
  // return data;
};
export default responseHanlder;
