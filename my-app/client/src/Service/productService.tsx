import { Product } from "../data";
import axios from 'axios'

let token = sessionStorage.getItem("token");


const URL = "api/products/"
  // fetching the GET route from the Express server which matches the GET route from server.js
  const  GetAllProduct =  () => {
    return  axios.get(`${URL}GetAllProducts` , 
    { headers:{
      'Authorization': 'Bearer '+ token
    }},
   ).then((res)=>res.data)
   .catch((err:Error)=>console.log(err) )
  };


  const  GetProductById =  (id:number) => {
     return axios.get(`${URL}GetProductById/${id}`).then((res) => res.data)
    .catch((err: Error) => console.log(err))
  };

 
  const  DeleteProduct =  (id:string) => {
    debugger
    return axios.delete(`${URL}DeleteProduct/${id}`).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };


  const  EditProduct =  (id:number,newProd:Product) => {
    return axios.put(`${URL}EditProduct/${id}`,newProd).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };
  

  const  AddProduct =  (newProd:any) => {
    return axios.post(`${URL}AddProduct`,newProd).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };

  
export default {GetAllProduct,DeleteProduct,AddProduct,EditProduct,GetProductById}
