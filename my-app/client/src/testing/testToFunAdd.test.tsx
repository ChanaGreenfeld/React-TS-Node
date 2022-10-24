import React from  "react";
import categoryService from '../Service/categoryService'

describe("Product Testing",()=>{

    it('See add',()=>{   
      const result= categoryService.add(3,6);   
      expect(result).toEqual(9);       
    }) 
})
