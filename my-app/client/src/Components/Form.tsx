import React from "react";
import "./navbarc.css";

type propsF={
    SubmitFunction:(event :React.FormEvent<HTMLFormElement>)=>void;
}

function Form({SubmitFunction}:propsF) {


    return (
      <>
      <form onSubmit={SubmitFunction}>
            
            <input type="text" className="inpt" min="0" placeholder="Enter Name" ></input>   
            <input type="text" className="inpt" min="0" placeholder="Enter code"></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter codeCategory" ></input>   
            <input type="number" className="inpt" min="0" placeholder="Enter Price"></input>   
            <input type="number"className="inpt" min="0" placeholder="Enter Unit"></input>     
            <input type="submit" className="btn" value="SUBMIT"/>
            </form>
      </>
    );
  }

export default  Form;

