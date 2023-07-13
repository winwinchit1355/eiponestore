import { apiBaseUrls,constants } from "../../consts/index";
import { apiCall } from "../../services/apiService";

export function login(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true
    })
    const response = await apiCall.post(apiBaseUrls.LOGIN, params);
    dispatch({
      type: apiBaseUrls.LOGIN,
      payload: response,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false
    })
  };
}
export function register(params) {
    return async (dispatch) => {
      dispatch({
        type: constants.IS_LOADING,
        payload: true
      })
      const response = await apiCall.post(apiBaseUrls.REGISTER, params);
      dispatch({
        type: apiBaseUrls.REGISTER,
        payload: response,
      });
      dispatch({
        type: constants.IS_LOADING,
        payload: false
      })
    };
  }
