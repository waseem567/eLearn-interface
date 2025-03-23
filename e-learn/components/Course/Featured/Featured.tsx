import React from "react";
import CourseCardList from "../CourseCardList";
import CourseCard from "../CourseCard";

const Featured = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-5">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-visio-headings">Featured</h2>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
