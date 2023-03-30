import Navbar from "../LandingPage/Navbar"
import { useReducer,useEffect } from "react";
import { getdata } from "../Pages/api";
import { Card } from "./Card";
import "../styles/Product.css"
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

    const fetchAllProducts=()=>{
        dispatch({type:"Fetch_Loading"});
        getdata().then((res)=>{
            dispatch({type:"Fetch_Success",payload:res?.data});
            console.log(res.data)
        })
        .catch(()=>{
            dispatch({type:"Fetch_Error"})
          })
    }

    
useEffect(()=>{
   fetchAllProducts()
},[])
   

const {loading,data,err}=state


return <>

<Navbar/>
<div>
    <div id="shortData">
        <span>SHORT BY {" "}
         <select name="" id="">
            <option value="lower_first">Low Price</option>
            <option value="higher_first">High Price</option>
            
        </select>
        </span>
    </div>
<div className="AllContentHere">
    <div id="filter"></div>
    {loading?(<h1>loading...</h1>):err?(<h1>something went wrong</h1>):<div className="showAllCard">{data.map((e,i)=><Card key={e.id}{...e} />)}</div>}
</div>
</div>

</>
}