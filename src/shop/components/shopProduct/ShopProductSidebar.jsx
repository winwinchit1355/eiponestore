import { Nav } from "react-bootstrap";

function ShopProductSidebar() {
  return (
    <nav className="navbar navbar-expand-xl flex-wrap p-0">
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbarFilter"
        aria-labelledby="offcanvasNavbarFilterLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title mb-0 fw-bold"
            id="offcanvasNavbarFilterLabel"
          >
            Filters
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="filter-sidebar">
            <div className="card rounded-0 shadow-none border">
              <div className="card-header d-none d-xl-block bg-transparent">
                <h5 className="mb-0 fw-bold">Filters</h5>
              </div>
              <div className="card-body">
                <h6 className="p-1 fw-bold bg-light">Categories</h6>
                <div className="categories">
                  <div className="categories-wrapper height-1 p-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate1"
                      />
                      <label className="form-check-label" htmlFor="chekCate1">
                        <span>Shirts</span>
                        <span className="product-number">(1548)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate2"
                      />
                      <label className="form-check-label" htmlFor="chekCate2">
                        <span>Jeans</span>
                        <span className="product-number">(568)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate3"
                      />
                      <label className="form-check-label" htmlFor="chekCate3">
                        <span>Kurtas</span>
                        <span className="product-number">(784)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate4"
                      />
                      <label className="form-check-label" htmlFor="chekCate4">
                        <span>Makeup</span>
                        <span className="product-number">(1789)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate5"
                      />
                      <label className="form-check-label" htmlFor="chekCate5">
                        <span>Shoes</span>
                        <span className="product-number">(358)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate6"
                      />
                      <label className="form-check-label" htmlFor="chekCate6">
                        <span>Heels</span>
                        <span className="product-number">(572)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate7"
                      />
                      <label className="form-check-label" htmlFor="chekCate7">
                        <span>Lehenga</span>
                        <span className="product-number">(754)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate8"
                      />
                      <label className="form-check-label" htmlFor="chekCate8">
                        <span>Laptops</span>
                        <span className="product-number">(541)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate9"
                      />
                      <label className="form-check-label" htmlFor="chekCate9">
                        <span>Jewellary</span>
                        <span className="product-number">(365)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate10"
                      />
                      <label className="form-check-label" htmlFor="chekCate10">
                        <span>Sports</span>
                        <span className="product-number">(4512)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate11"
                      />
                      <label className="form-check-label" htmlFor="chekCate11">
                        <span>Music</span>
                        <span className="product-number">(647)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate12"
                      />
                      <label className="form-check-label" htmlFor="chekCate12">
                        <span>Headphones</span>
                        <span className="product-number">(9848)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate13"
                      />
                      <label className="form-check-label" htmlFor="chekCate13">
                        <span>Sunglasses</span>
                        <span className="product-number">(751)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekCate14"
                      />
                      <label className="form-check-label" htmlFor="chekCate14">
                        <span>Belts</span>
                        <span className="product-number">(4923)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="brands">
                  <h6 className="p-1 fw-bold bg-light">Brands</h6>
                  <div className="brands-wrapper height-1 p-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand1"
                      />
                      <label className="form-check-label" htmlFor="chekBrand1">
                        <span>Samsung</span>
                        <span className="product-number">(1548)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand2"
                      />
                      <label className="form-check-label" htmlFor="chekBrand2">
                        <span>Sony</span>
                        <span className="product-number">(478)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand3"
                      />
                      <label className="form-check-label" htmlFor="chekBrand3">
                        <span>Microsoft</span>
                        <span className="product-number">(689)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand4"
                      />
                      <label className="form-check-label" htmlFor="chekBrand4">
                        <span>Reebok</span>
                        <span className="product-number">(987)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand5"
                      />
                      <label className="form-check-label" htmlFor="chekBrand5">
                        <span>Adidas</span>
                        <span className="product-number">(358)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand6"
                      />
                      <label className="form-check-label" htmlFor="chekBrand6">
                        <span>Puma</span>
                        <span className="product-number">(5682)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand7"
                      />
                      <label className="form-check-label" htmlFor="chekBrand7">
                        <span>Ajio</span>
                        <span className="product-number">(5712)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand8"
                      />
                      <label className="form-check-label" htmlFor="chekBrand8">
                        <span>Motorola</span>
                        <span className="product-number">(657)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand9"
                      />
                      <label className="form-check-label" htmlFor="chekBrand9">
                        <span>amazon</span>
                        <span className="product-number">(984)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand10"
                      />
                      <label className="form-check-label" htmlFor="chekBrand10">
                        <span>Canon</span>
                        <span className="product-number">(524)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand11"
                      />
                      <label className="form-check-label" htmlFor="chekBrand11">
                        <span>Apple</span>
                        <span className="product-number">(168)</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="chekBrand12"
                      />
                      <label className="form-check-label" htmlFor="chekBrand12">
                        <span>Philips</span>
                        <span className="product-number">(279)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="Price">
                  <h6 className="p-1 fw-bold bg-light">Price</h6>
                  <div className="Price-wrapper p-1">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="$10"
                      />
                      <span className="input-group-text bg-section-1 border-0">
                        -
                      </span>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="$10000"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-dark rounded-0 ms-2"
                      >
                        <i className="bx bx-chevron-right me-0" />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                
                <div className="discount">
                  <h6 className="p-1 fw-bold bg-light">Discount Range</h6>
                  <div className="discount-wrapper p-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option1"
                        id="chekDisc1"
                      />
                      <label className="form-check-label" htmlFor="chekDisc1">
                        10% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option2"
                        id="chekDisc2"
                      />
                      <label className="form-check-label" htmlFor="chekDisc2">
                        20% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option3"
                        id="chekDisc3"
                      />
                      <label className="form-check-label" htmlFor="chekDisc3">
                        30% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option4"
                        id="chekDisc4"
                      />
                      <label className="form-check-label" htmlFor="chekDisc4">
                        40% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option5"
                        id="chekDisc5"
                      />
                      <label className="form-check-label" htmlFor="chekDisc5">
                        50% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option6"
                        id="chekDisc6"
                      />
                      <label className="form-check-label" htmlFor="chekDisc6">
                        60% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option7"
                        id="chekDisc7"
                      />
                      <label className="form-check-label" htmlFor="chekDisc7">
                        70% and Above
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="exampleRadios"
                        type="radio"
                        defaultValue="option8"
                        id="chekDisc8"
                      />
                      <label className="form-check-label" htmlFor="chekDisc8">
                        80% and Above
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ShopProductSidebar;
