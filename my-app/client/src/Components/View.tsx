// import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { eventNames } from "process";
import React, { ChangeEvent } from "react";
import {Product,ProductsList,Category}from "../data";
import About from "./About";
import productService from "../Service/productService";
import {OrginalProductList} from '../data'
import {categoriesList} from '../data'
import categoryService from "../Service/categoryService";

type MyState = {
    subProductsList: Array<Product>;
    categories:Array<Category>;
    yes:boolean;
    load:boolean;
};

class View extends React.Component{

  pic:string =""

  state: MyState = {
    subProductsList: OrginalProductList.getProductsList,
    categories:categoriesList.getCategories,
    yes:false,
    load:true,
  };

constructor(props:any) {
  debugger
  super(props);
  OrginalProductList.getProductsList.splice(0, OrginalProductList.getProductsList.length);
  categoriesList.getCategories.splice(0,categoriesList.getCategories.length)
  
  this.AllProducts();
  this.AllCategory();
  
  //save in the local storage
  // localStorage.setItem('myData', JSON.stringify(this.state.subProductsList));
  // console.log(localStorage.getItem('myData'));
}

AllProducts=()=>{
 debugger
  productService.
  GetAllProduct()
  .then((res:Array<any>) => {
    debugger
     let temp :Array<Product>=[];
      for (let i = 0; i < res.length; i++) {
        debugger
        let item=res[i];
        let prod= new Product(item.name,item.code,item.codeCategory,item.price,item.units,item.pic);
        OrginalProductList.addProduct(item.name,(item.code),item.codeCategory,item.price,item.units,item.pic)
        temp.push(prod);      
      }      
      console.log(OrginalProductList.getProductsList);
      //התחכמות כי זה הציג לי פעמיים
    OrginalProductList.getProductsList.splice(31, OrginalProductList.getProductsList.length);
    this.setState({subProductsList:OrginalProductList.getProductsList})    
    this.setState({load:false})
    })
  .catch((err:any) =>{ debugger
   console.log(err)});
}

AllCategory=()=>{
  categoryService.
  GetAllCategory()
  .then((res:Array<any>) => {
     let temp :Array<Category>=[];
      for (let i = 0; i < res.length; i++) {
        let item=res[i];
        let prod= new Category(item.nameCategory,item.codeCategory);
        categoriesList.addCategory(item.nameCategory,item.codeCategory)
        temp.push(prod);      
      }      
      debugger
      categoriesList.getCategories.splice(4,categoriesList.getCategories.length);
      this.setState({categories:categoriesList.getCategories})      
    })
  .catch((err:any) => console.log(err));
}

    viewProd=(item : Product)=>{  
      this.setState({yes:true})
      this.pic=item.picture;
    }

    back=()=>{
      this.setState({yes:false})
    }

    searchFilter=(event:ChangeEvent)=>{
    let str=(event.target as HTMLInputElement).value.toUpperCase();
    debugger
    let arr= OrginalProductList.getProductsList.filter(x=>x.productName.toUpperCase().indexOf(str)>-1)
    this.setState({subProductsList:arr});
    }

    searchByCategory=(event:ChangeEvent)=>{
      debugger
      let temp = (event.target as HTMLInputElement).value[0];
      if(temp=='S'){
      this.setState({subProductsList:OrginalProductList.getProductsList});
      }
      else{
      let arr = OrginalProductList.getProductsByCodeCategory(temp);
      this.setState({subProductsList:arr});
      }
    }

    outOfStack=()=>{
      let arr = OrginalProductList.OutOfStockProductsfun();
      this.setState({ subProductsList :arr});
    }

    add=(num1:number,num2:number)=>{
return num1+num2;
    }
  render() {
   
    return (
     <>
     {
      !this.state.load &&
      <input type="text" className="serch" placeholder="Type To Search By Name..." onChange={this.searchFilter}/>
     }
      
      {
        !this.state.load &&
      
      <select className="select" id="select" onChange={this.searchByCategory}>
        <option>Search By Category</option>
        {
          !this.state.yes &&
          this.state.categories  != undefined &&
          this.state.categories.length > 0 &&
          this.state.categories.map((item) => (       
            <>
            <option>{item.gcodeCategory}.{item.gnameCategory}</option>
            </> 
        ))}
      </select>
      }
      {
        !this.state.load &&
        <input type="button" className="select" value="out of stack" onClick={this.outOfStack}/>
      }
      <div className="bigdiv">
   {
    this.state.load &&
    <div className="loader"></div>
   }
    {      
    
      !this.state.yes &&
      this.state.subProductsList  != undefined &&
      this.state.subProductsList.length > 0 &&
      this.state.subProductsList.map((item) => (       
        <>         
        <div className="prdct"> 
            <h3>{item.productName}</h3>
            {/* <span> code: {item.productCode}</span> */}
            <span>Category: {item.productCategory}</span>
            <span>Price: {item.productPrice} $</span>
            <span> Units: {item.productUnits} </span>
            <h6>Click To see big</h6>
            <img src={item.picture} onClick={() => this.viewProd(item)}  title="click me"></img>
          </div>  
        </>   
      ))
       
    }
      </div>
      
      {
        this.state.yes &&
        <>
        <img src={this.pic} className="bigimg"></img>
        <button className="btn" onClick={()=>this.back()}>back</button>
        </>
      }
      {/* { <MDBTable>
          <MDBTableHead>
            <tr>
              <th>productName</th>
              <th>productCode</th>
              <th>productCategory</th>
              <th>productPrice</th>
              <th>productUnits</th>
              <th>picture</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            { this.state.subProductsList  != undefined &&
              this.state.subProductsList.length > 0 &&
              this.state.subProductsList.map((item) => (
                <>
                  <tr>
                    <td>{item.getProductCode}</td>
                    <td>{item.getProductName}</td>
                    <td>{item.getProductCategory}</td>
                    <td>{item.getProductPrice}</td>
                    <td>{item.getProductUnits}</td>
                    <td><img key="{item.getProductCode}" src={item.getPicture}></img></td>
                  </tr>
                </>
              ))
            }
          </MDBTableBody>
        </MDBTable> } */}
    </>
    );
  }
}
export default View;