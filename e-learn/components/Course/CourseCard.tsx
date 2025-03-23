import React from "react";
import { IoBookOutline } from "react-icons/io5";

const CourseCard = () => {
  return (
    <div className="w-full max-w-sm rounded-visio-rounded overflow-hidden transition-all duration-300 ease-out transform  hover:shadow-md  bg-root-background">
      {/* Course Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
          alt="Course thumbnail"
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>

      {/* Course Content */}
      <div className="p-5 space-y-4">
        <h3 className="font-semibold text-xl text-visio-headings transition-colors duration-300 hover:text-primary">
          Web Development Fundamentals
        </h3>

        <p className="text-visio-text text-sm line-clamp-2">
          Learn the core concepts of modern web development with practical
          examples and hands-on projects.
        </p>

        <div className="flex items-center text-sm text-visio-text">
          <IoBookOutline />

          <span>12 lessons</span>
        </div>

        <button className="rounded-visio-rounded shadow px-8 py-3 text-white hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 bg-visio-dark-purple hover:bg-visio-dark-purple transition-colors w-full">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
