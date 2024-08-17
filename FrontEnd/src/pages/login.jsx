import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Successfully logged in!", { toastId: "success1" });
      setTimeout(() => {
        navigate("/Home");
        window.location.reload();
      }, 1000); // Delay navigation by 5 second
    } catch (err) {
      console.error(
        "Login Error:",
        err.response ? err.response.data : err.message
      );
      setError("Invalid email or password");
      toast.error("Login failed. Please try again.", { toastId: "error1" });
    }
  };

  return (
    <div className="loginContainer border rounded-10 mt-5 shadow-lg">
      <form
        className="align-items-center d-flex flex-column justify-content-center my-4"
        onSubmit={handleSubmit}
      >
        <label className="font-b fs-5 mb-4">Sign in</label>
        <div className="d-flex flex-column mb-4 col-6">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="d-flex flex-column mb-4 col-6">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="col-6" type="submit">
          Signin
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="mt-3 text-center">
          <label>
            Don't have an account?{" "}
            <a href="#" onClick={() => navigate("/register")}>
              Sign Up
            </a>
          </label>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
