import { categoryActionType,constants } from "../../consts/index";
import { apiCall } from "../../services/apiService";

export function fetchCategories(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true
    })
    const response = await apiCall.get("categories", params);
    dispatch({
      type: categoryActionType.FETCH_CATEGORIES,
      payload: response.data,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false
    })
  };
}
