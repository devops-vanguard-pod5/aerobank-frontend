import React from "react";
// Updated imports to match the new naming convention
import heroSlide1 from "../images/hero-slide-1.png"; 
import heroSlide2 from "../images/hero-slide-2.png";
import heroSlide3 from "../images/hero-slide-3.png";

const Carousel = () => {
  return (
    <div 
      id="heroCarousel" 
      className="carousel slide" 
      data-bs-ride="carousel" 
      data-bs-interval="4000" /* Auto-scrolls every 4 seconds */
    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img 
            src={heroSlide1} 
            className="d-block w-100" 
            style={{ maxHeight: "500px", objectFit: "cover" }} 
            alt="AeroBank Platform" 
          />
          {/* Captions are gone from here */}
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img 
            src={heroSlide2} 
            className="d-block w-100" 
            style={{ maxHeight: "500px", objectFit: "cover" }} 
            alt="Secure Transactions" 
          />
          {/* Captions are gone from here */}
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img 
            src={heroSlide3} 
            className="d-block w-100" 
            style={{ maxHeight: "500px", objectFit: "cover" }} 
            alt="Global Finance" 
          />
          {/* Captions are gone from here */}
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;