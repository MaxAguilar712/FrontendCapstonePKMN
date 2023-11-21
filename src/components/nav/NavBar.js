import React from "react"
import { Link, NavLink, Navigate } from "react-router-dom"
import "./NavBar.css"



export const NavBar = () => {

  return (
   
    
    <div className="topnav">
         <a className="active">
              <Link className="nav-link" to="/">Home</Link>
            </a>
    
            <a className="nav-item">
              <Link className="nav-link" to="/Gallery">Gallery</Link>
            </a>
    
            <a className="nav-item">
              <Link className="nav-link" to="/Booster">Booster</Link>
            </a>

            <a className="nav-item">
              <Link className="nav-link" to="/Collection">Collection</Link>
            </a>

    
            <a className="navbar__item navbar__logout">
                    <Link className="navbar__link" to="/login" onClick={() => {
                        localStorage.removeItem("nutshell_user")
                        Navigate("/", {replace: true})
                    }}>Logout</Link>
                </a>
</div>

)
}