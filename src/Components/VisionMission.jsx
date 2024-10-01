import React from 'react';

export default function VisionMission() {
  return (
    <div className='text-black bg-black h-[900px] '>
      <h1 className="text-white text-[40px] font-bold mb-4 text-center " style={{ fontFamily: 'Comfortaa' }}>Our Vision and Mission</h1>
      <div className='max-w-full mx-full py-40 mx-20 h-screen grid md:grid-cols-2  text-center'>
      
        <div className="rounded-md bg-gradient-to-b from-[#5b3619] to-black mx-4 w-85 h-110 mr-10  ml-20 align-middle hover
        shadow-2xl p-10"style={{ borderRadius: '30px'}}>
          <h1 className="text-white text-3xl font-bold mb-4 " style={{ fontFamily: 'Comfortaa' }}>Vision</h1>
          <p className="text-white text-base font-bold" style={{ fontFamily: 'Comfortaa' }}>
            To be the most sought after land transport provider in Sri Lanka, providing unsurpassed value to our stakeholders.
          </p>
        </div>
        <div className="rounded-md bg-gradient-to-b from-[#5b3619] to-black mx-4 w-85 h-110 p-10 mr-20 ml-10 hover
        shadow-2xl "style={{ borderRadius: '30px'}}>
          <h1 className="text-white text-3xl font-bold mb-4 " style={{ fontFamily: 'Comfortaa' }}>Mission</h1>
          <p className="text-white text-base font-bold" style={{ fontFamily: 'Comfortaa' }}>
            To provide a safety reliable and punctual rail transport system for passenger and goods transportation.
          </p>
        </div>
      </div>
    </div> 
  );
}
