export const constants = {
  IS_LOADING: 'IS_LOADING',
  
};

export const localCache ={
  CUSTOMER: 'customer'
}
export const categoryActionType = {
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  FETCH_CATEGORY: "FETCH_CATEGORY",
};

export const productActionType = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCT: "FETCH_PRODUCT",
  FETCH_FEATURE_PRODUCTS: "FETCH_FEATURE_PRODUCTS",
  FETCH_SHOP_PRODUCTS: "FETCH_SHOP_PRODUCTS",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
};

export const cartActionType = {
  FETCH_CARTITEMS: "FETCH_CARTITEMS",
  FETCH_CARTITEM_COUNT: "FETCH_CARTITEM_COUNT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_CART: "REMOVE_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_CART: "UPDATE_CART",
}

export const orderActionType = {
  FETCH_ORDERS: "FETCH_ORDERS",
  COMPLETE_ORDER: "COMPLETE_ORDER",
}

export const wishlistActionType = {
  FETCH_WISHLISTS: "FETCH_WISHLISTS",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
}
export const apiBaseUrls = {
  HOME:'/',
  CATEGORIES: "/categories",
  PRODUCTS: "/products",
  SHOP: "/shop",
  PRODUCT_DETAIL: "/product-detail",
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
  CARTITEM: "/cartitems",
  GET_CARTITEM_COUNT: "/get-cartitem-count",
  ADD_TO_WISHLIST: "/add-to-wishlist",
  CARTLIST: "/cartlist",
  ADD_TO_CART: "/add-to-cart",
  REMOVE_CART: "/remove-cart",
  CLEAR_CART: "/clear-cart",
  UPDATE_CART: "/update-cart",
  WISHLIST: "/wishlists",
  CHECKOUT_LIST: "/checkout-list",
  CHECKOUT_COMPLETE: "/checkout-complete",
  ORDERLIST: "/orderlist",
  COMPLETE_ORDER: "/complete-order",
};

export const Tokens={
  ADMIN:'adminToken',
  CUSTOMER:'customerToken'
}
export const SET_LOADING = "SET_LOADING";
