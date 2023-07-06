import { categoryActionType } from "../../consts/index";
import { apiCall } from "../../services/apiService";

export function fetchCategories(params) {
  return async (dispatch) => {
    const response = await apiCall.get("categories", params);
    dispatch({
      type: categoryActionType.FETCH_CATEGORIES,
      payload: response.data,
    });
  };
}
