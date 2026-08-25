//integrated implementation

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AuthPage from "./pages/AuthPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

//single reset password page implementation
/*
import ResetPassword from "./pages/ResetPassword";

function App() {
  return <ResetPassword />;
}

export default App;
*/
// single sing up page implementation
/*
import Navbar from "./pages/Navbar";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Navbar />
      <AuthPage />
    </>
  );
}

export default App;
*/
