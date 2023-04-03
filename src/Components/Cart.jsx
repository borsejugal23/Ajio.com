import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./LandingPage/Navbar"
import { Footer } from "./LandingPage/Footer"
import Cartimg from "./Pictures/Screenshot 2023-04-02 003021.png"
import "./styles/cart.css"
import Button from 'react-bootstrap/Button';
export function Cart(){
   
  const navigate = useNavigate();
  const [data,setData]=useState([])
  const [select,setSelect]=useState([])

const receiveDatafromSinglePage=()=>{
  return axios.get("http://localhost:8080/cart")
  .then((res)=>{
    // console.log(res.data)
    setData(res.data)
  })
}

const handleDelet=(e)=>{
const {value}=e.target
return axios.delete(`http://localhost:8080/cart/${value}`)
.then(()=>receiveDatafromSinglePage())

}

const handleSelect = (e, id) => {
  const { value } = e.target;
  setSelect((prevData) => {
    return prevData.map((item) => {
      if (item.id === id) {
        return { ...item, select: value };
      } else {
        return item;
      }
    });
  });
};

const totalPrice = data.reduce((acc, item) => acc + item.price, 0);
const Navigate_to_payment=()=>{
  localStorage.setItem('amount', totalPrice);
  
  navigate('/payment');
} 
console.log(totalPrice)
useEffect(()=>{
  receiveDatafromSinglePage()
},[])

return <div>
<Navbar/>
<div id="grandparent">
  <img style={{width:"95%",margin:"15px 10px 15px 28px"}}src={Cartimg} alt="error" />
  
  <div id="stepparent">
      <div style={{width:"70%"}}>
      {data.map((e)=>
    <div id="parent" key={e.id}>
        <div >
          <img src={e.image} alt="error" />
        </div>
          <div>
            <span>{e.title}</span>
            <br />
            <br />
            <p>color: <span>{e.color}</span></p>
            <p>Size: {e.size}</p>
          </div>

          <div>
            <select style={{border:"1px solid teal",marginTop:"10px"}}name={e.id} value={e.select}
                    onChange={(e) => handleSelect(e, e.id)}>
              <option value="1">Qty:1</option>
              <option value="2">Qty:2</option>
              <option value="3">Qty:3</option>
              <option value="4">Qty:4</option>
              <option value="5">Qty:5</option>
            </select>
          </div>

          <div className="container">
            <span style={{color:"green"}}>₹{e.price}</span>
          <Button className="bottom-btn" variant="outline-danger" value={e.id} onClick={handleDelet}>Remove</Button>{' '}
          </div>
    </div>
    )}
      </div>
      <div id="TotalCost">
        <br />
          <span style={{fontWeight:"bold"}}>Order Details</span>
          <br />
          <br />
         <div id="Made_it_flex">
          <span>Bag total</span>
          <span>₹{totalPrice}</span>
         </div>
         <div id="Made_it_flex">
          <span>Bag discount</span><span>No</span>
         </div >
         <div id="Made_it_flex">
          <span>Delivery charges</span><span>Free</span>
         </div>
         <div id="Made_it_flex">
          <span>Order Total</span><span>₹{totalPrice}</span>
        
         </div>
           <br />
           <button  id ="checkoutbtn" onClick={Navigate_to_payment}>PROCEED TO SHIPPING</button>
      </div>
    </div>
        
 
  

</div>
<Footer/>
</div>
}