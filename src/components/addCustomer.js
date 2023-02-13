import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { token } from "../hooks/useToken";
import Navbar from "./navbar";

//   const navigate = useNavigate();
//   navigate("/addAccount");
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const AddCustomer = () => {
  const navigate = useNavigate();
  const onSuccess = (values) => {
    console.log(".........", values);
    toast.success("Customer Created Successfully");
    navigate("/addAccount/" + values.data.id); //remaining
  };
  const onError = () => {
    console.log("Loading");
    toast.error("Something went wrong");
  };

  const createEvent = async (users) => {
    const token = localStorage.getItem("authToken");
    console.log(token, "token");
    return await axios
      .post("http://localhost:3000/users", users, {
        headers: { Authorization: token },
      })
      .then((res) => res.data);
  };

  const { mutate, data, isLoading } = useMutation(createEvent, {
    onSuccess,
    onError,
  });

  const onsubmit = async (values) => {
    const users = {
      user: values,
    };

    mutate(users);
  };

  const navbarContent = {
    person: "Admin",
  };

  return (
    <>
      <Navbar navbarContent={navbarContent} />
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onsubmit}
      >
        {({ values, errors, touched }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <Form>
                <span>Add New Customer</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Add</button>
              </Form>
              {/* <p>Need an Account?</p>
              put router link here
              <a href="#">Sign Up</a> */}
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default AddCustomer;
