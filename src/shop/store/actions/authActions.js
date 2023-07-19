import {
  apiBaseUrls,
  localCache,
  Tokens,
  cartActionType,
} from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { serverUrl } from "./../../../environment";
import { setToken, removeToken } from "../../../utils/cache";
import { toast } from "react-toastify";

export function login(params) {
  return async (dispatch) => {
    let Url = serverUrl + apiBaseUrls.LOGIN;
    const response = await apiCall(Url, "post", params);
    setToken(Tokens.CUSTOMER, response.data.access_token);
    setToken(localCache.CUSTOMER, JSON.stringify(response.data.user)); //from obj to str
    toast.success(response.data.message, { autoClose: 1000 });
    var isLogIn = false;
    if (response.data.access_token) {
      isLogIn = true;
    }
    dispatch({
      type: apiBaseUrls.LOGIN,
      payload: isLogIn,
    });
  };
}
export function logout() {
  return async (dispatch) => {
    let Url = serverUrl + apiBaseUrls.LOGOUT;
    const response = await apiCall(Url, "post");
    removeToken(Tokens.CUSTOMER);
    removeToken(localCache.CUSTOMER);
    toast.success(response.data.message, { autoClose: 1000 });
    dispatch({
      type: apiBaseUrls.LOGOUT,
      payload: false,
    });
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT, //after logout ,to clear cartitem count in topnavbar
    });
  };
}
export function register(params) {
  return async (dispatch) => {
    // dispatch({
    //   type: constants.IS_LOADING,
    //   payload: true,
    // });
    let Url = serverUrl + apiBaseUrls.REGISTER;
    const response = await apiCall(Url, "post", params);
    toast.success(response.data.message, { autoClose: 1000 });
    dispatch({
      type: apiBaseUrls.REGISTER,
      payload: response.data,
    });
    // dispatch({
    //   type: constants.IS_LOADING,
    //   payload: false,
    // });
  };
}
