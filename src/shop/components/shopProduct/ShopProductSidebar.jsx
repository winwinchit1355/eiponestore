import { Nav } from "react-bootstrap";

function ShopProductSidebar() {
  return (
    <>
      <div className="filter_col">
        <div className="inner_bt">
          <a href="#" className="open_filters">
            <i className="ti-close" />
          </a>
        </div>
        <div className="filter_type version_2">
          <h4>
            <a
              href="#filter_1"
              data-bs-toggle="collapse"
              className="opened no-underline"
            >
              Categories
            </a>
          </h4>
          <div className="collapse show" id="filter_1">
            <ul>
              <li>
                <label className="container_check">
                  Men <small>12</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Women <small>24</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Running <small>23</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Training <small>11</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
          {/* /filter_type */}
        </div>
        {/* /filter_type */}
        <div className="filter_type version_2">
          <h4>
            <a
              href="#filter_2"
              data-bs-toggle="collapse"
              className="opened no-underline"
            >
              Color
            </a>
          </h4>
          <div className="collapse show" id="filter_2">
            <ul>
              <li>
                <label className="container_check">
                  Blue <small>06</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Red <small>12</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Orange <small>17</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Black <small>43</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* /filter_type */}
        <div className="filter_type version_2">
          <h4>
            <a
              href="#filter_3"
              data-bs-toggle="collapse"
              className="closed no-underline"
            >
              Brands
            </a>
          </h4>
          <div className="collapse" id="filter_3">
            <ul>
              <li>
                <label className="container_check">
                  Adidas <small>11</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Nike <small>08</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Vans <small>05</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  Puma <small>18</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* /filter_type */}
        <div className="filter_type version_2">
          <h4>
            <a
              href="#filter_4"
              data-bs-toggle="collapse"
              className="closed no-underline"
            >
              Price
            </a>
          </h4>
          <div className="collapse" id="filter_4">
            <ul>
              <li>
                <label className="container_check">
                  $0 — $50<small>11</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  $50 — $100<small>08</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  $100 — $150<small>05</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
              <li>
                <label className="container_check">
                  $150 — $200<small>18</small>
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* /filter_type */}
        <div className="buttons">
          <a href="#0" className="btn_1">
            Filter
          </a>{" "}
          <a href="#0" className="btn_1 gray">
            Reset
          </a>
        </div>
      </div>
    </>
  );
}

export default ShopProductSidebar;
