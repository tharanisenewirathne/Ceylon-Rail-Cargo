import React from 'react'
import { useRef, useEffect } from "react";
import NavBar from '../Components/NavBar';
import Homestart from '../Components/Homestart';
import About from '../Components/About';
import History from '../Components/History';
import VisionMission from '../Components/VisionMission';
import OurNetwork from '../Components/OurNetwork';
import Abouttopic from '../Components/Abouttopic';
import Trackc from '../Components/Trackc';
import Historytopic from '../Components/Historytopic';
import OurNetworktopic from '../Components/OurNetworktopic';
import Tracktopic from '../Components/Tracktopic';
import Footer from '../Components/Footer';
import Footerfake from '../Components/Footerfake';
import Calculatorc from '../Components/Calculatorc';
import Servicestopic from '../Components/Servicestopic';





// export default function Home() {
const Home = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const trackcRef = useRef(null);
  const calculatorcRef= useRef(null);
  const footerfakeRef = useRef(null);
  
  

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTrackc = () => {
    trackcRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculatorc = () => {
    calculatorcRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollToFooterfake = () => {
    footerfakeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        <NavBar
          scrollToAbout={scrollToAbout}
          scrollToHome={scrollToHome}
          scrollToTrackc={scrollToTrackc}
          scrollToCalculatorc={scrollToCalculatorc}
          scrollToFooterfake={scrollToFooterfake}
  />
        <Homestart ref={homeRef}/>
        <Abouttopic/>
        <About ref={aboutRef} />
        <Historytopic/>
        <History />
        <VisionMission/>
        <OurNetworktopic/>
        <OurNetwork/>
        <Servicestopic/>
        <Calculatorc ref={calculatorcRef}/>
        <Tracktopic/>
        <Trackc ref={trackcRef}/>
        <Footerfake ref={footerfakeRef}/>
        <Footer />
        
    </div>
  ) 
}

export default Home;
