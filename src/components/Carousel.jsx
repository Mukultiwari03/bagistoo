import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgA from "../assests/crfirst.webp"
import ImgB from "../assests/crsecond.webp"
import ImgC from "../assests/crthird.webp"
 const Carousel=()=> {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className='overflow-hidden'>
      <div>
      <img src={ImgA} alt="img1"/>
      </div>
      <div>
      <img src={ImgB} alt="img1"/>
      </div>
      <div>
      <img src={ImgC} alt="img1"/>
      </div>

      {/* <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
}

export default Carousel