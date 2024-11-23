import React from 'react';
import { useAuth } from '../hooks/useAuth';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleLoginSuccess = (response: any) => {
    console.log('Login successful!', response);
    login();
  };

  const handleLoginFailure = (response: any) => {
    console.error('Login failed!', response);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button
        onClick={() => {
          // Redirect to Google OAuth
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${CLIENT_ID}&scope=https://www.googleapis.com/auth/calendar.events.readonly&redirect_uri=${window.location.origin}/calendar`;
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;