import axios from "axios";

const axiosInstance = axios.create({});

//

export const apiConnector = (method, url, bodyData, headers, params) => {
  const config = {
    method,
    url,
    data: JSON.stringify(bodyData) || null,
    headers: headers
      ? headers
      : {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        },

    params: params ? params : null,
    // credentials: "include",
    withCredentials: true,
  };

  return axiosInstance(config);
};
