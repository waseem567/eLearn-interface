import Link from "next/link";
import LottieSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute   backdrop-opacity-35" />

      <div className="relative grid lg:grid-cols-2 grid-cols-1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-24 lg:pb-32 ">
          <div className="text-center  mx-auto w-full">
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.1] m:text-5xl md:text-5xl text-left text-visio-headings ">
              <span className="block xl:w-[60%]">
                Achieve career goals with visio
              </span>
            </h1>
            <div className="mt-6 text-xl text-visio-text text-start break-words xl:w-[70%]">
              Create, collaborate, and bring your vision to life with our
              powerful platform. Start building something amazing today.
            </div>
            <div className="mt-10 md:w-1/2 flex justify-start">
              <Link
                href="#get-started"
                className="rounded-visio-rounded shadow px-8 py-3 text-white hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 bg-visio-dark-purple hover:bg-visio-dark-purple transition-colors"
              >
                Get enroll now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <LottieSlider />
        </div>

        {/* <div className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden lg:block">
          <div className="w-60 h-60 rounded-full bg-purple-200 opacity-20" />
        </div> */}
      </div>
    </div>
  );
}
