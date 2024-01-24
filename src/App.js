import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp"
import Login from "./components/Login";
// Github

function App() {

  return (
  
    <BrowserRouter>
    <Navbar />
      <ToastContainer />
      
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
