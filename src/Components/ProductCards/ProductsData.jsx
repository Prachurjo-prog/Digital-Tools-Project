import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ProductsData = ({ product, setCartProducts }) => {
  const [isBuying, setBuying] = useState(false);

  const handleBuy = () => {
    setBuying(true);

    toast("Product added to cart!");
    setCartProducts((prev) => [...prev, product]);
  };
  return (
    <div>
      <div className=" shadow-sm p-5 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <img
            src={product.icon}
            alt={product.name}
            className="bg-[#F2F2F2] p-2 rounded-full"
          />
          <p className="bg-[#FEF3C6] py-1 text-[#BB4D00] px-2 text-sm rounded-full">
            {product.tag}
          </p>
        </div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>{product.description}</p>
        <p>
          <span className="text-2xl font-bold">${product.price}</span>
          /mo
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
        <button
          onClick={handleBuy}
          class="btn bg-purple-600 text-white w-full rounded-full"
        >
          {isBuying ? "Buying..." : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsData;
