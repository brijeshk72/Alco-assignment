import React from 'react';
import Slider from "react-slick";

import ProductCard from '../../components/product/ProductCard'


const ProductSlider = ({products}) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="home-product-slider">
          <Slider {...settings}>
         
          {products && products.length>0 ?

            products.map((product, index)=>{
                    return(
                        <div key={index}>
                        <ProductCard product={product} grid={false}/>
                        </div>
                    )
                }):null}
          
        </Slider>   
        </div>
    )
}

export default ProductSlider
