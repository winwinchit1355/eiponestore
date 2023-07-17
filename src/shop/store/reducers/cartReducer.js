import { cartActionType } from "../../consts/index";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case cartActionType.FETCH_CARTITEMS:
      return { ...state, cartitems: action.payload };
    case cartActionType.FETCH_CARTITEM_COUNT:
      return { ...state, count: action.payload };
    case cartActionType.ADD_TO_CART:
      return { ...state, cartitems: action.payload };
    default:
      return state;
  }
};
