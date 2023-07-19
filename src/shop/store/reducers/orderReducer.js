import { orderActionType } from "../../consts/index";

export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case orderActionType.FETCH_ORDERS:
      return { ...state, orders: action.payload };
    case orderActionType.COMPLETE_ORDER:
      return { ...state, cartitems: action.payload };
    default:
      return state;
  }
};
