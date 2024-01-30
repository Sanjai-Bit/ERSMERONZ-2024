import React, { useEffect, useRef, useState } from "react";
const Timer = () => {
  const [day, setday] = useState("00");
  const [hour, sethour] = useState("00");
  const [min, setmin] = useState("00");
  const [sec, setsec] = useState("00");
  const interval = useRef();
  const starttimer = () => {
    const eventdate = new Date("Feb 23, 2024 08:00:00").getTime();
    const interval = setInterval(() => {
      const currentdate = new Date().getTime();
      const gap = eventdate - currentdate;
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
      const textday = Math.floor(gap / days);
      const texthour = Math.floor((gap % days) / hours);
      const textmin = Math.floor((gap % hours) / minutes);
      const textsec = Math.floor((gap % minutes) / seconds);
      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setday(textday);
        sethour(texthour);
        setmin(textmin);
        setsec(textsec);
      }
    }, [1000]);
  };
    
  useEffect(() => {
    starttimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div
      id="Timer"
      className=" relative max-w-[100vw] max-sm:-mt-20 h-[100vh] flex items-center justify-center bg-black"
    >
      <div className=" z-30 relative flex flex-col items-center gap-10 justify-center">
        <p className=" text-primary text-xl flex items-center justify-center gap-4">
          {" "}
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 000 18c5 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61M13 14h-2V7h2v7m2-13H9v2h6V1z" />
          </svg>
          Unlock your potential
        </p>
       
        <p className=" text-secondary text-5xl max-sm:text-xl -mt-5  pb-5  text-center">
        Join now and be a part of <br></br> innovations and excitements
        </p>
        <div className=" z-30 relative flex flex-col items-center gap-10 justify-center">
        <div className=" flex items-center justify-center gap-5">
          <div className=" flex flex-col gap-2 items-center justify-center">
            <p className=" text-9xl max-sm:text-6xl text">{day}</p>
            <span>Days</span>
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center">
            <p className=" text-9xl max-sm:text-6xl text">{hour}</p>
            <span>Hours</span>
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center">
            <p className=" text-9xl max-sm:text-6xl text">{min}</p>
            <span>Mins</span>
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center">
            <p className=" text-9xl max-sm:text-6xl text">{sec}</p>
            <span>Secs</span>
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
    
  );
};

export default Timer;
