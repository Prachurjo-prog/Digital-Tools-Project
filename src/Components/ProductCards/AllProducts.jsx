import React from 'react';
import ProductsData from './ProductsData';

const AllProducts = ({products}) => {
    return (
        <div className='md:max-w-[70%] max-w-[90%]  mx-auto'>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {products.map((product) => (
            <ProductsData product={product}/>
          ))}
        </div>   
        </div>
         
    );
};

export default AllProducts;