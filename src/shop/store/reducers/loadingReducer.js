import { constants } from "../../consts/index";
const initialState = {
    loading: false
 }
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.IS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
