import React from 'react';
import ProductsData from './ProductsData';

const AllProducts = ({products, cartProducts, setCartProducts}) => {
    return (
        <div className=''>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          {products.map((product) => (
            <ProductsData key={product.id} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
          ))}
        </div>   
        </div>
         
    );
};

export default AllProducts;