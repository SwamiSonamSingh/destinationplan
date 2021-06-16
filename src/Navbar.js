import React from 'react'
import "./style.css"
import {Link} from "react-router-dom";
import {Route,Switch} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light" id="navhead">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://logos-download.com/wp-content/uploads/2017/01/Orea_Hotels_Resorts_logo.png" id="logo"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/destinationplan" id="navitem">Home</Link>
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
       &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button id="offer" data-bs-toggle="modal" data-bs-target="#exampleModal3">Today's Stuff</button>&emsp;&emsp;
        <button id="feedback" data-bs-toggle="modal" data-bs-target="#exampleModal" >User Section</button>
      </ul>
    </div>
  </div>
</nav>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Check you booking here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Enter booking ID</label>
            <input type="text" className="form-control" id="recipient-name" placeholder="eg:-OR78556454"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Exciting Offers</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta praesentium reiciendis consequatur dolor quam et labore, eveniet quis corporis sit! Ipsum, atque magnam.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Grab Now</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}
export default Navbar;