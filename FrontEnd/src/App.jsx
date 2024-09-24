// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components.css'

const App = () => {
  const url = "http://localhost:5000"
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register url={url}/>} />
          <Route path="/login" element={<Login url={url}/>} />
          <Route path="/register" element={<Register url={url}/>} />
          <Route path="/home" element={<ProtectedRoute component={() => <Home url={url} />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
