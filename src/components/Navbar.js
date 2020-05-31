import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg bg-white py-1 shadow">
         <div className="container">     
            <Link to="/" className="navbar-brand">
               <img src="../images/star-movies-logo.png" height="50" className="d-inline-block align-top" alt="logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link>
                  </li>
               </ul>
            </div>
            <img src="../images/tmdb_logo.png" className="d-inline-block align-top" alt="logo tmdb" />
         </div>
      </nav>
   )
}

export default Navbar
