import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { USER_ROLES } from "../constant";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const LOGIN_URL = "/login";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const onsubmit = async (values) => {
    const users = {
      user: values,
    };
    console.log(users);

    try {
      const response = await axiosInstance.post(LOGIN_URL, users, {
        //headers: { Authorization: accessToken },
      });

      const accessToken = await response?.headers?.authorization;

      await localStorage.setItem("authToken", accessToken);

      const role_id = response?.data?.data?.role_id;
      const customer_id = response?.data?.data?.id;

      if (role_id === USER_ROLES.ADMIN) {
        // navigate to admin dashboard
        toast.success(" Admin Logged in Successfully");
        navigate("/admin");
      } else {
        // navigate to customer dashboard
        toast.success(" Customer Logged in Successfully");
        navigate(`/customerDashboard/${customer_id}`);
      }
    } catch (error) {
      if (!error?.response) {
        console.log("no server response");
      } else if (error.response?.status === 400) {
        console.log("missing username and password 400 error");
      } else if (error.response?.status === 401) {
        console.log("unauthorized 401 error");
      } else {
        console.log("login failed");
      }
    }
  };

  return (
    <>
      <Header />
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
                <span>Login</span>
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
                <button type="submit">Login</button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </>
  );
};

export default Login;
