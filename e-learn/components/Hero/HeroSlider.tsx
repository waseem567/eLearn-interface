"use client";

import React from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SliderCard from "../Gen/SliderCard";
const animations = [
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/04f290c8baa586175eff911ee952c6a4.png?auto=format%2Ccompress&dpr=1",
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/DMFk42PH8L9y9MeQ5xc7I/c55cade640bb097b0e5429b780ff7c98/redesigned-hero-image.png?auto=format%2Ccompress&dpr=1",
];
const LottieSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="max-w-lg mx-auto relative">
      <div className="absolute xl:right-[-10%] top-[-10%] left-0  w-[250px] xl:left-[unset]">
        <SliderCard />
      </div>
      <Slider {...settings}>
        {animations.map((animation, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[300px] sm:w-[unset]"
          >
            <img
              className="lg:scale-110 block  "
              src={animation}
              alt="animation"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LottieSlider;
