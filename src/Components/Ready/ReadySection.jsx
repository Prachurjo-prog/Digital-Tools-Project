import React from "react";

const ReadySection = () => {
  return (
    <div className="bg-linear-to-r from-purple-600 to-purple-700 text-white  items-center md:py-20 py-10  pt-10">
      <div className="md:max-w-[70%] max-w-[90%] mx-auto text-center">
        <h1 className="md:text-5xl text-3xl font-bold pt-10">
          Ready to Transform Your Workflow?
        </h1>
        <p className="md:pt-6 pt-4 md:text-lg text-gray-300">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br /> Start your free trial today.
        </p>
        <div className="flex gap-4 mt-7 items-center justify-center">
          <button className="btn btn-primary rounded-full py-3 bg-white text-purple-600 border-none">
            Explore Products
          </button>
          <button className="btn btn-outline items-center rounded-full hover:bg-purple-600 hover:text-white">
            View Pricing{" "}
          </button>
        </div>
        <p className="text-sm text-gray-300 pt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ReadySection;
