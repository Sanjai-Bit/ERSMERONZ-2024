import React from "react";
import { useLocation } from "react-router-dom";

const Rules = () => {
  const location = useLocation();
  return (
    <div className=" max-w-[100vw] max-sm:px-10 pt-20 px-80 flex-col text-secondary min-h-[110vh] gap-10 bg-black flex items-center justify-center relative">
        <p className=" text text-4xl max-sm:text-2xl -mt-20 max-sm:mt-10 text-center"><b>RULES AND REGULATIONS</b></p>
       
        <ul className=" max-sm:pb-20 list-disc list-outside space-y-5 max-sm:pl-5 pl-20">
            {
                location.state && location.state.Rules.map((r) => {return (<li className=" text-xl">{r}</li>)})    
                
            }
        </ul>
        
    </div>
    
  );
};


export default Rules;
