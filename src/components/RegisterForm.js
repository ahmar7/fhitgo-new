import React, { useState } from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Validation

    let validationErrors = {};
    validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Passwords do not match";
      setTimeout(() => {
        validationErrors.confirmPassword = "";
      }, 2000);
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // API call
    try {
      const response = await axios.post(
        "https://9qe70xgeab.execute-api.us-east-2.amazonaws.com/MySignUpFunction",
        {
          body: JSON.stringify(formData),
        }
      );

      // Handle the response
      console.log(response.data);

      if (response.data.message === "User signed up successfully") {
        // Redirect the user to another page (replace '/path' with your desired path)
        window.location.replace("/home");
      } else {
        // Show an error message
        console.error("User registration failed");
        setErrorMessage("Registration failed. Please try again."); // Set error message state
      }
    } catch (error) {
      // Handle error, maybe show an error message
      console.error("API Error:", error);
      setErrorMessage("An error occurred. Please try again later."); // Set error message state
    }
  };
  return (
    <div id="micro_register" className="container my-4 reg-f">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <h3 className="title text-center mb-4">Account Registration</h3>
          <form noValidate className="dcxa-form">
            {/* First Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="firstName">First Name*</label>
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            {/* Last Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="lastName">Last Name*</label>
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
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
            {/* Confirm Password */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="confirmPassword">Confirm Password*</label>
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>{" "}
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
                id="btn_register"
                name="btn_register"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>

          <div className="callouts text-center mt-3">
            <div className="callout-row">
              Already have an account?{" "}
              <Link to="/login" className="text-link text-bl" target="_self">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
