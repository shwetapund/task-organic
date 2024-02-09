import react from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  
  return (

    <nav class="navbar ppn navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-5 logo-color ms-5" to="/">
        GREEN</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse font-size side" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto color">
            <li className="nav-item">
              <Link className="nav-link  me-5 mt-3 color font-size ms-5" aria-current="page" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5 color mt-3 font-size" aria-current="page" to="/booking">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5 color mt-3 font-size " aria-current="page" to="/about">GALLARY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5 color mt-3 font-size "  aria-current="page" to="/about">CONTACT</Link>
            </li>
      
          
          </ul>

  
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
