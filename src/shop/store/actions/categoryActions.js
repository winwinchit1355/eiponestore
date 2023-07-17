import { apiBaseUrls,categoryActionType,constants } from "../../consts/index";
import { apiCall } from "../../services/apiService";
import { serverUrl } from './../../../environment';

export function fetchCategories(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true
    })
    let Url=serverUrl+apiBaseUrls.CATEGORIES;
    const response = await apiCall(Url,'get');
    
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
