import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/Navbar/NavBar";
import HomeListing from "../pages/Listing/HomeListing.jsx"

const Home = ({url}) => {
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
    <div className="homeContainer bg-primary-subtle one">
      <NavBar url={url}/>
      <ToastContainer />
    </div>
  );
};

export default Home;
