import { apiBaseUrls, orderActionType } from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serverUrl } from './../../../environment';
import { fetchCartItemCount, fetchCartItems } from "./cartActions";

export function fetchOrders() {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.ORDERLIST;
    const response = await apiCall(Url, "get");
    dispatch({
      type: orderActionType.FETCH_ORDERS,
      payload: response.data,
    });
  };
}

export function completeOrder() {
  return async (dispatch) => {
    let Url = serverUrl+apiBaseUrls.COMPLETE_ORDER ;
    const response = await apiCall(Url, "post");
    toast.success(response.data.message, { autoClose: 1000,position: toast.POSITION.TOP_CENTER });
    dispatch({
      type: orderActionType.COMPLETE_ORDER,
      payload: response.data,
    });
    dispatch(fetchCartItemCount());
    dispatch(fetchCartItems());
  };
}

