import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);

      // Redirect after login
      navigate("/user");

    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>AI Quiz App</h2>
        <p>Login to continue</p>

        <button onClick={handleLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;