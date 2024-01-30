import React from "react";
import { Link } from "react-scroll";
import { FaRupeeSign } from "react-icons/fa";

const Details = () => {
  const offer = [
    {
      name: "Proffesional",
      price: 250,
      events: [
        {
          name: "Two Technical events",
          
        },
        {
          name: "One Non-technical event",
          
        },
      ],
      type: "Per Individual",
    },
    {
      name: "Proffesional",
      price: 300,
      events: [
       
        {
          name: "Two Workshops",
          
        },
      ],
      type: "Per Individual",
    },
    {
      name: "Proffesional",
      price: 300,
      events: [
        {
          name: "One Technical event",
         
        },
        {
          name: "One Non-technical event",
          
        },
        {
          name: "One Workshop",
         
        },
      ],
      type: "Per Individual",
    },
  ];
  return (
    <div
      id="Details"
      className=" relative z-20 max-w-[100vw] min-h-[100vh] max-sm:-mt-32 bg-black flex flex-col items-center gap-5 justify-center text-center"
    > 
   <p className=" text-primary text-xl  py-10 flex items-center justify-center gap-4">
      {" "}
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 11a5 5 0 015 5v6H7v-6a5 5 0 015-5zm-6.712 3.006a6.983 6.983 0 00-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 013.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0122 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
      Entry Fees
    </p>

      <div className="  grid grid-cols-3 max-sm:grid-cols-1    items-center gap-10 justify-center">
        {offer &&
          offer.map((o) => {
            return (
              <div className="  text-left w-96 max-sm:w-full max-sm:hover:scale-1  hover:ring-1 hover:ring-primary hover:scale-110 transition-all  duration-500 ease-in-out   bg-background border flex flex-col gap-5 items-start p-5 py-10 justify-start border-secondary/50 h-full     rounded-md">
                <p className=" text-primary ">{o.type}</p>
                <div>
                  <p className=" text text-7xl max-sm:-ml-20 -ml-20 -mt-2 flex"><FaRupeeSign />{o.price}</p>
                  <p className=" text-sm max-sm:text-xs text-secondary/50 font-bold">
                    only 
                  </p>
                </div>
                <div className=" max-sm:w-full border border-secondary w-full rounded-md bg flex flex-col items-start justify-center p-5 gap-5">
                  <p className="  text-white">Avails</p>
                  {o.events &&
                    o.events.map((e) => {
                      return (
                        <div className=" p-2  text-white border-b border-b-secondary/50 flex items-center w-full justify-between">
                          <p>{e.name}</p>
                          <p>{e.num}</p>
                        </div>
                      );
                    })}
                  <Link
                    to={"Events"}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className=" bg-primary text-black w-full p-2 rounded-md hover:ring-2 hover:ring-offset-1  text-center transition-all duration-500 ease-in-out hover:ring-offset-primary hover:ring-primary/30 hover:bg-black hover:text-primary shadow-xl shadow-primary/20"
                  >
                    Get Started
                  </Link>
                </div>
                <div className=" flex items-start flex-col justify-center gap-2">
                  <p className=" text-white">Includes</p>
                  <p className=" flex items-center justify-center gap-4">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      className=" text-primary"
                    >
                      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
                    </svg>
                    Free Accomodation
                  </p>
                  <p className=" flex items-center justify-center gap-4">
                    <svg
                      fill="none"
                      viewBox="0 0 15 15"
                      height="1em"
                      width="1em"
                      className=" text-primary"
                    >
                      <path stroke="currentColor" d="M4 7.5L7 10l4-5" />
                    </svg>
                    Certificates from Industries
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    
    
  );
};

export default Details;
