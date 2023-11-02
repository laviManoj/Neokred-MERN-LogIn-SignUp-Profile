// import React, { useState } from "react";
// import LoginPage from "./components/LoginPage/Login";
// import SignupPage from "./components/SignupPage/Signup";
// import ProfilePage from "./components/ProfilePage/Profile";

// function App() {
//   const [showLogin, setShowLogin] = useState(true);
//   const [showProfile, setShowProfile] = useState(false);

//   const redirectToLoginPage = () => {
//     setShowLogin(true);
//     setShowProfile(false);
//   };

//   const redirectToSignupPage = () => {
//     setShowLogin(false);
//     setShowProfile(false);
//   };

//   const handleLoginSuccess = () => {
//     setShowLogin(false);
//     setShowProfile(true);
//   };

//   const navigateToProfile = () => {
//     setShowProfile(true);
//   };
//   const handleLogout = () => {
//     redirectToLoginPage();
//   };

//   return (
//     <div>
//       {showLogin ? (
//         <LoginPage
//           onLoginSuccess={handleLoginSuccess}
//           redirectToSignupPage={redirectToSignupPage}
//         />
//       ) : showProfile ? (
//         <ProfilePage handleLogout={handleLogout} />
//       ) : (
//         <SignupPage
//           redirectToLoginPage={redirectToLoginPage}
//           navigateToProfile={navigateToProfile}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/Login';
import SignupPage from './components/SignupPage/Signup';
import ProfilePage from './components/ProfilePage/Profile';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
    </Router>
  );
}

export default App;

