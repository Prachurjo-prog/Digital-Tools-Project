import React from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="">
      <div className="md:max-w-[70%] max-w-[90%] mx-auto">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center lg:mt-25 md:mt-15 mt-10">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600 text-center md:mt-5 mt-2.5 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="flex gap-5 md:p-10 items-center justify-center flex-col md:flex-row">
          <div className="bg-[#F2F2F2] p-10 rounded-2xl ">
            <h2 className="text-2xl font-bold">Starter</h2>
            <p className="text-gray-600 text-sm">Perfect for getting started</p>
            <h3 className="mt-6">
              <span className="text-5xl font-bold">$0</span>/month{" "}
            </h3>
            <ul className="text-gray-600 mt-7">
              <li className="flex items-center gap-2">
                {" "}
                <Check className="text-green-500" />
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Basic templates
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Community support
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />1 project per month
              </li>
            </ul>
            <button className="btn btn-primary rounded-full bg-purple-600 border-none w-full mt-10">
              Get Started Free
            </button>
          </div>

          <div className="text-white p-10 rounded-2xl bg-purple-600">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p className=" text-sm">Best for professionals</p>
            <h3 className="mt-6">
              <span className="text-5xl font-bold">$29</span>/month{" "}
            </h3>
            <ul className=" mt-7">
              <li className="flex items-center gap-2">
                {" "}
                <Check className="text-green-500" />
                Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Advanced analytics
              </li>
            </ul>
            <button className="btn btn-primary rounded-full bg-white text-purple-600 border-none w-full mt-10">
              Start Pro Trial
            </button>
          </div>
          <div className="bg-[#F2F2F2] p-10 rounded-2xl ">
            <h2 className="text-2xl font-bold">Enterprise</h2>
            <p className="text-gray-600 text-sm">For teams and businesses</p>
            <h3 className="mt-6">
              <span className="text-5xl font-bold">$99</span>/month{" "}
            </h3>
            <ul className="text-gray-600 mt-7">
              <li className="flex items-center gap-2">
                {" "}
                <Check className="text-green-500" />
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" />
                SLA guarantee
              </li>
            </ul>
            <button className="btn btn-primary rounded-full bg-purple-600 border-none w-full mt-10">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
