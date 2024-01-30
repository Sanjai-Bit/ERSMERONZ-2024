import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const link = ["Home", "About", "Events", "Contact"];
  return (
    <div className=" fixed w-full top-0 flex max-sm:mt-5 items-center justify-center max-sm:p-5  z-50 p-10 ">
      <div className=" flex items-center justify-center backdrop-blur-md  gap-4 border max-sm:text-xs  max-sm:px-10 px-10 p-4 max-sm:p-3 rounded-full bg-secondary/10 border-secondary/20">
        {link &&
          link.map((l) => {
            return <Link to={l} spy={true} 
            smooth={true} 
            className=" active:text-primary cursor-pointer"
            duration={500} >{l}</Link>;
          })}
      </div>
    </div>
  );
};
