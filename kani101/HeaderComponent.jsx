import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import '../css/header.css';
import '../css/background.css';

export default function HeaderComponent() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>Museum Management</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Exhibitions</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="#">Admin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="background-image"></div>
      <div className="content">
        {/* Main content */}
      </div>
      
    </div>
  );
}
