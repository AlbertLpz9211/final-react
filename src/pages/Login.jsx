import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLoadingScreen } from "../store/slices/isLoadingScreen.slice";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    axios
      .post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
      .then((res) => {
        alert("bienvenido" + " " + data.email);
        console.log(res.data.data.token);
        navigate("/");
        localStorage.setItem("token", res.data.data.token); // res.data.data.token
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          // 404
          alert("Credenciales incorrectas");
        } else {
          console.log(error.response?.data);
        }
      });
  };

  useEffect(() => {
    dispatch(setIsLoadingScreen(false));
  }, [submit]);

  return (
    <div>
      <Form
        onSubmit={handleSubmit(submit)}
        style={{ maxWidth: 500, margin: "0 auto" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
