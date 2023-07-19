function CheckoutComplete() {
  return (
    <>
      <div className="container">
        <div className="card py-3 mt-sm-3">
          <div className="card-body text-center">
            <h2 className="h4 pb-3">Thank you for your order!</h2>
            <p className="fs-sm mb-2">
              Your order has been placed and will be processed as soon as
              possible.
            </p>
            <p className="fs-sm mb-2">
              Make sure you make note of your order number, which is{" "}
              <span className="fw-medium">34VB5540K83.</span>
            </p>
            <p className="fs-sm">
              You will be receiving an email shortly with confirmation of your
              order. <u>You can now:</u>
            </p>
            <a
              className="btn btn-light rounded-0 mt-3 me-3"
              href="{{ url('/') }}"
            >
              Go back shopping
            </a>
            <a
              className="btn btn-white rounded-0 mt-3"
              href="{{ route('order-tracking') }}"
            >
              <i className="bx bx-map" />
              Track order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutComplete;
