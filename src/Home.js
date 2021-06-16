import React from "react";
import "./style.css";
const Home = () => {
  return (
    <>
      <p>OREA GROUP's WELCOME YOU....</p>
      <h1 className="head2">Things make us special</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/originals/3e/23/f4/3e23f4dcc1f33ab51083b6ddcbf9a995.jpg"
              className="d-block w-100"
              alt="missing"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.wixstatic.com/media/0c4de1_a5f413dd07de4d31be1f34d07bb78bdd~mv2.jpg/v1/fit/w_1000%2Ch_562%2Cal_c%2Cq_80/file.png"
              className="d-block w-100"
              alt="missing"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/R7fe071733f8a185dc7ceeaf84e93679b?rik=WPW%2bHcdaQzPaWg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f7%2f21%2fnrochD.jpg&ehk=KjOP8df6v6r11QSqSRaztwr0QfQU9j293eoFKEUwmw4%3d&risl=&pid=ImgRaw"
              className="d-block w-100"
              alt="missing"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/originals/4e/df/48/4edf48bbc4f1b0d477dad1561659061b.jpg"
              className="d-block w-100"
              alt="missing"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="d-block w-100"
              alt="missing"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="d-block w-100"
              alt="missing"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="secondhead">Some Highlights</h1>
      <div className="contain">
        <div className="container1">
          <div className="image">
            <img
              src="https://th.bing.com/th/id/Rfbdae49e5b530d8aa9a183b6f07237c3?rik=218Gvva9VJH4mQ&riu=http%3a%2f%2fwww.bvv.cz%2fpublic%2fgalleries%2f44%2f43599%2forea-hotel-voronez-vor_1_04.jpg%3ffd9f308811b68197cd6fb36edda41dcb&ehk=BC17KMCpcvTLURCzKJ1xHjOfyGyXWdFDZHJgqIFsLzc%3d&risl=&pid=ImgRaw"
              alt="data lost"
            />
          </div>
          <div className="heading">
            <h3>
              What makes a wedding truly special at Jaypee Hotels and Resorts is
              the range of specialized services on offer. With so much to
              organize, you can relax in the knowledge that we will take care of
              your every need, ensuring that your wedding day is everything you
              want it to be. Jaypee Hotels and Resorts offer a perfect
              destination that ensures a blend of traditional and exquisite
              modern luxuries, making your wedding a memorable one. Choose
              Jaypee Hotels and Resorts as your wedding destination and be rest
              assured that your wedding will be extra special.
            </h3>
            <span>
              <button className="btn btn-info">Explore More</button>
            </span>
          </div>
        </div>
      </div><br/>
      <div className="partthird">
        <div className="img5">
          <h1>Sweet Memories</h1>
        </div>
      </div>
      <div className="content3">
        <div className="contentslide1">
          <div>
            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
        </div>
        <div className="contentslide2">
          <div>
            <img src="https://th.bing.com/th/id/OIP.r32N-_6ERD9lzfe1uXMjsAHaE8?w=241&h=180&c=7&o=5&pid=1.7" />
          </div>
          <div>
            <img src="https://th.bing.com/th/id/OIP.mNaWQn_hscPVjUuFKiBFJgHaEr?w=309&h=195&c=7&o=5&pid=1.7" />
          </div>
        </div>
      </div>
      <br />
      <div className="fourthpart">
        <h1>Our Destinatons</h1>
      </div>
      <div className="location">
        <div className="location1">
          <ul>
            <li>Delhi NCR</li>
            <li>Patna</li>
            <li>Lacknow</li>
            <li>Bikaner</li>
            <li>Manali</li>
          </ul>
        </div>
        <div className="location1">
          <ul>
            <li>Varanasi</li>
            <li>Bhagalpur</li>
            <li>Gaya</li>
            <li>Rajgir</li>
            <li>Nalanda</li>
          </ul>
        </div>
        <div className="location1">
          <ul>
            <li>Hyderabad</li>
            <li>Nainital</li>
            <li>Haridwar</li>
            <li>Amritsar</li>
            <li>Jaipur</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <ul>
          <h3>Experiance</h3>
          <li>Picnic in Mussorrie</li>
          <li>Dine in the city Nawabs</li>
          <li>Visit Red city</li>
          <li>The royal table</li>
          <li>The city of lakes</li>
          <li>The land of Budha</li>
        </ul>
        <ul>
          <h3>Follow us</h3>
          <li>
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
          </li>
        </ul>
        <ul>
          <h3>Discover</h3>
          <li>About us</li>
          <li>Our news latter</li>
          <li>Blogs</li>
          <li>PF enquiry</li>
        </ul>
      </div>
    </>
  );
};
export default Home;