import React from "react";
import banner from "../../assets/banner.png";
import dot from "../../assets/Group 5.png";
import play from "../../assets/Play.png";

const Hero = () => {
  return (
    <div className="md:max-w-[68%] max-w-[90%] mx-auto grid md:grid-cols-2 items-center gap-10 mt-10">
      <div>
        <p className="text-purple-600 px-2 rounded-2xl bg-[#E1E7FF] flex gap-1 items-center">
          <span>
            <img src={dot} />{" "}
          </span>{" "}
          New: AI-Powered Tools Available
        </p>

        <h1 className="md:text-6xl text-3xl font-bold mt-5">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-5 text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
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

      <div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Hero;
