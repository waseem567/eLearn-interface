import { DIRECTION } from "@/utils/types";
import React from "react";
import DynamicMarquee from "../Gen/Marquee";
import { COMPANIES } from "@/utils/data";

const Companies = () => {
  const companies = COMPANIES.map((companyImage) => (
    <img src={companyImage} alt="company" className="mx-5" />
  ));
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-visio-text">
        Learn from top companies
      </h2>
      <DynamicMarquee
        items={companies}
        speed={50}
        direction={DIRECTION.LEFT}
        pauseOnHover={true}
      />
    </div>
  );
};

export default Companies;
