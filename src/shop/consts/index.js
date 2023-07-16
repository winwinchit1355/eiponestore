export const constants = {
  IS_LOADING: 'IS_LOADING',
};
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
}
export const wishlistActionType = {
  FETCH_WISHLISTS: "FETCH_WISHLISTS",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
}
export const apiBaseUrls = {
  CATEGORIES: "categories",
  PRODUCTS: "products",
  SHOP: "shop",
  PRODUCT_DETAIL: "product-detail",
  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register",
  CARTITEM: "cartitems",
  ADD_TO_CART: "add-to-cart",
  GET_CARTITEM_COUNT: "get-cartitem-count",
  WISHLIST: "wishlists",
  ADD_TO_WISHLIST: "add-to-wishlist",
};

export const routes={
  HOME:'/',
  LOGIN:'/login'
}
export const Tokens={
  ADMIN:'adminToken',
  CUSTOMER:'customerToken'
}
export const SET_LOADING = "SET_LOADING";
