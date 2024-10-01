import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = React.forwardRef((props, ref) => {

  
  return (
    <div ref={ref}
      className="w-full mx-auto py-16 px-4 grid grid-cols-4 gap-20 text-white bg-[#000000]"style={{ fontFamily: 'Comfortaa' }}
    >
      <div>
        <h1 className="w-full text-2xl font-bold text-[#ffffff] "style={{ fontFamily: 'Comfortaa' }}>
          Ceylone Rail Cargo
        </h1>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-2"style={{ fontFamily: 'Comfortaa' }}>Follow Us</h2>
        <div className="flex items-center space-x-2">
          <FaFacebookSquare className="text-2xl" />
          <FaInstagramSquare className="text-2xl" />
          <FaTwitterSquare className="text-2xl" />
          <FaRedditSquare className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col">
      <div>
        <Link to="/ContactusPage"className="text-lg font-bold mb-2"style={{ fontFamily: 'Comfortaa' }}>Contact Us
        </Link>
        </div><br/>
        <div>
        <Link to="/DownloadsPage"className="text-lg font-bold mb-2"style={{ fontFamily: 'Comfortaa' }}>Downloads
        </Link>
        </div>
        </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold mb-2"style={{ fontFamily: 'Comfortaa' }}>Contact Us</h2><br/>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-xl" />
          <span>123-456-7890</span>
        </div><br/>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-xl" />
          <span>info@ceylonrailcargo.com</span>
        </div><br/>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-xl" />
          <span>123 Main Street, City, Country</span>
        </div>
      </div>
    </div>
    
  );
});

export default Footer;