import { apiBaseUrls } from "../../consts/index";
export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case apiBaseUrls.LOGIN:
      return { ...state, logins: action.payload };
    case apiBaseUrls.LOGOUT:
      return { ...state, featureProducts: action.payload };
    case apiBaseUrls.REGISTER:
      return { ...state, shopProducts: action.payload };
    default:
      return state;
  }
};
