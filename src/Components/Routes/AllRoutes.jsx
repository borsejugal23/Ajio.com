import { Routes, Route } from "react-router-dom";
// import { About } from "../pages/About";
import { Home } from "../LandingPage/Home";
import { Allproduct } from "../ProductPage/Product";
// import { Contact } from "../pages/Contact";
// import { User } from "../pages/User";
// import { Singlepagedata } from "../pages/Singlepage";
// import { Login } from "../pages/Login";
// import { PrivateRoute } from "./PrivateRoute";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Allproduct/>}/>
      </Routes>
    </div>
  );
};
