import axios from "axios";
import { getToken } from "../../utils/cache";
import { Tokens } from "../consts";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const apiCall = async (url, method, data) => {
  const token = await getToken(Tokens.CUSTOMER);

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers = headers;
  return await axios[method](url, data).then(function (response) {
    return response;
  });
};
