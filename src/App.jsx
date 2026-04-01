import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Popularity from "./Components/Popularity/Popularity";
import PricingSection from "./Components/Pricing/PricingSection";
import Product from "./Components/ProductCards/Product";
import ReadySection from "./Components/Ready/ReadySection";
import Carts from "./Components/Carts/Carts";
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/data1.json");
  return res.json();
};

function App() {
  const productPromise = fetchProducts();
  

  return (
    <>
      <div className="manrope mx-auto">
        <NavBar/>

        <Hero />
        <Popularity />

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl items-center flex justify-center"></span>
          }
        >
          <Product productPromise={productPromise} />
        </Suspense>
        {/* <Carts/> */}

        <GetStarted />
        <PricingSection />
        <ReadySection />
        <Footer />

        {/* React Toastify */}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
