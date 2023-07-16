import { apiBaseUrls, cartActionType } from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverUrl } from './../../../environment';

export function fetchCartItems(params) {
  return async (dispatch) => {
    let Url = serverUrl+'/'+apiBaseUrls.CARTITEM + params;
    const response = await apiCall(Url, "get");
    dispatch({
      type: cartActionType.FETCH_CARTITEMS,
      payload: response.data,
    });
  };
}
export function fetchCartItemCount(params) {
  return async (dispatch) => {
    let Url = serverUrl+'/'+apiBaseUrls.GET_CARTITEM_COUNT;
    const response = await apiCall(Url, "get");
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT,
      payload: response.data,
    });
  };
}
export function addToCart(params) {
  return async (dispatch) => {
    let Url = serverUrl+'/'+apiBaseUrls.ADD_TO_CART + params;
    const response = await apiCall(Url, "post");
    toast.success(response.data.message);
    dispatch({
      type: cartActionType.ADD_TO_CART,
      payload: response.data,
    });
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT,
    });
  };
}
