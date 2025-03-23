import Image from "next/image";
import React from "react";

const SliderCard = ({
  name = "Jane Cooper",
  location = "United Kingdom, London",
  avatarUrl = "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/7b84f9f8974ab57c2b5a48b349fe3a0d?_a=AQAEuj9",
}) => {
  return (
    <div className="flex items-center p-2 rounded-xl bg-visio-slider-card z-[7832682736] relative shadow">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src={avatarUrl}
            alt={`${name}'s profile picture`}
            // width={40}
            // height={40}
            className="object-cover h-full"
          />
        </div>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-xs text-gray-50">{location}</p>
      </div>
    </div>
  );
};

export default SliderCard;
