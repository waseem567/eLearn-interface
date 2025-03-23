import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import DynamicMarquee from "../Gen/Marquee";
import { DIRECTION } from "@/utils/types";

const TestimonialSlider = () => {
  const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
    <TestimonialCard key={i} />
  ));

  return (
    <div className="slider-container">
      <DynamicMarquee
        items={testimonials}
        speed={50}
        direction={DIRECTION.LEFT}
        pauseOnHover={true}
      ></DynamicMarquee>
    </div>
  );
};

export default TestimonialSlider;
