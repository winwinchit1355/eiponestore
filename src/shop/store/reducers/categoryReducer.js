import { categoryActionType } from "../../consts/index";
export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case categoryActionType.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
