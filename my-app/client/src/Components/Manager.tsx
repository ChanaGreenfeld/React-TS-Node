import React from "react";
import Form from "./Form";
import './navbarc.css';
import productService from "../Service/productService";
import { Product } from "../data";



type MyState = {
    delete:boolean;
    edit:boolean;
    add:boolean;
  };

class Manager extends React.Component{
    temp={
        name:"",
        code:0,
        codeCat:0,
        price:0,
        units:0,
        pic:"/MusicNes/logo.png"
    }

    tempAdd={
        name:"",
        code:0,
        codeCat:0,
        price:0,
        units:0,
        pic:"/MusicNes/logo.png"
    }

    state: MyState = {
        delete: false,
        edit:false,
        add:false
    };

    EditProduct=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        this.temp.name=((event.target as HTMLFormElement)[0] as HTMLInputElement).value
        this.temp.code=parseInt(((event.target as HTMLFormElement)[1] as HTMLInputElement).value);
        this.temp.codeCat=parseInt(((event.target as HTMLFormElement)[2] as HTMLInputElement).value);
        this.temp.price=parseInt(((event.target as HTMLFormElement)[3] as HTMLInputElement).value);
        this.temp.units=parseInt(((event.target as HTMLFormElement)[4] as HTMLInputElement).value);
     //   productsListg.updateProduct(this.temp.name,this.temp.code,this.temp.codeCat,this.temp.price,this.temp.units)
        let newProd= new Product(this.temp.name,this.temp.code,this.temp.codeCat,this.temp.price, this.temp.units,this.temp.pic)
        productService.EditProduct(this.temp.code,newProd).then((res:any) => { console.log(res)}).catch((err:any) => console.log(err));
        this.setState( {delete: false,edit:false, add:false})
    }


      
    AddProduct =(event:React.FormEvent<HTMLFormElement>) =>{    
        event.preventDefault()
        this.tempAdd.name=((event.target as HTMLFormElement)[0] as HTMLInputElement).value
        this.tempAdd.code=parseInt(((event.target as HTMLFormElement)[1] as HTMLInputElement).value);
        this.tempAdd.codeCat=parseInt(((event.target as HTMLFormElement)[2] as HTMLInputElement).value);
        this.tempAdd.price=parseInt(((event.target as HTMLFormElement)[3] as HTMLInputElement).value);
        this.tempAdd.units=parseInt(((event.target as HTMLFormElement)[4] as HTMLInputElement).value);
        let newProd=new Product(this.tempAdd.name,this.tempAdd.code,this.tempAdd.codeCat,this.tempAdd.price, this.tempAdd.units,this.tempAdd.pic)
        productService.AddProduct(newProd).then((res:any) => {           
            console.log(res)}).catch((err:any) => console.log(err));
        this.setState( {delete: false,edit:false, add:false})
    }

    DeleteProduct=(event:React.FormEvent<HTMLFormElement>)=>{
        debugger
        event.preventDefault();
        let code =((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
        productService.DeleteProduct(code).then((res:any) => { console.log(res)}).catch((err:any) => console.log(err));
        debugger
        this.setState( {delete: false,edit:false, add:false})
        debugger
    }

    render() {
        return <>
        <input type="button" className="btn" value="Delete Product" onClick={()=>{this.setState({delete:!this.state.delete, edit:false,add:false})}}/>
        <input type="button" className="btn" value="Add Product" onClick={()=>{this.setState({delete:false, edit:false,add:!this.state.add})}}/>
        <input type="button" className="btn" value="Edit Product" onClick={()=>{this.setState({delete:false, edit:!this.state.edit,add:false})}}/>
        
        {
            this.state.delete &&
            <form onSubmit={this.DeleteProduct}>
                <input type="text"  className="inpt" placeholder="Enter Code Product To Delete" id="del"/>
                <input type="submit" className="btn" value="SUBMIT"/>
            </form>
        }
        {
            this.state.add  && 
            <>
             <p>Add Product</p>
           <Form SubmitFunction={this.AddProduct}></Form>
           </>
        }
        {
            this.state.edit  && 
           <>
            <p>Edit Product</p>
            <Form SubmitFunction={this.EditProduct}></Form>
            </>
        }
        </>
    }
    
    }
   
export default Manager;