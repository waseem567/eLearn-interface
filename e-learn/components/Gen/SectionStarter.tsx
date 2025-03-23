"use client";
import { Props } from "@/utils/types";
import React from "react";

const SectionStarter: React.FC<Props> = ({ children }) => {
  return <div className="my-20">{children}</div>;
};

export default SectionStarter;
