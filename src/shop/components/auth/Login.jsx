import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { Tokens, routes } from "../../consts";
// import {toast} from 'react-toastify';
 
// // Import toastify css file
// import 'react-toastify/dist/ReactToastify.css';


// toast.configure()

function Login() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const { auth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const onSubmit = (response) =>{
        const email=response.email;
        const password=response.password;
        dispatch(
            login(response)
        ).then(()=>{
            // toast.success('Login successful', 'Success');
            // navigate(routes.HOME);
        })
        
    }
    
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 mt-4">
          <Card style={{ width: "28rem", margin: "auto" }}>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" {...register("email",{required:true})} />
                  {errors.email && <span className="text-danger">This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                  {errors.password && <span className="text-danger">This field is required</span>}
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button variant="primary" className="login-button text-center" type="submit" >
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
