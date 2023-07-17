import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "../../consts";

// toast.configure()

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const { count  } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (response) => {
    dispatch(login(response)).then(() => {
      navigate(routes.HOME);
    });
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 my-4">
          <Card style={{ width: "28rem", margin: "auto" }}>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    autoComplete="email"
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    autoComplete="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="login-button text-center"
                    type="submit"
                  >
                    Login
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

export default Login;
