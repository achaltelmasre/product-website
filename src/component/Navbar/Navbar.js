
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
    const currentpath = window.location.pathname;

    function getActiveClass(path){
        return currentpath === path ? "active" : " ";

    }
  return (
    <nav className="nav">
      <Link to="/" className={getActiveClass('/')}>Home</Link>
      <Link to="/about" className={getActiveClass('/about')}>Product</Link>
      <Link to="/contact" className={getActiveClass('/contact')}>Contact</Link>
      <Link to="/login" className={getActiveClass('/login')}>Login</Link>


    </nav>
  );
    }


