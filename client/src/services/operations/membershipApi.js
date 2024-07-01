import { membershipEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const { GETPLANS_API } = membershipEndpoints;

export const GETPLANS = async () => {
  return await responseHanlder("GET", GETPLANS_API, null, true, null);
};
