import React from "react";
import banner from "../../assets/banner.png";
import dot from "../../assets/Group 5.png";
import play from "../../assets/Play.png";

const Hero = () => {
  return (
    <div className="md:max-w-[70%] max-w-[90%] md:flex justify-between mx-auto items-center gap-3 mt-10 md:mt-20">
      <div className="gap-5">
        <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-purple-500 text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
          <img src={dot} /> <p>New: AI-Powered Tools Available</p>
        </div>

        <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold md:mt-5 mt-2.5">
          Supercharge Your
          <br /> Digital Workflow
        </h1>
        <p className="mt-5 text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
          <br />
          software—all in one place. Start creating faster today.
          <br /> Explore Products
        </p>
        <div className="flex gap-4 mt-5">
          <button className="btn btn-primary rounded-full bg-linear-to-r from-purple-500 to-purple-700 border-none">
            Explore Products
          </button>
          <button className="btn btn-outline items-center rounded-full hover:bg-purple-600 hover:text-white">
            <span>
              <img src={play} />
            </span>{" "}
            Watch Demo{" "}
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Hero;
