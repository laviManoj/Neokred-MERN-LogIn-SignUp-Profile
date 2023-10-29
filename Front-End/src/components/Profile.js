import React, { useState, useEffect } from "react";
import "./Profile.css";
import logo from "./Logo1.png";
import manoj from "./Manoj.png";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

function Profile({ handleLogout }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate(); // Use navigate to redirect

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/profileinfo"; // Replace with your API endpoint

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    handleLogout(); // Logout the user
    // navigate('/login'); // Redirect to the login page
  }

  return (
    <div>
      <div className="container">
        <img src={logo} alt="" className="profile-image" />
        <div className="profile-info-name">
          <span className="profile-info">{data.firstname}</span>
          <br />
          <h5 className="admin-name">Admin</h5>
        </div>
      </div>
      <button onClick={handleLogoutClick} className="logout-button">Logout</button>
      <div class="custom-box">
        <img className="custom-image" src={manoj} alt="" />
      </div>
      <div className="profile-container">
        <form className="form">
          <h1>Profile</h1>
          <div className="flex">
            Firstname:
            <label>
              {data.firstname}
            </label>
          </div>
          <div className="flex">
            Email:
            <label>
              {data.email}
            </label>
          </div>
          <div className="flex">
            Date of Birth:
            <label>
              {data.dob}
            </label>
          </div>
          <div className="flex">
            Phone Number:
            <label>
              {data.phone}
            </label>
          </div>
          <div className="flex">
            Address:
            <label>
              {data.address}
            </label>
          </div>
          <div className="flex">
            City:
            <label>
              {data.city}
            </label>
          </div>
          <div className="flex">
            State:
            <label>
              {data.state}
            </label>
          </div>
          <div className="flex">
            Zip Code:
            <label>
              {data.Zipcode}
            </label>
          </div>
          <div className="flex">
            Country:
            <label>
              {data.country}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
