import axios from "axios";
import { Category } from "../data";

const URL = "api/category/"
  // fetching the GET route from the Express server which matches the GET route from server.js

  const  test =  () => {
    const all = [axios.get(`http://localhost:8000/api/TLx6uklHnb`), axios.get(`http://localhost:8000/api/TLx6uklHnb`),axios.get(`http://localhost:8000/api/TLx6uklHnb`)
  ]
    return Promise.all(all)
    // return axios.get(`http://localhost:8000/api/hm7C1PQbj`).then((res) => {return})
    // .catch((err: Error) => console.log(err));
   };
  const  GetAllCategory =  () => {
   return axios.get(`${URL}GetAllCategories`).then((res) => res.data)
   .catch((err: Error) => console.log(err));
  };
  

  const  GetCatById = (id:number) => {
    return axios.get(`${URL}GetCategoryById/${id}`).then((res) => res.data)
    .catch((err: Error) => console.log(err))
  };


  const  EditCategory =  (id:number,newCat:any) => {
    return  axios.put(`${URL}EditCategory/${id}`,newCat).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };


  const  AddCategory =  (newCat:any) => {
     return axios.post(`${URL}AddCategory`,newCat).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };
 

  const  DeleteCategory =  (id:number) => {
    return axios.delete(`${URL}DeleteCategory${id}`).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };
 
  const add=(num1:number,num2:number)=>{
    return num1+num2;
  }
   
  export default {GetAllCategory, DeleteCategory, AddCategory, EditCategory, GetCatById,add,test}