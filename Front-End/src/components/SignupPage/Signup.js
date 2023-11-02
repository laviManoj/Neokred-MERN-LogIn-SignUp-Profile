import React, { useState } from "react";
import "./Signup.css";
import img from "../../assests/neokred.jpg";
import logo from "../../assests/Logo.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    phone: "",
    question: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors = {};

    // Validation checks for each field
    if (!formData.firstname.match(/^[a-zA-Z ]+$/)) {
      newErrors.firstname =
        "First name should contain alphabetic characters only";
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Invalid email format";
    }

    if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/\d/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters and contain at least one uppercase letter and one digit";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.match(/^[a-zA-Z ]+$/)) {
      newErrors.city = "City should contain alphabetic characters only";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.zipcode.match(/^\d{6}$/)) {
      newErrors.zipcode = "Invalid zip code format";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const data = {
        dateofbirth: formData.dob,
        Zipcode: formData.zipcode,
        firstname: formData.firstname,
        email: formData.email,
        password: formData.password,
        confirm: formData.confirmPassword,
        phone: formData.phone,
        question: formData.question,
        dob: formData.dob,
        country: formData.country,
        city: formData.city,
        address: formData.address,
        state: formData.state,
      };

      axios
        .post("http://localhost:5000/api/register", data)
        .then((response) => {
          console.log("Form data sent successfully:", response.data);
          window.alert(response.data.message);
          localStorage.setItem("token", response.data.token);

          navigate('/Profile');
        })
        .catch((error) => {
          console.error("Error sending form data:", error);
        });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image-container">
        <img src={img} alt="signup-Image" />
        <img src={logo} alt="signup-Image2" className="signup-page-logo" />
      </div>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Welcome</p>
          <p className="signup-btn">Sign Up</p>

          <div className="flex">
            <label>
              <span>Firstname:</span>
              <input
                required
                placeholder="First Name"
                type="text"
                className="input"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              {errors.firstname && <p className="error">{errors.firstname}</p>}
            </label>
            <label>
              <span>Email:</span>
              <input
                required
                placeholder="Enter your Email"
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Password:</span>
              <input
                required
                placeholder="Enter your Password"
                type="password"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </label>
            <label>
              <span>Confirm password:</span>
              <input
                required
                placeholder="Re-Enter your Password"
                type="password"
                className="input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Date of Birth:</span>
              <input
                required
                placeholder="06/12/2023"
                type="date"
                className="input"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              {errors.dob && <p className="error">{errors.dob}</p>}
            </label>
            <label>
              <span>Phone Number:</span>
              <input
                required
                placeholder="+91 9988552266"
                type="text"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Security Question:</span>
              <h6>What is your School name?</h6>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="flex">
            <label>
              <h6>Address</h6>
              <input
                required
                placeholder="********"
                type="text"
                className="input"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </label>
          </div>

          <div className="flex">
            <label>
              <h6>City</h6>
              <input
                required
                placeholder="********"
                type="text"
                className="input"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </label>
            <label>
              <h6>State</h6>
              <input
                required
                placeholder="********"
                type="text"
                className="input"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              {errors.state && <p className="error">{errors.state}</p>}
            </label>
          </div>

          <div className="flex">
            <label>
              <h6>Zip Code</h6>
              <input
                required
                placeholder="********"
                type="text"
                className="input"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              {errors.zipcode && <p className="error">{errors.zipcode}</p>}
            </label>
            <label>
              <h6>Country</h6>
              <input
                required
                placeholder="********"
                type="text"
                className="input"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
              {errors.country && <p className="error">{errors.country}</p>}
            </label>
          </div>

          <button className="submit" type="submit">
            Sign Up
          </button>
          <p className="signin">
            Already have an account?{" "}
            <button className="sign-up" >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
