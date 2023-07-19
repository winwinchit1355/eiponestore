import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Tokens } from "../../consts";
import { fetchOrders } from "../../store/actions";

function OrderList() {
  const dispatch = useDispatch();
  const token = localStorage.getItem(Tokens.CUSTOMER);
  const {orders} = useSelector((state)=>state.orders);
  const handleViewOrder=()=>{
    console.log('handlevieworder');
  }
  useEffect(()=>{
    if(token)
    {
      dispatch(fetchOrders());
    }
  },[])
  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow-none mb-0 rounded-0">
              <div className="card-body ">
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
                      {orders?.data.map((order,index)=>(
                        <tr key={index}>
                        <td>{order.invoice_no}</td>
                        <td>{order.invoiceDate}</td>
                        <td>
                          <div className="badge rounded-pill bg-warning w-100" style={{textTransform:'capitalize'}}>
                            {order.order_status}
                          </div>
                        </td>
                        <td>{order.amount} MMK for {order.total_products} item(s)</td>
                        <td>
                          <div className="d-flex gap-2">
                            {" "}
                            <a
                              onClick={handleViewOrder}
                              className="btn btn-dark btn-sm rounded-0"
                            >
                              View
                            </a>
                          </div>
                        </td>
                      </tr>
                      ))}
                      
                      
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
