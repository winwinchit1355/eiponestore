import { apiBaseUrls, productActionType,constants } from "../../consts/index";
import { apiCall } from "../../services/apiService";

export function fetchProducts(params) {
  return async (dispatch) => {
    let Url = apiBaseUrls.PRODUCTS + params;
    const response = await apiCall.get(Url);
    dispatch({
      type: productActionType.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
}
export function fetchFeatureProducts(params) {
  return async (dispatch) => {
    let Url = apiBaseUrls.PRODUCTS + params;
    const response = await apiCall.get(Url);
    dispatch({
      type: productActionType.FETCH_FEATURE_PRODUCTS,
      payload: response.data,
    });
  };
}
export function fetchShopProducts(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true
    })
    let Url = apiBaseUrls.SHOP + params;
    const response = await apiCall.get(Url);
    dispatch({
      type: productActionType.FETCH_SHOP_PRODUCTS,
      payload: response.data,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false
    })
  };
}
export function fetchProductDetail(params) {
  return async (dispatch) => {
    let Url = apiBaseUrls.PRODUCT_DETAIL + params;
    const response = await apiCall.get(Url);
    dispatch({
      type: productActionType.FETCH_PRODUCT_DETAIL,
      payload: response.data,
    });
  };
}
