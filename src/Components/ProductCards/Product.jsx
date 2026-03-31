import { use } from "react";
import ProductsData from "./ProductsData";


const Product = ({ productPromise }) => {
  const products = use(productPromise);
  
  
  // const [productTab, setProductTab] = useState("")

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
          {products.map((product) => (
            <ProductsData product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
