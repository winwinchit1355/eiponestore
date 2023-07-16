import {  apiBaseUrls } from "../../consts/index";

export const authReducer = (state = [], action) => {
  switch (action.type) {
    case apiBaseUrls.LOGIN:
      return { ...state, isLoggedIn: action.payload };
    case apiBaseUrls.LOGOUT:
      return { ...state, isLoggedIn: action.payload };
    case apiBaseUrls.REGISTER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
};
