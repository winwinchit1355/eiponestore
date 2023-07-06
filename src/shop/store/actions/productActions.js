import { apiBaseUrls, productActionType } from "../../consts/index";
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
