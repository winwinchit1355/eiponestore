import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";

export const reducers = combineReducers({
  categories: categoryReducer,
});
