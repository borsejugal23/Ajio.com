import React, { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import Navbar from "../LandingPage/Navbar";
import { Footer } from "../LandingPage/Footer";
import "../styles/Singlepage 1.css"
import Offerimg from "../Pictures/Screenshot 2023-04-01 165143.png"
// import { BsBagCheck } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';


export const SinglePage=()=>{
const {id}=useParams();
const [data,setdata]=useState([])
const [size, setSize]= useState("")

function handleSize(e){
   setSize(e.target.value)
}

const fechSingleproduct=(id)=>{
return axios.get(`http://localhost:8080/products/${id}`)
.then((res)=>{
    setdata(res.data)
    
})
}


async function handlePostData(){
   if (size){

   
 try {
   let res= await fetch("http://localhost:8080/cart",{
      method:"POST",
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify({...data, size:size})
   });
   // if (res.ok){
   //    setSize("")
   // }
   alert("Product Added Successfuly")
   console.log(res)
 } catch (error) {
   console.log(error)
 }
}
else{
   alert("Select The Size First")
}
 
}
useEffect(()=>{
   fechSingleproduct(id)
   
},[id])

const {image,title,color,description,price,category}=data

    return <div>
       <Navbar/>
          <div className="flexDiv">
            <div>
               <img src={image} alt="error" />
            </div>
            <div>
               <p style={{color:"gold",fontWeight:"bolder"}}>{title}</p>
               <p>{description}</p>
               <br />
               <span style={{color:"green"}}>MRP ₹{price}</span>
               <p>Price inclusive of all taxes</p>
               <img style={{width:"70%",marginLeft:"10%"}}src={Offerimg} alt="error" />
               <br />
               <p>{color}</p>
               <div style={{width:"7%",height:"5%",margin:"auto",borderRadius:"50%",backgroundColor:`${color}`}}></div>
               <p>Size</p>

               <div>
                  
                     <Button onClick={handleSize} value= {`${category==="jeans"?"28":category==="shirt"?"S":category==="kurtas"?"S": category==="sarees"?"S":category==="shoes"?"6":category==="sandals"?"5":""}`} variant="outline-info"> 
                           {`${category==="jeans"?"28":category==="shirt"?"S":category==="kurtas"?"S": category==="sarees"?"S":category==="shoes"?"6":category==="sandals"?"5":""}`}
                     </Button>{' '}

                     <Button onClick={handleSize} value= {`${category==="jeans"?"30":category==="shirt"?"M":category==="kurtas"?"M":category==="sarees"?"FS":category==="shoes"?"7":category==="sandals"?"6":""}`} variant="outline-info">
                           {`${category==="jeans"?"30":category==="shirt"?"M":category==="kurtas"?"M":category==="sarees"?"FS":category==="shoes"?"7":category==="sandals"?"6":""}`}
                        </Button>{' '}

                     <Button onClick={handleSize} value={`${category==="jeans"?"32":category==="shirt"?"L":category==="kurtas"?"L":category==="sarees"?"HS":category==="shoes"?"8":category==="sandals"?"7":""}`} variant="outline-info">
                           {`${category==="jeans"?"32":category==="shirt"?"L":category==="kurtas"?"L":category==="sarees"?"HS":category==="shoes"?"8":category==="sandals"?"7":""}`}
                     </Button>{' '}

                     <Button onClick={handleSize} value={`${category==="jeans"?"34":category==="shirt"?"Xl":category==="kurtas"?"XL":category==="sarees"?"WS":category==="shoes"?"9":category==="sandals"?"8":""}`} variant="outline-info"> 
                           {`${category==="jeans"?"34":category==="shirt"?"Xl":category==="kurtas"?"XL":category==="sarees"?"WS":category==="shoes"?"9":category==="sandals"?"8":""}`}
                     </Button>{' '}

               </div>
               <br />
               <br />
               <button id="cartBtn" onClick={handlePostData}>ADD TO BAG</button>
               <br />
               <br />
               <br />
               <button id="wishBtn">SAVE TO WISHLIST</button>
            </div>
          </div>
       <div style={{marginTop:"50px"}}>
       <Footer/>
       </div>
    </div>
}