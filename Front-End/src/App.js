import React, { useState } from 'react';
import LoginPage from './components/LoginPage/Login';
import SignupPage from './components/SignupPage/Signup';
import ProfilePage from './components/ProfilePage/Profile';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const redirectToLoginPage = () => {
    setShowLogin(true);
    setShowProfile(false);
  };

  const redirectToSignupPage = () => {
    setShowLogin(false);
    setShowProfile(false);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowProfile(true);
  };

  const navigateToProfile = () => {
    setShowProfile(true);
  };
  const handleLogout = () => {
    // Add your logout logic here, such as clearing authentication tokens or session data.
    // For this example, we'll simply switch back to the login view.
    redirectToLoginPage();
  };

  return (
    <div>
      {showLogin ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} redirectToSignupPage={redirectToSignupPage} />
      ) : showProfile ? (
        <ProfilePage handleLogout={handleLogout} />
      ) : (
        <SignupPage redirectToLoginPage={redirectToLoginPage} navigateToProfile={navigateToProfile} />
      )}
    </div>
  );
}

export default App;
