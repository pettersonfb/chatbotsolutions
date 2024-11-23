import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login bem-sucedido:", credentialResponse);
  };

  const handleLoginError = () => {
    console.error("Erro ao fazer login");
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div>
        <h1>Login com Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;