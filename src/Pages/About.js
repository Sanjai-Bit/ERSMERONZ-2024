import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className=" max-sm:-mt-20 relative max-w-[100vw] min-h-[100vh] bg-black flex flex-col items-center gap-5 justify-center text-center"
    >
      
      <p className=" text-primary text-xl  flex items-center justify-center gap-4">
        {" "}
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM13 10V5l-5 7h3v5l5-7h-3z" />
        </svg>
        Let You Know
      </p>
      
      <p className="  text-3xl max-sm:text-xl max-sm:w-full max-sm:px-10 w-3/5">
        ERSMERONZ’24 - A National level Techno Fest organized by the Department
        of Electronics & Instrumentation Engineering at <span className=" text-white">Bannari Amman Institute
        of Technology</span> (BIT). It is poised to be a platform where the brightest
        minds across the nation come together to showcase their ingenuity
        and contribute to the ever-evolving landscape of technology.
      </p>
     
    </div>
    
  );
};

export default About;
