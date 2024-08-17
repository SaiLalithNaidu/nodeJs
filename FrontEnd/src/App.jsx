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
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<ProtectedRoute component={Home} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
