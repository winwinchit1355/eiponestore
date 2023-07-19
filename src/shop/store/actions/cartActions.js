import { apiBaseUrls, cartActionType } from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverUrl } from './../../../environment';

export function fetchCartItems() {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.CARTITEM;
    const response = await apiCall(Url, "get");
    dispatch({
      type: cartActionType.FETCH_CARTITEMS,
      payload: response.data,
    });
  };
}
export function fetchCartItemCount(params) {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.GET_CARTITEM_COUNT;
    const response = await apiCall(Url, "get");
    dispatch({
      type: cartActionType.FETCH_CARTITEM_COUNT,
      payload: response.data.data,
    });
  };
}
export function addToCart(params) {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.ADD_TO_CART + params;
    const response = await apiCall(Url, "post");
    toast.success(response.data.message, { autoClose: 1000,position: toast.POSITION.TOP_CENTER });
    dispatch({
      type: cartActionType.ADD_TO_CART,
      payload: response.data,
    });
    dispatch(fetchCartItemCount());
  };
}
export function removeFromCart(params) {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.REMOVE_CART;
    const response = await apiCall(Url, "post",params);
    toast.success(response.data.message,{autoClose:1000,position: toast.POSITION.TOP_CENTER});
    dispatch({
      type: cartActionType.REMOVE_CART,
      payload: response.data,
    });
    dispatch(fetchCartItemCount());
  };
}
export function clearCart() {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.CLEAR_CART;
    const response = await apiCall(Url, "post");
    toast.success(response.data.message,{ autoClose: 1000,position: toast.POSITION.TOP_CENTER} );
    dispatch({
      type: cartActionType.CLEAR_CART,
      payload: response.data,
    });
    dispatch(fetchCartItemCount());
    dispatch(fetchCartItems());
  };
}
export function updateCart(params) {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.UPDATE_CART;
    const response = await apiCall(Url, "post",{quantity:params});
    toast.success(response.data.message,{ autoClose: 1000,position: toast.POSITION.TOP_CENTER} );
    dispatch({
      type: cartActionType.UPDATE_CART,
      payload: response.data,
    });
    dispatch(fetchCartItemCount());
  };
}
