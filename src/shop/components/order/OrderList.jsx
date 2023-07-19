function OrderList() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-none mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#800</td>
                        <td>Novermber 15, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-success w-100">
                            Completed
                          </div>
                        </td>
                        <td>$100.00 for 1 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#796</td>
                        <td>Novermber 12, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-danger w-100">
                            Failed
                          </div>
                        </td>
                        <td>$100.00 for 1 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Pay
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#859</td>
                        <td>Novermber 10, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-danger w-100">
                            Failed
                          </div>
                        </td>
                        <td>$100.00 for 1 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Pay
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Cancel
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#869</td>
                        <td>Novermber 9, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-danger w-100">
                            Cancelled
                          </div>
                        </td>
                        <td>$120.00 for 1 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Pay
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#829</td>
                        <td>Novermber 8, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-success w-100">
                            Completed
                          </div>
                        </td>
                        <td>$224.00 for 2 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#879</td>
                        <td>Novermber 8, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-success w-100">
                            Completed
                          </div>
                        </td>
                        <td>$126.00 for 3 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#863</td>
                        <td>Novermber 4, 2021</td>
                        <td>
                          <div className="badge rounded-pill bg-danger w-100">
                            Failed
                          </div>
                        </td>
                        <td>$200.00 for 2 item</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Pay
                            </a>
                            <a
                              href="javascript:;"
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              Cancel
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
