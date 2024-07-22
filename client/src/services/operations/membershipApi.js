import { membershipEndpoints } from "../api";
import responseHanlder from "../apiUtils";

const { GETPLANS_API } = membershipEndpoints;

export const GETPLANS = async () => {
  return await responseHanlder("GET", GETPLANS_API, null, true, null);
};
export const GETPLANSBYID = async (id) => {
  return await responseHanlder(
    "GET",
    GETPLANS_API + "/" + id,
    null,
    true,
    null
  );
};
