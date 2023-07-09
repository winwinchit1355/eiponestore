import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { loadingReducer } from "./loadingReducer";

export const reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  featureProducts: productReducer,
  shopProducts: productReducer,
  loading: loadingReducer,
});
