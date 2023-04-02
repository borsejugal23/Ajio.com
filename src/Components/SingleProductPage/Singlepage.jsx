import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import { Footer } from "../LandingPage/Footer";
import "../styles/SinglePage.css";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function SinglePage() {
  const [data, setData] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { id } = useParams();

  const receiveDatafromSinglePage = (id) => {
    return axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setData(res.data);
    });
  };

  const handleSizeSelect = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleColorSelect = (e) => {
    setSelectedColor(e.target.value);
  };

  const addToCart = () => {
    const cartData = {
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      size: selectedSize,
      
    };

    axios
      .post("http://localhost:8080/cart", cartData)
      .then((res) => {
        alert("Added to cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    receiveDatafromSinglePage(id);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div id="singlepagegrandparent">
        <div id="singlepageparent">
          <img src={data.image} alt="error" />

          <div id="rightchild">
            <h1>{data.title}</h1>
            <h3>₹{data.price}</h3>
            <br />

            <p>{data.description}</p>

            <br />
            <br />
            <div id="sizeAndColorSelection">
              <select
                className="sizeSelect"
                name="size"
                onChange={handleSizeSelect}
              >
                <option value="">Select size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select
                className="colorSelect"
                name="color"
                onChange={handleColorSelect}
              >
                <option value="">Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
              </select>
            </div>

            <br />
            <br />
            <Button variant="outline-dark" onClick={addToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
