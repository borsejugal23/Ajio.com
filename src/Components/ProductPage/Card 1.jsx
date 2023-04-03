import { useEffect, useState } from "react";
import "../styles/Card.css"
import {Link} from "react-router-dom"

export const Card = ({ id,title, description, price, color, image }) => {
  const [offer, setOffer] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(price);

  useEffect(() => {
    const offers = [
      { discount: 20 },
      { discount: 10 },
      { discount: 14 },
      { discount: 8 },
      { discount: 10 },
    ];
    const randomIndex = Math.floor(Math.random() * offers.length);
    const selectedOffer = offers[randomIndex];
    setOffer(`(${selectedOffer.discount}% off)`);

    const discountAmount = (selectedOffer.discount / 100) * price;
    const newPrice = price - discountAmount;
    setDiscountedPrice(newPrice);
  }, [price]);

  return (
    <div id="ArrangeinGrid ">
      <Link to={`/products/${id}`} style={{textDecoration:"none",color:"black"}}>
      <div className="MaintainTextHeight">
        <img id="ImgWidth"src={image} alt="title" />
        <p style={{marginTop:"8px",color:"goldenrod"}}>{title}</p>
        <p>{description}</p>
        
        <p >
          <span style={{ textDecoration: "line-through" }}>₹{price.toFixed()}</span>{" "}
          ₹{discountedPrice.toFixed()} <span style={{color:"goldenrod"}}>{offer}</span>
        </p>
        <p style={{color:"green",fontWeight:"bold",paddingBottom:"5px"}}>Offer price ₹{discountedPrice.toFixed()}</p>
      </div>
      </Link>
    </div>
  );
};
