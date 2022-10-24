const ProductsModel = require("../Models/productsModels")
// import productModel from '../Models/productsModels';

const GatAll = () => {
  return new Promise((resolve) => {
    ProductsModel.find({},function(err,data){
    debugger
      if (err) {
        console.log(err);
      } else {
        resolve(data);
      }
      debugger
    });
  });
};

const GetProdById = (code) => {
  return new Promise((resolve) => {
    ProductsModel.findById(code, function (err, dataProd) {
      if (err) console.log(err);
      else {
        //let result= dataProd.find((x) => x.code == code);
        //resolve(result);
        resolve(dataProd);
      }
    });
  });
};

const AddProduct = (newProduct) => {
 
  return new Promise((resolve)=>{
    let prod = new ProductsModel({
      name: newProduct.name,
      //code:newProduct.code,
      codeCategory:newProduct.codeCategory,
      price:newProduct.price,
      units:newProduct.units,
      pic:newProduct.pic
    })
    prod.save( function (err) {
      if (err) console.log(err);
      else 
      resolve("good");
  });
});
};

const EditProduct = (code,newProduct) => {
  return new Promise((resolve)=>{
    ProductsModel.findByIdAndUpdate(code,{
      name: newProduct.name,
      //code:newProduct.code,
      codeCategory:newProduct.codeCategory,
      price:newProduct.price,
      units:newProduct.units,
      pic:newProduct.pic
    }  
    , function (err) {
      if (err) console.log(err);
      else {
        console.log("good");
        }
  });
  debugger
});
};

const DeleteProduct = (code) => {
  return new Promise((resolve)=>{
    ProductsModel.findByIdAndDelete(code,
    function (err, dataProd) {
      if (err) console.log(err);
      else {
        resolve(dataProd);
      }
  });
});
};


module.exports = { GatAll, GetProdById ,EditProduct ,AddProduct, DeleteProduct};
