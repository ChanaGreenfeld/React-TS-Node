import React from  "react";
import {shallow} from 'enzyme';
import View from "../Components/View";


describe("Product Testing",()=>{

    it('See Product Details testing',()=>{   
        const view=shallow(<View/>);       
        expect(((view.state()) as any ).yes).toEqual(false);       
    })
      
})