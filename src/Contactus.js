import React from "react";
import "./style.css";
const Contactus = () => {
  return (
      <React.Fragment>
        <div className="contactmain">
        <h1 className="message">Contactus</h1><hr/>
        <div className="bannercontact">
          <form>
            <h2>Full Name</h2>
            <input type="text"/>
            <h2>E-mail</h2>
            <input type="text"/>
            <h2>Contact Number</h2>
            <input type="text" placeholder="94XXXXXXXX"/>
            <h2>Suggestions</h2>
            <textarea rows="3" cols="23"/><br/><hr/>
            <button className="btn btn-success">Submit</button>
          </form>
          <div className="contactimg">
            <img src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
          </div>
        </div>
        </div>
      <div className="headcontact">
      </div>
      <div className="detailscontact">
        <div className="mapcontact">
          <a href="#"><img src="https://th.bing.com/th/id/OIP.jOghh9_y3FbWUlWhOIrDxgHaFj?w=263&h=197&c=7&o=5&pid=1.7"/></a>
        </div>
        <div className="othercontact">
          <h3>OREA group and sons.</h3><br/>
          <h4><i className="fa fa-location-arrow fa-lg" aria-hidden="true"/>&emsp;Boaring Canal Road<br/>&emsp;&emsp;Patna-800001,Bihar</h4>
          <h4><i className="fa fa-phone fa-lg" aria-hidden="true"/>&emsp;+919473xxxxxx</h4>
          <h4><i className="fa fa-envelope-open-o fa-lg" aria-hidden="true"/>&emsp;oreagroups@hotmail.com</h4>
          </div>
          </div>
          </React.Fragment>
  );
};

export default Contactus;
