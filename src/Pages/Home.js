import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import robo from '../image/robo.json'
import Lottie from "lottie-react";
const Home = () => {
  return (
    <div
      id="Home"
      className=" relative max-w-[100vw] min-h-[100vh]   text-center bg-black"
    >
      
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className=" absolute -top-40 scale-[2] bg-primary/20 rounded-full blur-3xl w-1/2 h-1/2 max-sm:-top-28 "></div>
      </div>
      <div className="relative flex items-center justify-center flex-col">

        <p className=" text font-mokoto mt-40 max-sm:mt-36 text-[150px] max-sm:tracking-tight tracking-wide max-sm:text-5xl ">Ersmeronz'24</p>

        <p className=" relative text-primary  w-1/2 max-sm:w-full max-sm:mt-2 max-sm:text-xs  -mt-10 max-sm:px-10 tracking-widest    z-10">
          A National-Level Techno Fest
        </p>
        <div className="text-4xl max-sm:mt-5 mt-10 max-sm:text-sm max-sm:px-5 flex items-center justify-center flex-col gap-2">
          <p className="text font-bold text-4xl max-sm:text-xl">MARCH 01 & 02 - 2024</p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9ZRc35oRtCPh-wgbRFazPwDvP__uDQ4R00bek8DIbkFpaHw/viewform"

          className="  max-sm:z-40 max-sm:mt-40 mt-10 w-80 max-sm:w-60 max-sm:p-1 relative z-10 hover:bg-primary hover:bg-none hover:text-black   bg text-primary  shadow-2xl shadow-primary/50   ring-4 ring-offset-2 ring-offset-primary ring-primary/30 p-3 px-5 text-lg font-light rounded-full  "
        >

          Register Now
        </a>
      </div>
      <div className=" w-[100vw]   h-96  flex items-center   justify-between px-40 absolute z-30 -bottom-48 max-sm:-bottom-24  max-sm:px-2">

        <Lottie animationData={robo} className=" max-sm:ml-28 max-sm:h-40 max-sm:-mt-[400px]  absolute h-96 ml-96" />

        <div className=" text-3xl max-sm:text-sm  max-sm:px-5 flex items-center justify-center flex-col gap-2  "><FaArrowTrendUp className=" text-primary" /><p className=" text">Bannari Amman <br></br> Institute of Technology</p></div>
        <div className="  max-sm:text-sm  text-3xl flex items-center justify-center flex-col gap-2   "><FaArrowTrendUp className=" text-primary" /><p className=" text">Department of Electronics <br></br> and Instrumentation Engineering</p></div>
      </div>

    </div>

  );
};

export default Home;
