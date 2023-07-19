import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, fetchCartItems, updateCart } from "../../store/actions";
import { Tokens, apiBaseUrls } from "../../consts";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../../environment";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

function CartList() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const token = localStorage.getItem(Tokens.CUSTOMER);

  const { cartitems } = useSelector((state) => state.cartitems);
  console.log(cartitems);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchCartItems());
    } else {
      navigate(apiBaseUrls.LOGIN);
    }
  }, []);

  const handleQuantityChange = (event, productQuantity) => {
    const newQuantity = event.target.value;
    if (newQuantity > productQuantity) {
      event.target.value = productQuantity.toString();
      toast.error("Not enough item!", { autoClose: 1000 });
    }
  };
  const onFormSubmit = (data) => {
    console.log(data);
  };
  const handleCartItemRemove = (cartItemId) => {
    console.log(cartItemId);
  };
  const handleCartItemClear = () => {
    dispatch(clearCart());
  };
  const handleCartItemUpdate = () => {
    dispatch(updateCart());
  };
  return (
    <>
      <div className="container-fluid">
        <div className="shop-cart">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="shop-cart-list mb-3 p-3">
                {/* start of cart row */}
                {cartitems && cartitems.data.length != 0 ? (
                  cartitems.data.map((cartitem) => (
                    <React.Fragment key={cartitem.id}>
                      <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <input
                          type="hidden"
                          name="id"
                          {...register("id")}
                          defaultValue={cartitem.uuid}
                        />
                        <div className="row align-items-center g-3">
                          <div className="col-12 col-lg-6">
                            <div className="d-lg-flex align-items-center gap-3">
                              <div className="cart-img text-center text-lg-start">
                                <img
                                  src={
                                    imageUrl + cartitem.product.feature_image
                                  }
                                  width={130}
                                  alt=""
                                />
                              </div>
                              <div className="cart-detail text-center text-lg-start">
                                <h6 className="mb-2">
                                  {cartitem.product.name}
                                </h6>
                                <p className="mb-0">
                                  Type:{" "}
                                  <span>{cartitem.product.metal.name}</span>
                                </p>
                                <p className="mb-2">
                                  Gem:{" "}
                                  <span>{cartitem.product.gemstone.name}</span>
                                </p>
                                <h5 className="mb-0">
                                  {cartitem.product.price} MMK
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3">
                            <div className="cart-action text-center">
                              <input
                                type="number"
                                name="quantity"
                                {...register("quantity")}
                                className="form-control rounded-0"
                                defaultValue={cartitem.quantity}
                                min={1}
                                onChange={(event) =>
                                  handleQuantityChange(
                                    event,
                                    cartitem.product.quantity
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-3">
                            <div className="text-center">
                              <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
                                <a
                                  onClick={() =>
                                    handleCartItemRemove(cartitem.uuid)
                                  }
                                  className="btn btn-outline-dark rounded-0 btn-ecomm"
                                >
                                  <i className="fa fa-close me-1" />
                                  Remove
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light rounded-0 btn-ecomm"
                                >
                                  <i className="fa fa-regular fa-heart me-0" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                      <hr />
                    </React.Fragment>
                  ))
                ) : (
                  <div className="row align-items-center g-3">
                    <div className="col-12 col-lg-6">
                      <div className="d-lg-flex ms-4 align-items-center gap-3">
                        <p className="text-danger">No items</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* end of cart row */}

                <div className="d-lg-flex align-items-center gap-2">
                  <a
                    href={apiBaseUrls.HOME}
                    className="btn btn-dark rounded-0 btn-ecomm"
                  >
                    <i className="bx bx-shopping-bag" /> Continue Shoping
                  </a>
                  {cartitems && cartitems.data.length != 0 ? (
                    <>
                      <a
                        onClick={handleCartItemClear}
                        className="btn btn-danger rounded-0 btn-ecomm ms-auto"
                      >
                        <i className="fa fa-regular fa-circle-xmark"></i> Clear
                        Cart
                      </a>
                      <a
                        onClick={handleCartItemUpdate}
                        className="btn btn-secondary rounded-0 btn-ecomm"
                      >
                        <i className="fa-solid fa-rotate"></i> Update Cart
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {cartitems && cartitems.data.length != 0 ? (
              <div className="col-12 col-xl-4">
                <div className="checkout-form p-3 bg-light">
                  <div className="card rounded-0 border bg-transparent shadow-none">
                    <div className="card-body">
                      <p className="fs-5">Estimate Shipping and Tax</p>
                      <div className="my-3 border-top" />
                      <div className="mb-3">
                        <label className="form-label">Country Name</label>
                        <select className="form-select rounded-0"></select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">State/Province</label>
                        <select className="form-select rounded-0"></select>
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Zip/Postal Code</label>
                        <input
                          type="email"
                          className="form-control rounded-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                    <div className="card-body">
                      <p className="mb-2">
                        Subtotal: <span className="float-end">$198.00</span>
                      </p>
                      <p className="mb-2">
                        Shipping: <span className="float-end">--</span>
                      </p>
                      <p className="mb-2">
                        Taxes: <span className="float-end">$14.00</span>
                      </p>
                      <p className="mb-0">
                        Discount: <span className="float-end">--</span>
                      </p>
                      <div className="my-3 border-top" />
                      <h5 className="mb-0">
                        Order Total: <span className="float-end">212.00</span>
                      </h5>
                      <div className="my-4" />
                      <div className="d-grid">
                        {" "}
                        <a
                          href="#"
                          className="btn btn-dark rounded-0 btn-ecomm"
                        >
                          Proceed to Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/*end row*/}
        </div>
      </div>
    </>
  );
}

export default CartList;
