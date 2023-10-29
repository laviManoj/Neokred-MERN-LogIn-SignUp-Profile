import React, { useState } from "react";
// import React from 'react';
import "./Signup.css";
import img from "./neolard.jpg";
import logo from "./Logo1.png";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

function RegistrationForm({ redirectToLoginPage,navigateToProfile }) {
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
    state:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create an object with the form data

    const data = {
      dateofbirth: formData.dateofbirth,
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
      state: formData.state
      // Add other form fields here
    };

    // Make a POST request to your backend API endpoint
    axios
      .post("http://localhost:5000/api/register", data)
      .then((response) => {
        // Handle the success response from the server
        console.log("Form data sent successfully:", response.data);
        window.alert(response.data.message)
        localStorage.setItem('token', response.data.token);

        navigateToProfile();
        // navigate('/profile');
      })
      .catch((error) => {
        // Handle errors here, such as network issues or server errors
        console.error("Error sending form data:", error);
      });
  };
  return (
    <div className="signup-container">
      <div className="signup-image-container">
        {/* Your image goes here */}
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
            </label>
          </div>
          <div className="flex">
            <label>
              <span>Date fo Birth:</span>
              <input
                required
                placeholder="06/12/2023"
                type="date"
                className="input"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
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
            </label>
          </div>

          <button className="submit" type="submit">
            Sign Up
          </button>
          <p className="signin">
            Already have an account?{" "}
            <button className="sign-up" onClick={() => redirectToLoginPage()}>
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
