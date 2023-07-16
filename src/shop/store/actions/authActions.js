import {
  apiBaseUrls,
  constants,
  Tokens,
  cartActionType,
} from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { serverUrl } from "./../../../environment";
import { setToken,removeToken } from "../../../utils/cache";

export function login(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true,
    });

    let Url = serverUrl + "/" + apiBaseUrls.LOGIN;
    const response = await apiCall(Url, "post",params);
    setToken(Tokens.CUSTOMER,response.data.access_token);
    
    var isLogIn = false;
    if (response.data.access_token) {
      isLogIn = true;
    }
    dispatch({
      type: apiBaseUrls.LOGIN,
      payload: isLogIn,
    });
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false,
    });
  };
}
export function logout() {
  return async (dispatch) => {
    let Url = serverUrl + "/" + apiBaseUrls.LOGOUT;
    await apiCall(Url, "post");
    removeToken(Tokens.CUSTOMER);
    dispatch({
      type: apiBaseUrls.LOGOUT,
      payload: false,
    });
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT,
    });
  };
}
export function register(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true,
    });
    let Url = serverUrl + "/" + apiBaseUrls.REGISTER+params;
    const response = await apiCall(Url, "post");
    dispatch({
      type: apiBaseUrls.REGISTER,
      payload: response.data,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false,
    });
  };
}
