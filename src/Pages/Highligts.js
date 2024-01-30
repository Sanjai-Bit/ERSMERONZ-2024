import React from "react";
import gift from '../image/Animation - 1706028321921.json'
import Lottie from "lottie-react";
const Highligts = () => {
  const some = [
    {
      name: "Best Experience",
      describe:
        "Get exposed to valuable, enjoyable, and unforgettable experiences in addition to professional ones.",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className=" relative text-8xl text-primary bg-black rounded-full p-5 "
        >
          <path d="M11.327.512c-3.806.034-7.447 3.19-7.181 7.75.102 1.547.88 3.382 2.981 5.733a.365.365 0 00.635-.23l.053-2.266a.36.36 0 00-.1-.255 5.047 5.047 0 013.407-8.502c2.27-.104 4.011 1.236 4.753 2.744.34.693.527 1.45.55 2.222a.357.357 0 00.343.344c.482.015.962.064 1.437.147a.359.359 0 00.424-.344 7.237 7.237 0 00-2.769-5.788C15.02 1.404 13.564.52 11.327.512zm4.94 8.362a14.8 14.8 0 00-2.515.26.364.364 0 00-.17.635l1.695 1.435a.36.36 0 00.316.073 5.026 5.026 0 013.123.281c1.78.787 2.92 2.414 3.042 4.304.208 3.187-2.48 5.539-5.277 5.37a5.032 5.032 0 01-1.751-.412.365.365 0 00-.443.115c-.289.385-.603.75-.94 1.094a.367.367 0 00.09.573c1.887 1.073 3.936 1.16 6.014.32 3.303-1.304 4.63-4.523 4.545-6.847-.096-2.641-1.48-5.072-4.085-6.402-.921-.47-2.04-.812-3.643-.799zm-12.931 1.2a.364.364 0 00-.152.052c-1.41.827-2.216 2.057-2.798 3.777-.285.892-.386 1.51-.386 2.436a7.276 7.276 0 007.157 7.141c1.129.017 2.104-.235 2.962-.583 1.45-.62 3.142-1.597 4.65-4.912a.363.363 0 00-.459-.489l-2.365.867a.357.357 0 00-.195.174 5.03 5.03 0 01-2.268 2.224C6 22.428 2.473 19.784 2.235 16.74c-.145-1.741.494-3.053 1.37-3.982.293-.308.41-.477.663-.662a.36.36 0 00.098-.471 9.173 9.173 0 01-.653-1.326.366.366 0 00-.377-.225z" />
        </svg>
      ),
    },
    {
      name: "Networking",
      describe:
        " A great way to learn new skills and make connections with peers in their field.",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className=" relative text-8xl text-primary bg-black rounded-full p-5 "
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 11a5 5 0 015 5v6H7v-6a5 5 0 015-5zm-6.712 3.006a6.983 6.983 0 00-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 013.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0122 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a4 4 0 110 8 4 4 0 010-8z" />
        </svg>
      ),
    },

    {
      name: "Showcasing Talent",
      describe:
        "Ersmeronz allows participants to showcase their innovative projects and ideas.",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className=" relative text-8xl text-primary bg-black rounded-full p-5 "
        >
          <path d="M14 12c-1.095 0-2-.905-2-2 0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 00-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-.092-.02-.178-.027-.268-.29.165-.619.268-.973.268z" />
          <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z" />
        </svg>
      ),
    },

    {
      name: "Learning Opportunities",
      describe:
        "Provides valuable insights into the latest trends, technologies, and professional development.",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className=" relative text-8xl text-primary bg-black rounded-full p-5 "
        >
          <path d="M21 8c-.202 0-4.85.029-9 2.008C7.85 8.029 3.202 8 3 8a1 1 0 00-1 1v9.883a1 1 0 00.305.719c.195.188.48.305.729.28l.127-.001c.683 0 4.296.098 8.416 2.025.016.008.034.005.05.011.119.049.244.083.373.083s.254-.034.374-.083c.016-.006.034-.003.05-.011 4.12-1.928 7.733-2.025 8.416-2.025l.127.001c.238.025.533-.092.729-.28.194-.189.304-.449.304-.719V9a1 1 0 00-1-1zM4 10.049c1.485.111 4.381.48 7 1.692v7.742c-3-1.175-5.59-1.494-7-1.576v-7.858zm16 7.858c-1.41.082-4 .401-7 1.576v-7.742c2.619-1.212 5.515-1.581 7-1.692v7.858z" />
          <path d="M15 5 A3 3 0 0 1 12 8 A3 3 0 0 1 9 5 A3 3 0 0 1 15 5 z" />
        </svg>
      ),
    },
  ];
  return (
    <div
      id="Highligts"
      className=" relative z-20 max-w-[100vw] min-h-[100vh] bg-black flex items-center text-center gap-20 max-sm:gap-10 flex-col justify-center"
    >
      <p className=" text-primary  flex items-center justify-center gap-4 text-xl">
        <svg viewBox="0 0 448 512" fill="currentColor" height="1em" width="1em">
          <path d="M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z" />
        </svg>
        What You'll Get
      </p>
      <p className=" max-sm:text-xl text-3xl text max-sm:w-full max-sm:px-10 w-2/3 max-sm:-mt-5 -mt-10">
        As professionals, we recognize the pivotal role of shaping the future technology and fostering a culture of innovation
      </p>
      <div className=" grid px-20 max-sm:px-10 max-sm:grid-cols-1 grid-cols-2 gap-5">
        {some &&
          some.map((s) => {
            return (
              <div className="  bg rounded-3xl px-10 max-sm:px-5 py-10 border border-secondary/50 p-5 text-left flex flex-col items-center max-sm:items-center justify-center gap-3">
                <div className=" relative my-5 max-sm:my-2  ">
                  <div className=" w-full h-full absolute   -inset-x-1   bg-secondary/50 rounded-full top-0"></div>
                  {s.svg ? (
                    s.svg
                  ) : (
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      className=" relative text-8xl text-primary bg-black rounded-full p-5 "
                    >
                      <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm96-16c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16z" />
                    </svg>
                  )}
                </div>
                <p className="  text-tertary text-2xl max-sm:text-center font-inter capitalize">
                  {s.name}
                </p>
                <p className=" text-xl text-center max-sm:text-center  max-sm:text-sm">{s.describe}</p>
              </div>
            );
          })}
      </div>

      <div className=" relative w-[100vw] flex flex-col items-center justify-center my-10 max-sm:mt-10 max-sm:my-0  ">
        <Lottie animationData={gift} className=" w-1/2" />
        <p className=" relative  max-sm:text-xl text-6xl text max-sm:w-full max-sm:px-10 w-2/3 max-sm:-mt-5 -mt-10">
          Cash Prizes worth  ₹50,000
        </p>
      </div>
    </div>

  );
};

export default Highligts;
