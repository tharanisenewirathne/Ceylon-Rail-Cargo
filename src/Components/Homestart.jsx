import React, { useState } from 'react';
import Trackpage1 from '../Assets/Homestart1.jpg';
import Stations1 from '../Assets/Stations1.png';
import Customers1 from '../Assets/Customers1.png';
import Employees1 from '../Assets/Employees1.png';
import warehouse1 from '../Assets/warehouse1.png';
import { FaMapMarkerAlt } from "react-icons/fa";

const Homestart = React.forwardRef((props, ref) => {
  const [trackingCode, setTrackingCode] = useState('');

  const handleTrackButtonClick = () => {
    console.log(`Tracking code: ${trackingCode}`);
  };

  return (
    <div ref={ref} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${Trackpage1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='w-full h-screen text-black py-17'>
        <div className='max-w-[1300px]  w-[1300px] h-screen mx-auto text-center flex flex-col justify-center'>
          <div className="mt-60 mb-[15rem]">
            <input
              type="text"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="Enter Tracking Code"
              className="border w-[500px] border-gray-300 py-2 pl-4 rounded-md shadow-xl"
              style={{ borderRadius: '8px' }}
            />
            <button
              onClick={handleTrackButtonClick}
              className="w-[80px] bg-black text-white p-2 rounded-md shadow-xl"
              style={{ borderRadius: '8px' }}
            >
              Track
            </button>
          </div>
          <div style={{ display: 'flex', paddingLeft: '7%' }}>
            <br /><br />
            {/* Black box 1 */}
            <div className="w-[230px] h-[130px]  bg-black mr-20 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '30%', paddingLeft: '7%' }}>
                  <img src={Stations1} alt="Stations" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>300<sup>+</sup></span>
                  <br />
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Stations</span>
                </div>
              </div>
            </div>
            {/* Black box 2 */}
            <div className="w-[230px] h-[130px]  bg-black mr-20 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '30%', paddingLeft: '7%' }}>
                  <img src={Customers1} alt="Customers" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>1M<sup>+</sup></span>
                  <br />
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Customers</span>
                </div>
              </div>
            </div>
            {/* Black box 3 */}
            <div className="w-[230px] h-[130px]  bg-black mr-20 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '30%', paddingLeft: '7%' }}>
                  <img src={Employees1} alt="Employees" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>100K<sup>+</sup></span>
                  <br />
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Employees</span>
                </div>
              </div>
            </div>
            {/* Black box 4 */}
            <div className="w-[230px] h-[130px]  bg-black mr-20 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '30%', paddingLeft: '7%' }}>
                  <img src={warehouse1} alt="Warehouses" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>300<sup>+</sup></span>
                  <br />
                  <span className="text-white text-base font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Warehouses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Homestart;
