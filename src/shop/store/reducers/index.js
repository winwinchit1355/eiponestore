import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  featureProducts: productReducer,
});
