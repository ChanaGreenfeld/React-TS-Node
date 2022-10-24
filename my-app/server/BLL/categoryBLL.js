const data = require("jsonfile");
//import data from 'jsonfile'
const CategoryModel = require("../Models/categoryModels")
// import CategoryModel from '../Models/categoryModels'

const GatAll = () => {
  return new Promise((resolve) => {
    CategoryModel.find({}, function (err, dataProd) {
      if (err) {
        console.log(err);
      } else {
        resolve(dataProd);
      }
    });
  });
};

const GetCatById = (code) => {
  return new Promise((resolve) => {
    CategoryModel.findById(code, function (err, dataCat) {
      if (err) console.log(err);
      else {
        // let result = dataProd.categories.find((x) => x.codeCategory == code);
        // resolve(result);
        resolve(dataCat);
      }
    });
  });
};

const AddCategory= (newCategory) => {
  return new Promise((resolve)=>{
    let cat= new CategoryModel({
      nameCategory:newCategory.nameCategory,
      codeCategory:newCategory.codeCategory
    })
    cat.save( function (err) {
      if (err) console.log(err);
      else 
      resolve("good");
  });
});
};


const EditCategory= (code,newCategory) => {
  return new Promise((resolve)=>{
     CategoryModel.findByIdAndUpdate(code,{
      nameCategory:newCategory.nameCategory,
      codeCategory:newCategory.codeCategory
     }
      , function (err) {
      if (err) console.log(err);
      else {
        resolve("good");
      }
  });
});
};

const DeleteCategory = (code) => {
  return new Promise((resolve)=>{
     CategoryModel.findByIdAndDelete(code, function (err, datacat) {
      if (err) console.log(err);
      else {
        resolve(datacat);
      }
  });
});
};


module.exports = { GatAll, GetCatById ,AddCategory ,EditCategory, DeleteCategory};
