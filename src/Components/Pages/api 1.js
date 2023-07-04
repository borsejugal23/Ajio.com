
import axios from "axios";


const getdata=(paramsObj)=>{
    // console.log(paramsObj)
    console.log(paramsObj._order)
    return axios.get(`https://wvqmdk-8080.csb.app/products?${paramsObj._order?`_sort=price&_order=${paramsObj._order}`:""}${paramsObj.category?`&category=${paramsObj.category}`:""}${paramsObj.gender?`&gender=${paramsObj.gender}`:""}${paramsObj.color?`&color=${paramsObj.color}`:""}`) 
        
}

export {getdata}