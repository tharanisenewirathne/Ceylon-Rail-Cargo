import React from 'react'
import charges from '../Assets/charges.pdf'
import charges2 from '../Assets/charges2.pdf'
import charges3 from '../Assets/charges3.pdf'
import { Link } from 'react-router-dom';

export default function Downloadspagec() {
    return (
    <div>
      <nav className="bg-[#000000] h-18 fixed top-0 left-0 right-0 z-10 mx-auto px-3 p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-[#ffffff] text-xl font-bold mr-4"style={{ fontFamily: 'Comfortaa' }}>
                Ceylon Rail Cargo
            </Link>
          </div>
        </div>
      </nav>
      <h1 className=" text-black text-xl mt-[6%] mr-8 pl-8 font-bold "style={{ fontFamily: 'Comfortaa' }}>Downloads</h1>
      <div className="text-white rounded-md bg-black h-[70vh] mx-8 mt-[4%] p-5"style={{ borderRadius: '30px'}}>
      <a href={charges} target="_blank" rel="noopener noreferrer" 
      className="text-white  mr-8 mt-8 pl-8 font-bold "style={{ fontFamily: 'Comfortaa' }}>1. Parsal Transporting Charges
      </a><br/><br/>
      <a href={charges2} target="_blank" rel="noopener noreferrer" 
      className="text-white  mr-8 mt-8 pl-8 font-bold "style={{ fontFamily: 'Comfortaa' }}>2. Transporting Parcels by Trains
      </a><br/><br/>
      <a href={charges3} target="_blank" rel="noopener noreferrer" 
      className="text-white  mr-8 mt-8 pl-8 font-bold "style={{ fontFamily: 'Comfortaa' }}>3. Transporting Goods using Railway Goods Wagons
      </a>
      </div>     
    </div>
  )
}
