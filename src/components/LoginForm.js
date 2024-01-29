import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation errors for the current field
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async () => {
    // Validation
    let validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // API login call
    try {
      const response = await axios.post(
        "https://5ia8grb2b9.execute-api.us-east-2.amazonaws.com/MyLoginFunction",
        {
          body: JSON.stringify(formData),
        }
      );

      // Handle the response
      console.log(response.data);

      if (response.data.message === "Login successful") {
        // Redirect the user to another page (replace '/path' with your desired path)
        window.location.replace("/path");
      } else {
        // Show an error message
        console.error("Login failed");
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle error, maybe show an error message
      console.error("API Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="micro_login" className="container my-4 reg-f">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <h3 className="title text-center mb-4">Login</h3>
          <form noValidate className="dcxa-form">
            {/* Email Address */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="email">Email Address*</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            {/* Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="password">Password*</label>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            {/* Error Message */}
            {errorMessage && (
              <div className="alert alert-danger mt-3" role="alert">
                {errorMessage}
              </div>
            )}
            {/* Submit Button */}
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                id="btn_login"
                name="btn_login"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>

          <div className="callouts text-center mt-3">
            <div className="callout-row">
              Don't have an account?{" "}
              <Link to="/register" className="text-link text-bl" target="_self">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
