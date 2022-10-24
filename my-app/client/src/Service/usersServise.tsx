import { Users } from "../data";
import axios from 'axios'

const URL = "api/users/"


const LoginUser =async(usemail:string,uspass:string)=>{
debugger
  let obj= {
        "email":usemail,
        "password":uspass
      } 
      debugger
  const data= axios.post(`${URL}Login/`,obj).then((res) => res.data);
  return data.then(async res=> {
    debugger
    sessionStorage.setItem( "token", res.accessToken);
    console.log('login user fun',res.accessToken)
  })
  .catch((err: Error) => console.log(err));  
}

  const  GetAllUsers =  () => {
    return axios.get(`${URL}GetAll`).then((res) => res.data)
   .catch((err: Error) => console.log(err));
  };


  const  GetUserById =  (id:number) => {
    return axios.get(`${URL}GetUserById/${id}`).then((res) => res.data)
    .catch((err: Error) => console.log(err))
  };

  const  EditUser =  (id:number,newUser:Users) => {
    return axios.put(`${URL}EditUser/${id}`,newUser).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };
  
  const  AddUser =  (newUser:any) => {
   return axios.post(`${URL}AddUser`,newUser).then((res)=>res.data)
    .catch((err: Error) => console.log(err))
  };

    const  DeleteUser = (id:number) => {
      return axios.delete(`${URL}DeleteUser${id}`).then((res)=>res.data)   
      .catch((err: Error) => console.log(err))
    };


  export default {GetUserById,GetAllUsers,EditUser,AddUser,DeleteUser,LoginUser};