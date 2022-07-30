import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(<>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bg">
      <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">DREAM MOVIES</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/english">English Dubbed<span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/indian">Indian Hindi<span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/punjabi">Punjabi Movies<span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/south">South Dubbed<span className="sr-only"></span></NavLink>
                </li>
              </ul>
              
              <form className="sbox ms-auto">
                <input className="stext d-lg-block d-none" type="search" placeholder="Search..." aria-label="Search"/>
                <button className="sbtn d-lg-block d-none" type="submit"><i className="fas fa-search"></i></button>
              </form>
              <form className="d-block d-lg-none sm_search">
                <input type="search" placeholder="Search..." aria-label="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
                </form>
                
            </div>
          </div>
          </nav>
    </div>
    </>)
}
export default Navbar;