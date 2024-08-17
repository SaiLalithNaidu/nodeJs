import React, { useState } from "react";
import { register } from "../authService";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      toast.success("Successfully registered!");
      setTimeout(() => {
        navigate('/login'); // Use navigate instead of history.push
      }, 5000);
      
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="registerPage border rounded-10 mt-5 shadow-lg">
      <ToastContainer />
      <form className="align-items-center d-flex flex-column justify-content-center my-4" onSubmit={handleSubmit}>
      <label className="font-b fs-5 mb-4">Sign up</label>
        <div className="d-flex flex-column mb-4 col-6">
          <input className="form-control" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="d-flex flex-column mb-4 col-6">
          <input className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="d-flex flex-column mb-4 col-6">
          <input className="form-control" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="d-flex flex-column mb-4 col-6">
          <input className="form-control" placeholder="Confirm password" type="password"  />
        </div>
        <button className="col-6" type="submit">Continue</button>
        <div className="mt-3 text-center">
          <label>
            Already have an account..? <a href="#" onClick={() => navigate('/login')}>Sign In</a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Register;
