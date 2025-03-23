import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard() {
  return (
    <a
      href="#"
      className="flex  items-center mx-5  shadow-v rounded-lg md:flex-row md:max-w-xl  shadow-sm hover:shadow-md transition-shadow my-2"
    >
      <img
        className="object-cover  rounded-t-lg h-20 w-20 md:rounded-none md:rounded-s-lg"
        src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/1b0cea526b6c74fa63a856dc5c6c236c.png?auto=format%2Ccompress&dpr=2&w=64&h=64&fit=crop"
        alt=""
      />
      <div className="flex flex-col justify-between  leading-normal p-3">
        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
          John smith
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Awesome course ever seen
        </p>
      </div>
    </a>
  );
}
