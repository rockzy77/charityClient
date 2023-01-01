import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'

export default function ImageSlider({sliderdata, slideclass}) {

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

  return (
    <Slider {...settings}>
        {sliderdata.map(item => {
            return(
                <a href="#" className={slideclass + "__slider-card"} key={item.title}>
                    <figure>
                        <img src={item.background} alt="" />
                        <figcaption>
                            <img src={item.image} alt="" className="card-image"/>
                            <span className="card-title">{item.title}</span>
                            <img src="https://img.icons8.com/color/48/000000/verified-badge.png" className="verified-img"/>
                        </figcaption>
                    </figure>
                </a>
            );
        })}
    </Slider>
  );
}