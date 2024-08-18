import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/Navbar/NavBar";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    // create one function react  
    
    <div className="homeContainer bg-primary-subtle one">
      <NavBar />
      <ToastContainer />
    </div>
  );
};

export default Home;
