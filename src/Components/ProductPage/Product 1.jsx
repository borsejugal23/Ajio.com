import Navbar from "../LandingPage/Navbar";
import { useReducer, useEffect, useState } from "react";
import { getdata } from "../Pages/api 1";
import { Card } from "./Card 1";
import "../styles/Product 1.css";
import gridimg from "../Pictures/Screenshot 2023-03-31 131237.png";
import { Footer } from "../LandingPage/Footer";
import { Spinner } from "@chakra-ui/react";

const initstate = {
  loading: false,
  data: [],
  err: false,
};
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "Fetch_Loading": {
      return {
        ...state,
        loading: true,
        data: [],
        err: false,
      };
    }
    case "Fetch_Success": {
      return {
        ...state,
        loading: false,
        data: payload,
        err: false,
      };
    }
    case "Fetch_Error": {
      return {
        ...state,
        loading: false,
        data: [],
        err: true,
      };
    }
    case "Reset": {
      return {
        ...state,
        loading: false,
        data: [],
        err: false,
      };
    }
    default: {
      throw new Error("invalid action type");
    }
  }
}

export const Allproduct = () => {
  const [state, dispatch] = useReducer(reducer, initstate);

  const [order, setOrder] = useState("");

  const [category, setCategory] = useState("");

  const [color, setcolor] = useState("");

  const [gender, setGender] = useState("");

  const fetchAllProducts = (paramsObj) => {
    dispatch({ type: "Fetch_Loading" });
    getdata(paramsObj)
      .then((res) => {
        dispatch({ type: "Fetch_Success", payload: res?.data });
        console.log(res.data);
      })
      .catch(() => {
        dispatch({ type: "Fetch_Error" });
      });
  };

  useEffect(() => {
    const paramsObj = {
      _sort: "price",
      _order: order,
      category: category,
      gender: gender,
      color: color,
    };

    fetchAllProducts(paramsObj);
  }, [order, category, color, gender]);

  const { loading, data, err } = state;

  return (
    <>
      <Navbar />
      <div>
        <div id="shortData">
          <span style={{ marginLeft: "100px" }}>FILTER BY</span>
          <span>{data.length} Items Found</span>
          <img style={{ width: "15%" }} src={gridimg} alt="error" />
          <span>
            SORT BY{" "}
            <select
              name=""
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="">Price</option>
              <option value="asc">Low-High</option>
              <option value="desc">High-Low</option>
            </select>
          </span>
        </div>
        <div className="AllContentHere">
          <div id="filter">
            <div id="filterDiv">
              <p>Gender</p>
              <select
                name=""
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <hr />

            <div>
              <p>Category</p>
              <select
                name=""
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="shirt">Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="kurtas">Kurtas</option>
                <option value="sarees">Sarees</option>
                <option value="shoes">Shoes</option>
                <option value="sandals">Sandal</option>
              </select>
            </div>
            <hr />
            <div>
              <p>Color</p>
              <select
                name=""
                value={color}
                onChange={(e) => setcolor(e.target.value)}
              >
                <option value="">Select Color</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="Nevy">Nevy</option>
                <option value="Green">Green</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div style={{ width: "100%", margin: "auto" }}>
              <Spinner
                thickness="3px"
                speed="0.600s"
                emptyColor="gray.200"
                color="black.500"
                size="xl"
              />
            </div>
          ) : err ? (
            <h1>Something went wrong</h1>
          ) : data.length === 0 ? (
            <div style={{ width: "100%", margin: "auto" }}><h1>Data not found</h1></div>
          ) : (
            <div className="showAllCard">
              {data.map((e, i) => (
                <Card key={e.id} {...e} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
