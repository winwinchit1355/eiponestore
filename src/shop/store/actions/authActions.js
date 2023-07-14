import { useState } from "react";
import { apiBaseUrls,constants,Tokens } from "../../consts/index";
import { apiCall } from "../../services/apiService";

export function login(params) {
  return async (dispatch) => {
    dispatch({
      type: constants.IS_LOADING,
      payload: true
    })
    const response = await apiCall.post(apiBaseUrls.LOGIN, params);
    localStorage.setItem(Tokens.CUSTOMER,response.access_token);
    var isLogIn=false;
    if(response.access_token){
       isLogIn=true;
    }
    dispatch({
      type: apiBaseUrls.LOGIN,
      payload: isLogIn,
    });
    dispatch({
      type: constants.IS_LOADING,
      payload: false
    })
  };
}
export function logout(params) {
  return async (dispatch) => {
    
    const response = await apiCall.post(apiBaseUrls.LOGOUT,params);
    localStorage.removeItem(Tokens.CUSTOMER);
    dispatch({
      type: apiBaseUrls.LOGOUT,
      payload: response,
    });
    
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
