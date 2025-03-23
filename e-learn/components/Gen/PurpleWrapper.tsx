import { Props } from "@/utils/types";
import React from "react";

const PurpleWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-visio-light-purple container mx-auto rounded-visio-rounded overflow-hidden relative backdrop-opacity-35 z-30">
      {children}
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%]  hidden lg:block ">
        <div className="w-80 h-80 rounded-full bg-indigo-200 opacity-20" />
      </div>
    </div>
  );
};

export default PurpleWrapper;
