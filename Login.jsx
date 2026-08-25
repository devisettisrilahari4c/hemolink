import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png.jpeg";
import "./Login.css";

function App() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-card">

         <img src={logo} alt="HemoLink Logo" className="logo" />


        <h2>Welcome Back!</h2>
        <p>Please log in to your account</p>

        <form>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
  type="button"
  className="eye-button"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? <FiEyeOff /> : <FiEye />}
</button>

          </div>

          <div className="forgot">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

           
           <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit">
            Log In
          </button>

        </form>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>

      </div>

    </div>
  );
}

export default App;