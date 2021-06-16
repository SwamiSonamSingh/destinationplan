import React from "react";
import "./style.css";
const Venues = () => {
  return (
    <React.Fragment>
      <div className="venueh">
        <h1>Our Venues</h1>
      </div>
      <div className="cardvenue">
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-1.jpg" />
          <br />
          <br />
          <h1>OREA Banquet Hall,Haridwar(UK)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-2.jpg" />
          <br />
          <br />
          <h1>OREA Spa & Resort,Gaya(BR)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-3.jpg" />
          <br />
          <br />
          <h1>OREA Green Golf,Rajgir(BR)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="cardvenue1">
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/blog-3.jpg" />
          <br />
          <br />
          <h1>OREA Continental,Hyderabad(AP)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/other-service-1.jpg" />
          <br />
          <br />
          <h1>OREA Atlantic,Delhi(NCR)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
        <div className="card1">
          <img src="https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-5.jpg" />
          <br />
          <br />
          <h1>OREA Siddharth,Mussorrie(UK)</h1>
          <br />
          <button
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Details
          </button>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            Book
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Enter Booking Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Enter Name:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Mobile No.:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Aadhar Number:
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Booking From to:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="00/00/0000 to 00/00/0000"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Full Address:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cofirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                This pack includes
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              incidunt nobis ab dolorum totam vero hic debitis quibusdam facilis
              sapiente libero consequatur, odit autem delectus, inventore
              voluptates eaque sint est aliquid asperiores? Perferendis, ullam.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div><br/><br/>
      <div className="arrangements">
        <h1>Services</h1>
    </div>
    <div className="arrangement1">
        <div className="bannerarr">
            <img src="https://www.jaypeehotels.com/images/wedding-page/facilities-1.png"/>
        </div>
        <div className="paraarr">
            <h2>Beauty Rituals</h2>
            <h4>Get that golden glow for your big day with our tailor-made spa experiences and journeys. With handpicked, highly trained therapists and best of the industry products featuring only the purest extracts of natural ingredients, the experience is both holistically therapeutic and is very personal thus helping you relax before the D-Day as well.</h4>
        </div>
    </div>
    <div className="arrangement1">
        <div className="paraarr">
            <h2>Creative Catering</h2>
            <h4>The wedding feasts are as legendary as the Executive chefs across all the Jaypee properties. The creative menus take you on a culinary journey with an array of options ranging from local to international cuisines.</h4>
        </div>
        <div className="bannerarr">
            <img src="https://www.jaypeehotels.com/images/wedding-page/facilities-2.png"/>
        </div>
    </div>
    <div className="arrangement1">
        <div className="bannerarr">
            <img src="https://www.jaypeehotels.com/images/wedding-page/facilities-3.png"/>
        </div>
        <div className="paraarr">
            <h2>Wedding Boutique</h2>
            <h4>We believe in creating the most wonderful foundation for what we hope turns out to be the most beautiful journey of your life. We have a team of specialist wedding planners with years of experience, to guide you at every step of the way.</h4>
        </div>
    </div>

    </React.Fragment>
  );
};
export default Venues;
