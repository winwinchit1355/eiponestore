import ReactLoading from "react-loading";
function LoadingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="m-auto">
        <ReactLoading type="bubbles" color="#8c8c99" height={100} width={50} />
      </div>
    </div>
  );
}

export default LoadingPage;
