import Navbar from "../LandingPage/Navbar"
import { useReducer,useEffect, useState } from "react";
import { getdata } from "../Pages/api";
import { Card } from "./Card";
import "../styles/Product.css";
import gridimg from "../Pictures/Screenshot 2023-04-03 003940.png"
const initstate={
    loading:false,
    data:[],
    err:false
}
function reducer(state,action){
    const {type,payload}=action;
        switch(type){
            case "Fetch_Loading":{
                return {
                    loading:true,
                    data:[],
                    err:false
                }
            }
            case "Fetch_Success":{
                return {
                    loading:false,
                    data:payload,
                    err:false
                }
            }
            case "Fetch_Error":{
                return {
                    loading:false,
                    data:[],
                    err:true
                }
            }
            case "Reset":{
                return {
                    loading:false,
                    data:[],
                    err:false
                }
            }
            default:{
               throw new Error("invalid action type")
             }
        }
    }
    
export const Allproduct=()=>{
    const [state,dispatch]=useReducer(reducer,initstate);
    const [order,setOrder]=useState("")
    const [gender,setGender]=useState("");
    const [category,setCategory]=useState("");
    const [color,setColor]=useState("")

    const fetchAllProducts=(obj)=>{
        dispatch({type:"Fetch_Loading"});
        getdata(obj).then((res)=>{
            dispatch({type:"Fetch_Success",payload:res?.data});
            // console.log(res.data)
        })
        .catch(()=>{
            dispatch({type:"Fetch_Error"})
          })
    }

const handleShort=(e)=>{
  setOrder(e.target.value)
}    
// console.log(gender)
useEffect(()=>{
    const obj={
        order:order,
        gender:gender,
        color:color,
        category:category
    }
   fetchAllProducts(obj)
},[order,gender,color,category])
   

const {loading,data,err}=state


return <>

<Navbar/>
<div>
    <div id="shortData">
        <span style={{paddingLeft:"55px"}}>FILTER BY</span>
        <span>{data.length} Items Found</span>
        <img style={{width:"13%"}}src={gridimg} alt="error" />
        <span>SHORT BY {" "}
         <select name="" value={order} onChange={handleShort}>
            <option value="">Default</option>
            <option value="asc">Low Price</option>
            <option value="desc">High Price</option>
            
        </select>
        </span>
    </div>
<div className="AllContentHere">
    <div id="filter">
        <div>
            <p><span>Gender</span></p>
            <select name="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        
        <hr />
        <div>
          <p>Category</p>
          <select name=""value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="shirt">Shirt</option>
            <option value="jeans">Jeans</option>
            <option value="sarees">Sarees</option>
            <option value="kurtas">Kurtas</option>
            <option value="shoes">Shoes</option>
            <option value="sandals">Sandal</option>
          </select>
        </div>
        
        <hr />
        <div>
            <p>Color</p>
            <select name="" value={color} onChange={(e)=>setColor(e.target.value)}>
                <option value="">Select Color</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Nevy">Nevy</option>
                <option value="Green">Green</option>
            </select>
        </div>
    </div>
    {loading?(<h1>loading...</h1>):err?(<h1>something went wrong</h1>):<div className="showAllCard">{data.map((e,i)=><Card key={e.id}{...e} />)}</div>}
</div>
</div>

</>
}