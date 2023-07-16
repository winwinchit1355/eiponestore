import axios from "axios";
import { serverUrl } from "../../environment";
import { Tokens } from "../consts";

export const apiCall = {
  get: (url, params = [], options = {}) => {
    // console.log(url);
    // console.log(options);
    // console.log(headersWithToken);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios.defaults.headers = headers;
    const token = localStorage.getItem(Tokens.CUSTOMER);
    // const getToken = async () => await localStorage.getItem(Tokens.CUSTOMER);
    // const token=getToken();
    // console.log(token);
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const headersWithToken = {
      Authorization: `Bearer ${token}`,
    };
    return axios
      .get(`${serverUrl}/${url}`, { params }, { headers: headersWithToken })
      .then((response) => response.data);
  },
  post: (url, data, options = {}) => {
    return axios
      .post(`${serverUrl}/${url}`, data, options)
      .then((response) => response.data);
  },
  put: (url, data, options = {}) => {
    return axios
      .put(`${serverUrl}/${url}`, data, options)
      .then((response) => response.data);
  },
  delete: (url, options = {}) => {
    return axios
      .delete(`${serverUrl}/${url}`, options)
      .then((response) => response.data);
  },
};
