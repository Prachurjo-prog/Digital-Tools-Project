import React from "react";
import design from "../../assets/design.png";
import { toast } from "react-toastify";

const Carts = ({ cartProducts, setCartProducts }) => {
  console.log(cartProducts);

  const deleteProductCard = (cartProducts) => {
    console.log(cartProducts);
    setCartProducts(
      (prev) => prev.filter((product) => product.id !== cartProducts.id),
      toast.warning("Product removed from cart!"),
    );
  };

  const handlePayment = () => {
    setCartProducts([]);
    toast.success("Payment Successful!");
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0,
  );
  console.log(totalPrice);

  return (
    <div>
      {cartProducts.length === 0 ? (
        <h1 className="text-center text-2xl font-bold mt-10 bg-gray-100 p-10 rounded-2xl">
          Your cart is empty
        </h1>
      ) : (
        <div className=" bg-white rounded-lg shadow-md p-6 mt-10 mb-10">
          <h1 className="md:text-3xl text-2xl font-bold">Your Cart</h1>
          {cartProducts.map((cartProducts) => (
            <div>
              <div className="bg-[#F9FAFC] flex items-center gap-4 rounded-lg p-4 mt-6 relative">
                <img
                  src={design}
                  className="bg-white rounded-full md:p-4 p-2"
                />
                <div>
                  <h3 className="font-bold pb-2">{cartProducts.name}</h3>
                  <p>${cartProducts.price}</p>
                </div>

                <button
                  onClick={() => deleteProductCard(cartProducts)}
                  className="items-end text-end flex justify-end absolute right-4 text-red-500 font-bold cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className=" font-semibold text-gray-500">Total:</p>
            <p className="text-xl font-bold">${totalPrice}</p>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full rounded-full bg-purple-600 text-white mt-5"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
