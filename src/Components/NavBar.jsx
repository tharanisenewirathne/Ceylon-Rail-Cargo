import React from 'react';
import flag from '../Assets/flag.png'
import { Link } from 'react-router-dom';

const Navbar =({ scrollToAbout, scrollToHome, scrollToContactusc, scrollToTrackc, scrollToFooterfake, scrollToCalculatorc}) =>{
  return (
    <nav className="bg-[#000000] h-18 fixed top-0 left-0 right-0 z-10 mx-auto px-3 p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-[#ffffff] text-xl font-bold mr-4"style={{ fontFamily: 'Comfortaa' }}>
            Ceylon Rail Cargo
          </Link>
        </div>
        <div className="flex justify-center">
          <button onClick={() => scrollToHome()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            Home
          </button>
          <button onClick={() => scrollToAbout()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            About
          </button>
          <button onClick={() => scrollToFooterfake()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            Contact Us
          </button>
          <button onClick={() => scrollToCalculatorc()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            Services
          </button>
          <button onClick={() => scrollToTrackc()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            Track
          </button>
          <button onClick={() => scrollToFooterfake()} className="text-white text-sm font-bold mx-4"style={{ fontFamily: 'Comfortaa' }}>
            Downloads
          </button>
        </div>
        <div className="flex items-center">
          <img src={flag} alt="/" height={35} width={35} />
          <Link to="/login" className="text-white mx-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;