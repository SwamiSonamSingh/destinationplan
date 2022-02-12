import React from 'react'
import "./style.css"
import {Link} from "react-router-dom";
import {Route,Switch} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" id="navhead">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/shaadivaalebhaia" id="navitem">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/venues" id="navitem">Venues</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/packages" id="navitem">Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/famousplaces" id="navitem">Famous places</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contactus" id="navitem">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
export default Navbar;