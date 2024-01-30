import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SubeventPage = () => {
  return (
    <div
      id="Events"
      className=" max-w-[100vw] pt-20 flex-col min-h-[100vh] gap-10 bg-black flex items-center justify-center relative"
    >
      <p className=" text-primary  flex items-center justify-center gap-4 text-xl">
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" />
        </svg>
        Ignite Your Innovation
      </p>
      <p className=" text-center max-sm:text-2xl text-5xl text w-2/3">
        Join us with a celebration of technology like never before.
      </p>
      <div className="  mt-10 flex max-sm:flex-col  items-center justify-center gap-10">
        <Link
          to={"events"} state={{ name: 'DayOne' }}
          className=" max-sm:w-60 flex items-center justify-center group gap-5  relative z-10 hover:bg-primary hover:bg-none hover:text-black   bg text-primary  shadow-2xl shadow-primary/50   ring-4 ring-offset-2 ring-offset-primary ring-primary/30 p-3 px-5 text-lg font-light rounded-full  "
        >
          Day One Events
          <FaArrowTrendUp className=" text-primary group-hover:text-black" />
        </Link>

        <Link
          to={"events"} state={{ name: 'Daytwo' }}
          className=" max-sm:w-60 flex items-center justify-center gap-5 group  relative z-10 hover:bg-primary hover:bg-none hover:text-black   bg text-primary  shadow-2xl shadow-primary/50   ring-4 ring-offset-2 ring-offset-primary ring-primary/30 p-3 px-5 text-lg font-light rounded-full  "
        >
          Day Two Events
          <FaArrowTrendUp className=" group-hover:text-black text-primary" />
        </Link>


      </div>
      <a
        href="https://drive.google.com/file/d/1P-_lr5KRFn1NSdRDk3KfJUuxBdF55zJC/view?usp=sharing"
        className=" z-20  flex items-center justify-center gap-2 "
      >
        To view Rulebook
        <span className=" text-white underline underline-offset-2">Event Rulebook</span>
        <FaArrowTrendUp className=" text-primary underline" />
      </a>
    </div>

  );
};

export default SubeventPage;
