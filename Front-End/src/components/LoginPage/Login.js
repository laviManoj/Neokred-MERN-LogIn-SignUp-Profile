import React, { useState } from 'react';
import './Login.css';
import img from './neolard.jpg';
import logo from './Logo1.png';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


function Login({ redirectToSignupPage, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      if (response.data.success) {
        // Login successful
        console.log('Login successful:', response.data);
        window.alert(response.data.message);
        localStorage.setItem('token', response.data.token);
        onLoginSuccess();
        // navigate('/profile');
        // Redirect to the profile page using your routing mechanism
      } else {
        // Login failed (user not found or incorrect password)
        console.error('Login failed:', response.data.message);
        window.alert(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred during login');
    }
  };
  

  return (
    <div className="app-container">
      <div className="image-container">
        <img src={img} alt="Image" />
        <img src={logo} alt="Image2" className="logo" />
      </div>
      <div className="login-container">
        <div className="max-w-md mx-auto p-4 rounded-md text-black bg-white">
          <div className="wel-come">Welcome</div>
          <div className="log-in">Login</div>
          <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
            <div className="block relative">
              <label className="email-label">
                Email<span className="start">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                required
              />
            </div>
            <div className="block relative">
              <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                Password<span className="start">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div>
              <a className="forgot-pswd" href="#">
                Forgot password?
              </a>
            </div>
            <button type="submit" on className="log-in-btn">
              Login
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Don’t have an account?{' '}
            <button className="sign-up" onClick={() => redirectToSignupPage()}>
              Sign up!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
