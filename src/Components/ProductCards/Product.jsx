
import { use } from "react";

import { Check } from "lucide-react";

const Product = ({productPromise}) => {
  const products = use(productPromise)
  console.log(products)
  return (
    <div>
      <div className="md:max-w-[70%] max-w-[90%]  mx-auto  space-y-4 mb-10">
        <h1 className="md:text-5xl text-3xl text-center font-bold md:mt-20 mt-7">
          Premium Digital Tools
        </h1>
        <p className="text-gray-600 text-center">
          Choose from our curated collection of premium digital products
          designed <br className="" /> to boost your productivity and
          creativity.
        </p>
        <div className="flex items-center justify-center">
          <button className="btn rounded-l-2xl">Products</button>
          <button className="btn rounded-r-2xl">Cart (2)</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {
            products.map(product => <div className="">
              <div className=" shadow-sm p-5 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <img src={product.icon} alt={product.name} className="bg-[#F2F2F2] p-2 rounded-full"/>
              <p className="bg-[#FEF3C6] py-1 text-[#BB4D00] px-2 text-sm rounded-full">
               {product.tag}
              </p>
            </div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p>
              {product.description}
            </p>
            <p>
              <span className="text-2xl font-bold">${product.price}</span>/mo
            </p>
            <ul>
              <li className="flex items-center">
                <Check className="text-green-500" /> {product.features[0]}
              </li>
              <li className="flex items-center">
                <Check className="text-green-500" />
                {product.features[1]}
              </li>
              <li className="flex items-center">
                <Check className="text-green-500" />
                {product.features[2]}
              </li>
            </ul>
            <button class="btn bg-purple-600 text-white w-full rounded-full">Buy Now</button>
          </div>
            </div>)
          }
          {/* <div className=" shadow-sm p-5 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <img src={wright} />
              <p className="bg-[#FEF3C6] py-1 text-[#BB4D00] px-2 text-sm rounded-full">
                Best Seller
              </p>
            </div>
            <h2 className="text-2xl font-bold">AI Writing Pro</h2>
            <p>
              Generate high-quality content, blogs, and
              <br /> marketing copy in seconds with advanced AI.
            </p>
            <p>
              <span className="text-2xl font-bold">$29</span>/mo
            </p>
            <ul>
              <li className="flex items-center">
                <Check className="text-green-500" /> Unlimited AI generations
              </li>
              <li className="flex items-center">
                <Check className="text-green-500" />
                50+ writing templates
              </li>
              <li className="flex items-center">
                <Check className="text-green-500" />
                Grammar checker
              </li>
            </ul>
            <button class="btn bg-purple-600 text-white w-full">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
