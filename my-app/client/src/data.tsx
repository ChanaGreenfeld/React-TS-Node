import productService from "./Service/productService";


export class Product {

   private name:string;
   private code:number;
   private codeCategory:number;
   private price:number;
   private units:number;
   private pic:string;

    constructor(productName:string, productCode:number, productCategory:number, productPrice:number, productUnits:number, picture:string) {
        this.name = productName;
        this.code = productCode;
        this.codeCategory = productCategory;
        this.price = productPrice;
        this.units = productUnits;
        this.pic = picture;
    }


    public get productName ():string {return this.name };
    public get productCode ():number { return this.code };
    public get productCategory ():number { return this.codeCategory };
    public get productPrice ():number { return this.price };
    public get productUnits ():number { return this.units };
    public get picture ():string { return this.pic };

    
    public set setproductName(productName:string) {
        this.name = productName;
    }

    public set setProductPrice(productPrice:number) {
        this.price = productPrice;
    }
    
    public set setProductUnits(productUnits:number) {
        this.units = productUnits;
    }
}


export class ProductsList {

   private productsList:Array<Product>=[];

    constructor() {
    }

    public get getProductsList():Array<Product> { return this.productsList }

    addProduct(name:string, code:number, cat:number, price:number, unit:number, pic:string) {
        let newProd = new Product(name, code, cat, price, unit, pic)
        this.productsList.push(newProd);
    }
    updateProduct(name:string, code:number, cat:number, price:number, unit:number) {
        const index = this.productsList.findIndex(x => x.productCode == code)
        this.productsList[index].setproductName = name;
        this.productsList[index].setProductPrice = price;
        this.productsList[index].setProductUnits = unit;
    }

    deleteProduct(codeProd:number) {
        const index = this.productsList.findIndex(x => x.productCode == codeProd)
        const pro = this.productsList.splice(index, 1)
    }

    getProductByName(name:string) {
        const pro = this.productsList.find(x => x.productName == name);
    }

    getProductsByPriceRange(numMin:number, numMax:number) {
        const pro = this.productsList.filter(x => x.productPrice >= numMin && x.productPrice <= numMax)
    }

    getProductsByCodeCategory(codeCategory:string) {
        const pro = this.productsList.filter(x => x.productCategory ==parseInt(codeCategory))
        return pro;
    }
    OutOfStockProductsfun() {
        const pro = this.productsList.filter(x => x.productUnits <= 10)
        return pro;
    }
}

export class Category {
    private nameCategory:string;
    private codeCategory:number;

    constructor(nameCategory:string, codeCategory:number) {
        this.nameCategory = nameCategory;
        this.codeCategory = codeCategory;
    }

    public get gnameCategory ():string { return this.nameCategory };
    public get gcodeCategory ():number { return this.codeCategory };
    public set snameCategory (name:string) {this.nameCategory=name};

}

export class CategoryList {
 
    private categories:Array<Category> = [];

   // constructor() { }

    public get getCategories():Array<Category> { return this.categories }

    addCategory = (nameCategory:string,codeCategory:number ) => {
        let newCategory = new Category(nameCategory,codeCategory)
        this.categories.push(newCategory);
    }

}

export class Manager {
    private codeManager:number;
    private nameManager:string;

    constructor(code:number, name:string) {
        this.codeManager = code;
        this.nameManager = name;
    }
    
    public get getCodeManager() { return this.codeManager }
    public get getNameManager() { return this.nameManager }
}
export class Users{
    private firstName: string | undefined;
    private lastName: string | undefined;
    private phone: string| undefined;
    private email: string| undefined;
    private address:string| undefined;
    private city: string| undefined;
    private  street: string| undefined;
    private  numBuild:number;
    
    constructor(firstName: string,lastName: string,phone: string,email: string,address:string,city: string,street: string,numBuild:number) {
       this.firstName = firstName;
       this.lastName =lastName ;
       this.phone =phone ;
       this.email = email;
       this.address =address ;
       this.city= city;
       this.street =street ;
       this.numBuild =numBuild ;
    }
    public get FirstName ():string | undefined{return this.firstName };
    public get LastName ():string | undefined{ return this.lastName };
    public get Phone ():string| undefined { return this.phone };
    public get Email ():string| undefined { return this.email };
    public get Address ():string| undefined { return this.address };
    public get City ():string| undefined { return this.city };
    public get Street ():string| undefined { return this.street };
    public get NumBuild ():number { return this.numBuild };

}
//=================================
//
//=================================
const categoriesList = new CategoryList();
const  OrginalProductList=new ProductsList();
export default {Product,ProductsList,Category,CategoryList}
// export  {categoriesList};
   
export {OrginalProductList};
export {categoriesList}
    
   
//const managers = new Manager(1234, "chani")


// categoriesList.addCategory("Keyboards", 1)
// categoriesList.addCategory("percussions", 2)
// categoriesList.addCategory("string instrument", 3)
// categoriesList.addCategory("Wind Instruments", 4)

