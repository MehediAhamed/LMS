import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { registerUser } from "../../actions/user_action";
import "./Register.css";

const signInSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name should be 3 characters minimum")
    .max(15, "Name should be 15 characters maximum"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be 4 characters minimum"),
  user_id: Yup.string().required("User ID is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  user_id: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-12 register-container">
      <div className="col-md-5 m-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(registerUser(values));
            resetForm();
          }}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <div className="container">
                <div style={{ marginLeft: "50%", transform: "translateX(-50%)", marginBottom: "20px" }}>
                  <div id="circle"></div>
                  <h1 style={{ color: "black", marginLeft: "44px", marginTop: "-70px", fontSize: "45px" }}>LMS</h1>
                </div>
                <p style={{ color: "black", fontWeight: "800", textAlign: "center" }}>Welcome to Library Management System</p>

                <Form>
                  <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={errors.name && touched.name ? "input-error" : null}
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={errors.email && touched.email ? "input-error" : null}
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={errors.password && touched.password ? "input-error" : null}
                    />
                    <ErrorMessage name="password" component="span" className="error" />
                  </div>

                  <div className="form-row">
                    <label htmlFor="user_id">User ID </label>
                    <Field
                      type="text"
                      name="user_id"
                      id="user_id"
                      className={errors.user_id && touched.user_id ? "input-error" : null}
                    />
                    <ErrorMessage name="user_id" component="span" className="error" />
                  </div>

                  <button
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Sign Up
                  </button>
                </Form>
                <center>
                <div style={{ marginTop: "10px" }}>
                  <Link to="/login" style={{ fontFamily: "sans-serif", color: "Red", textDecoration: "none", fontSize: "20px" }}>
                    If you have an account, please login</Link>
                </div>
                </center>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
