import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./AuthPage.css";
import logo from "../assets/logo.png.jpeg";

function AuthPage() {
  return (
     <>
     <Navbar />
    <div className="container">
      <div className="signup-box">
        <img src={logo} alt="Hemolink Logo" className="signup-logo" />
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
         <Link to="/Login"> 
        <button>Sign Up</button>
        </Link>
        <p className="login">
          Already have an account? <Link to="/Login"> Login</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default AuthPage;