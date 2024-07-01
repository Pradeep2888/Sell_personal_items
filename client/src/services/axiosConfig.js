import axios from "axios";

const axiosInstance = axios.create({});

//

export const apiConnector = (method, url, bodyData, headers, params) => {
  const config = {
    method,
    url,
    data: JSON.stringify(bodyData) || null,
    headers: { "Content-Type": "application/json" },
    params: params || null,
    // credentials: "include",
    withCredentials: true
  };

  return axiosInstance(config);
};
