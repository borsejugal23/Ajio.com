import { Routes, Route } from "react-router-dom";
// import { About } from "../pages/About";
import { Home } from "../LandingPage/Home";
import { Allproduct } from "../ProductPage/Product 1";
import { SinglePage } from "../SingleProductPage/Singlepage 1";
import { Cart } from "../Cart";
import PaymentPage from "../Payment 1";
import Multistep from "../Create Account/Signup";
import Signin from "../Create Account/Signin";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Allproduct />} />
        <Route path="/products/:id" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/signup" element={<Multistep />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};
