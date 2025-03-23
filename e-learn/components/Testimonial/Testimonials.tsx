import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 py-2 ">
      <h2 className="text-3xl font-bold text-visio-text">
        What our subscribers say
      </h2>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
