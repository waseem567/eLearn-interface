"use client";

import { MARQUEE_TYPES } from "@/utils/types";
import React from "react";
import Marquee from "react-fast-marquee";

const DynamicMarquee = ({
  items,
  speed = 50,
  direction,
  pauseOnHover = true,
}: MARQUEE_TYPES) => {
  return (
    <Marquee
      speed={speed}
      direction={direction || "left"}
      pauseOnHover={pauseOnHover}
    >
      {items}
    </Marquee>
  );
};

export default DynamicMarquee;
