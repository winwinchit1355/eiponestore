import { Tokens, apiBaseUrls, cartActionType } from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function fetchCartItems(params) {
  return async (dispatch) => {
    let Url = apiBaseUrls.CARTITEM + params;
    const response = await apiCall.get(Url);
    dispatch({
      type: cartActionType.FETCH_CARTITEMS,
      payload: response.data,
    });
  };
}
export function fetchCartItemCount(params) {
  
  return async (dispatch) => {
    let Url = apiBaseUrls.GET_CARTITEM_COUNT;
    const token = localStorage.getItem(Tokens.CUSTOMER);
    
    if (token) {
      const headersWithToken = {
        Authorization: `Bearer ${token}`,
      };
      console.log(headersWithToken)
      const response = await apiCall.get(Url,params, {
        headers: headersWithToken,
      });
      dispatch({
        type: cartActionType.FETCH_CARTITEM_COUNT,
        payload: response.data,
      });
    }
    
  };
}
export function addToCart(params) {
  return async (dispatch) => {
    let Url = apiBaseUrls.ADD_TO_CART + params;

    const token = localStorage.getItem(Tokens.CUSTOMER);
    if (token) {
      const headersWithToken = {
        Authorization: `Bearer ${token}`,
      };
      const response = await apiCall.post(Url, params, {
        headers: headersWithToken,
      });
      toast.success(response.message);
      dispatch({
        type: cartActionType.ADD_TO_CART,
        payload: response.data,
      });
      dispatch({
        type: cartActionType.FETCH_CARTITEM_COUNT,
      });
    }
  };
}
