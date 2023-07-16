import axios from "axios";
import { serverUrl } from "../../environment";
import { Tokens } from "../consts";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axios.defaults.headers = headers;
const token = localStorage.getItem(Tokens.CUSTOMER);
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
export const apiCall = {
  get: (url, params = [],options = {}) => {
    return axios
      .get(`${serverUrl}/${url}`, { params },options)
      .then((response) => response.data);
  },
  post: (url, data,options = {}) => {
    return axios
      .post(`${serverUrl}/${url}`, data,options)
      .then((response) => response.data);
  },
  put: (url, data,options = {}) => {
    return axios
      .put(`${serverUrl}/${url}`, data,options)
      .then((response) => response.data);
  },
  delete: (url,options = {}) => {
    return axios
      .delete(`${serverUrl}/${url}`,options)
      .then((response) => response.data);
  },
};
