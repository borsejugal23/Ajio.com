
import axios from "axios";


const getdata=(ParamsObj)=>{
    console.log(ParamsObj)
    return axios.get(`http://localhost:8080/products?${ParamsObj.order?`_sort=price&_order=${ParamsObj.order}`:""}${ParamsObj.gender?`&gender=${ParamsObj.gender}`:""}${ParamsObj.color?`&color=${ParamsObj.color}`:""}${ParamsObj.category?`&category=${ParamsObj.category}`:""}`)
}

export {getdata}