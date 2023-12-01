
import axios from "axios";


const getdata=(paramsObj)=>{
    // console.log(paramsObj)
    // console.log(paramsObj._order) https://json-mock-cp-bp2n.onrender.com/
    return axios.get(`https://json-mock-cp-bp2n.onrender.com/products?${paramsObj._order?`_sort=price&_order=${paramsObj._order}`:""}${paramsObj.category?`&category=${paramsObj.category}`:""}${paramsObj.gender?`&gender=${paramsObj.gender}`:""}${paramsObj.color?`&color=${paramsObj.color}`:""}`) 
        // https://wvqmdk-8080.csb.app/products
}

export {getdata}