import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { apiBaseUrls } from "../../consts";
import { register as registerMethod } from "../../store/actions/authActions";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const { count  } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (response) => {
    dispatch(registerMethod(response)).then(() => {
      navigate(`${apiBaseUrls.LOGIN}?email=${response.email}`);
    });
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 my-4">
          <Card style={{ width: "48rem", margin: "auto" }}>
            <Card.Body>
              <Card.Title className="text-center">Register</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-6">
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>
                        Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="name"
                        type="text"
                        placeholder="Enter name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>
                        Phone <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="phone"
                        type="text"
                        placeholder="Enter phone"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Email address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="email"
                        type="email"
                        placeholder="Enter email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>
                        Password <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="password"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                </div>
                {/* end row  */}
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                      <Form.Label>
                        Address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        autoComplete="address"
                        type="text"
                        placeholder="Address"
                        {...register("address", { required: true })}
                      />
                      {errors.address && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                </div>
                {/* end row  */}
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="login-button text-center"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Register;
