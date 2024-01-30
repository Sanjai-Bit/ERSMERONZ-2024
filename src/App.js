import Lenis from "@studio-freight/lenis";
import React, { Suspense, lazy, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import Details from "./Pages/Details";

const App = () => {
  const Home = lazy(() => import("./Pages/Home"));
  const About = lazy(() => import("./Pages/About"));
  const Timer = lazy(() => import("./Pages/Timer"));
  const Contact = lazy(() => import("./Pages/Contact"));
  const SubeventPage = lazy(() => import("./Pages/SubeventPage"));
  const Highligts = lazy(() => import("./Pages/Highligts"));
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className=" select-none bg-black  max-w-[100vw] h-[100vh]  text-secondary font-Poppins">
      <Suspense>
        <Navbar />
        <Home />
        <About />
        <Highligts />
        <Timer />
        <Details />
        <SubeventPage />
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
