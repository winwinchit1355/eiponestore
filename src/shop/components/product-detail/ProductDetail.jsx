import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetail,addToCart } from "../../store/actions";
import { Tokens, apiBaseUrls } from "../../consts";
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const { slug } = useParams();
  const params = "/" + slug;
  const { productDetail } = useSelector((state) => state.productDetail);
  const product= productDetail?.data;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetail(params));
  }, []);
  const handleDecrease = () => {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity -= 1;
    }
    quantityInput.value = quantity;
  };

  const handleIncrease = () => {
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    if(product?.quantity>quantity){
      quantity += 1;
    }
    quantityInput.value = quantity;
  };
  const handleInputChange = (event) => {
    if (event.target.value < 1) {
      const quantityInput = document.getElementById("quantity");
      quantityInput.value = 1;
    }
  };
  const handleAddToCart = () =>{
    const token=localStorage.getItem(Tokens.CUSTOMER);
    if(!token)
    {
      navigate(apiBaseUrls.LOGIN);
    }
    const quantityInput = document.getElementById("quantity");
    let quantity = parseInt(quantityInput.value);
    const params = `?id=${product?.uuid}&quantity=${quantity}`;
    dispatch(addToCart(params)); 
  }
  return (
    <main className="mt-3">   

      <div className="container margin_30">
        <div className="countdown_inner">
          -20% This offer ends in{" "}
          <div data-countdown="2019/05/15" className="countdown" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              <div>
                <img src="../../../../public/assets/images/1.jpg" />
              </div>
              <div>
                <img src="../../../../public/assets/images/2.jpg" />
              </div>
              <div>
                <img src="../../../../public/assets/images/3.jpg" />
              </div>
            </Carousel>
          </div>
          <div className="col-md-6">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
            {/* /page_header */}
            <div className="prod_info">
              <h1>{product?.name}</h1>
              <span className="rating">
                <i className="fa-regular fa-star text-warning" />
                <i className="fa-regular fa-star text-warning" />
                <i className="fa-regular fa-star text-warning" />
                <i className="fa-regular fa-star text-warning" />
                <i className="fa-regular fa-star" />
                <em>4 reviews</em>
              </span>
              <p>
                <small>SKU: {product?.SKU}</small>
                <br />
                {product?.desc}
              </p>
              <div className="prod_options">
                <div className="row">
                  <label className="col-xl-5 col-lg-5  col-md-6 col-6">
                    <strong>Quantity</strong>
                  </label>
                  <div className="col-xl-4 col-lg-5 col-md-6 col-6">
                    <div className="numbers-row d-flex align-items-center">
                      <button
                        type="button"
                        className="qty-button"
                        onClick={handleDecrease}
                      >
                        <i className="fa fa-solid fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        defaultValue={1}
                        id="quantity"
                        className="qty2 form-control mx-2"
                        name="quantity"
                        onChange={handleInputChange}
                      />
                      <button
                        type="button"
                        className="qty-button"
                        onClick={handleIncrease}
                      >
                        <i className="fa fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <span className="text-muted">{product?.quantity} item(s) left.</span>
                    </div>    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="price_main">
                  {product?.discount_price != 0 ? (
                      <>
                        <div className="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                          {product?.price} MMK
                        </div>
                        <div className="h6 fw-bold">
                          {product?.discount_price} MMK
                        </div>
                      </>
                    ) : (
                      <div className="h6 fw-bold">{product?.price} MMK</div>
                    )}
                    {/* <span className="new_price">$148.00</span>
                    <span className="percentage">-20%</span>{" "}
                    <span className="old_price">$160.00</span> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="btn_add_to_cart">
                    <a onClick={handleAddToCart} className="btn btn-dark btn-ecommerce">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /prod_info */}
            <div className="product_actions">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-regular fa-heart"></i>
                    <span>Add to Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-light fa-shuffle"></i>
                    <span>Add to Compare</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* /product_actions */}
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
      <div className="tabs_product">
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item ">
              <a
                id="tab-A"
                href="#pane-A"
                className="nav-link active"
                data-bs-toggle="tab"
                role="tab"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                id="tab-B"
                href="#pane-B"
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* /tabs_product */}
      <div className="tab_content_wrapper">
        <div className="container">
          <div className="tab-content" role="tablist">
            <div
              id="pane-A"
              className="card tab-pane fade active show"
              role="tabpanel"
              aria-labelledby="tab-A"
            >
              <div className="card-header" role="tab" id="heading-A">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-bs-toggle="collapse"
                    href="#collapse-A"
                    aria-expanded="false"
                    aria-controls="collapse-A"
                  >
                    Description
                  </a>
                </h5>
              </div>
              <div
                id="collapse-A"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading-A"
              >
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <h3>Details</h3>
                      <p>
                        Lorem ipsum dolor sit amet, in eleifend{" "}
                        <strong>inimicus elaboraret</strong> his, harum
                        efficiendi mel ne. Sale percipit vituperata ex mel, sea
                        ne essent aeterno sanctus, nam ea laoreet civibus
                        electram. Ea vis eius explicari. Quot iuvaret ad has.
                      </p>
                      <p>
                        Vis ei ipsum conclusionemque. Te enim suscipit recusabo
                        mea, ne vis mazim aliquando, everti insolens at sit. Cu
                        vel modo unum quaestio, in vide dicta has. Ut his laudem
                        explicari adversarium, nisl{" "}
                        <strong>laboramus hendrerit</strong> te his, alia
                        lobortis vis ea.
                      </p>
                      <p>
                        Perfecto eleifend sea no, cu audire voluptatibus eam. An
                        alii praesent sit, nobis numquam principes ea eos, cu
                        autem constituto suscipiantur eam. Ex graeci elaboraret
                        pro. Mei te omnis tantas, nobis viderer vivendo ex has.
                      </p>
                    </div>
                    <div className="col-lg-5">
                      <h3>Specifications</h3>
                      <div className="table-responsive">
                        <table className="table table-sm table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Color</strong>
                              </td>
                              <td>Blue, Purple</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Size</strong>
                              </td>
                              <td>150x100x100</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Weight</strong>
                              </td>
                              <td>0.6kg</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Manifacturer</strong>
                              </td>
                              <td>Manifacturer</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /table-responsive */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /TAB A */}
            <div
              id="pane-B"
              className="card tab-pane fade"
              role="tabpanel"
              aria-labelledby="tab-B"
            >
              <div className="card-header" role="tab" id="heading-B">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    data-bs-toggle="collapse"
                    href="#collapse-B"
                    aria-expanded="false"
                    aria-controls="collapse-B"
                  >
                    Reviews
                  </a>
                </h5>
              </div>
              <div
                id="collapse-B"
                className="collapse"
                role="tabpanel"
                aria-labelledby="heading-B"
              >
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="review_content">
                        <div className="clearfix add_bottom_10">
                          <span className="rating">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <em>5.0/5.0</em>
                          </span>
                          <em>Published 54 minutes ago</em>
                        </div>
                        <h4>"Commpletely satisfied"</h4>
                        <p>
                          Eos tollit ancillae ea, lorem consulatu qui ne, eu
                          eros eirmod scaevola sea. Et nec tantas accusamus
                          salutatus, sit commodo veritus te, erat legere fabulas
                          has ut. Rebum laudem cum ea, ius essent fuisset ut.
                          Viderer petentium cu his.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_content">
                        <div className="clearfix add_bottom_10">
                          <span className="rating">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star empty" />
                            <i className="icon-star empty" />
                            <em>4.0/5.0</em>
                          </span>
                          <em>Published 1 day ago</em>
                        </div>
                        <h4>"Always the best"</h4>
                        <p>
                          Et nec tantas accusamus salutatus, sit commodo veritus
                          te, erat legere fabulas has ut. Rebum laudem cum ea,
                          ius essent fuisset ut. Viderer petentium cu his.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="review_content">
                        <div className="clearfix add_bottom_10">
                          <span className="rating">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star empty" />
                            <em>4.5/5.0</em>
                          </span>
                          <em>Published 3 days ago</em>
                        </div>
                        <h4>"Outstanding"</h4>
                        <p>
                          Eos tollit ancillae ea, lorem consulatu qui ne, eu
                          eros eirmod scaevola sea. Et nec tantas accusamus
                          salutatus, sit commodo veritus te, erat legere fabulas
                          has ut. Rebum laudem cum ea, ius essent fuisset ut.
                          Viderer petentium cu his.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="review_content">
                        <div className="clearfix add_bottom_10">
                          <span className="rating">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <em>5.0/5.0</em>
                          </span>
                          <em>Published 4 days ago</em>
                        </div>
                        <h4>"Excellent"</h4>
                        <p>
                          Sit commodo veritus te, erat legere fabulas has ut.
                          Rebum laudem cum ea, ius essent fuisset ut. Viderer
                          petentium cu his.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <p className="text-end">
                    <a href="leave-review.html" className="btn_1">
                      Leave a review
                    </a>
                  </p>
                </div>
                {/* /card-body */}
              </div>
            </div>
            {/* /tab B */}
          </div>
          {/* /tab-content */}
        </div>
        {/* /container */}
      </div>
      
    </main>
  );
}

export default ProductDetail;
