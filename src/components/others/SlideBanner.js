import React from 'react';
import Slider from "react-slick";

const SlideBanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
      };

    return (
        <div className="top-banner-slider">
        <Slider {...settings}>
          <div>
                <img src="/assets/image/banner/banner1.png" alt=""/>
          </div>
          <div>
            <img src="/assets/image/banner/banner2.jpg" alt=""/>
          </div>
          <div>
            <img src="/assets/image/banner/banner3.png" alt=""/>
          </div>
          <div>
            <img src="/assets/image/banner/banner4.jpg" alt=""/>
          </div>
         
        </Slider>
        </div>
    )
}

export default SlideBanner
