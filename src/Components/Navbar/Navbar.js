import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
            <Link to="/"><img src="https://ignus-23-gold.vercel.app/assets/logo-B07KKHHq.png" alt="ignus-logo"/></Link>
        </div>
        <div className="navbar-links">
            <ul>
            <li><Link to='/events' className="links">EVENTS</Link></li>
            <li><Link to='/workshops' className="links">WORKSHOPS</Link></li>
            <li><Link to='/prakriti' className="links">PRAKRITI</Link></li>
            <li><Link to='/ca' className="links">CA</Link></li>
            <li><Link to='/sponsors' className="links">PAST SPONSORS</Link></li>
            <li><Link to='/register' className="links register">REGISTER</Link></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
