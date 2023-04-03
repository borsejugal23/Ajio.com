import Navbar from "../LandingPage/Navbar"
import { useReducer,useEffect,useState } from "react";
import { getdata } from "../Pages/api 1";
import { Card } from "./Card 1";
import "../styles/Product 1.css";
import gridimg from "../Pictures/Screenshot 2023-03-31 131237.png";
import { Footer } from "../LandingPage/Footer";

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
    
    const [order,setOrder]=useState("");
    
    const [category,setCategory]=useState("")
  
    const [color,setcolor]=useState("")
    
    const [gender,setGender]=useState("")
    console.log(category,gender,color)

    const fetchAllProducts=(paramsObj
        )=>{
        dispatch({type:"Fetch_Loading"});
        getdata( paramsObj
           
        ).then((res)=>{
            dispatch({type:"Fetch_Success",payload:res?.data});
            console.log(res.data)
        })
        .catch(()=>{
            dispatch({type:"Fetch_Error"})
          })
    }

    
useEffect(()=>{
    const paramsObj ={
        _sort: "price",
            _order:  order ,
            category: category ,
            gender: gender ,
            color:  color 
    }

   fetchAllProducts(paramsObj)
},[order,category,color,gender])
   

const {loading,data,err}=state


return <>

<Navbar/>
<div>
    <div id="shortData">
   <span style={{marginLeft:"100px"}}>FILTER BY</span>
        <span>{data.length} Items Found</span>
        <img style={{width:"15%"}}src={gridimg} alt="error" />
        <span>SHORT BY {" "}
         <select name="" value={order} onChange={(e)=>setOrder(e.target.value)}>
            <option value="">Select</option>
            <option value="asc">Low Price</option>
            <option value="desc">High Price</option>
            
        </select>
        </span>
    </div>
<div className="AllContentHere">
    <div id="filter">
        
            <div id="filterDiv">
                <p >Gender</p>
                <select name="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                </select>
                
            </div>
           
           <hr />
            
            <div>
                <p >Category</p>
                <select name="" value={category} onChange={(e)=>setCategory(e.target.value)}>
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
                <p >Color</p>
                <select name="" value={color} onChange={(e)=>setcolor(e.target.value)}>
                <option value="">Select Color</option>                
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                    <option value="Grey">Grey</option>
                    <option value="Black">Black</option>
                    <option value="Nevy">Nevy</option>
                    <option value="Red">Red</option>
                </select>
                
            </div>
    </div>
    
    {loading?(<h1>loading...</h1>):err?(<h1>something went wrong</h1>):<div className="showAllCard">{data.map((e,i)=><Card key={e.id}{...e}  />)}</div>}
</div>
<Footer/>
</div>

</>
}