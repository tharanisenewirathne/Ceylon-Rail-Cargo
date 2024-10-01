import React from 'react'
import order from '../Assets/order.png';
import revenue from '../Assets/revenue.png';
import shipped from '../Assets/shipped.png';
import Stations1 from '../Assets/Stations1.png';


import { Link } from 'react-router-dom';


const Admindashboardc = () => {
  return (
    <div className='flex w-[100%] items-center justify-center bg-[#121212] text-gray-200'>
      <div style={{ display: 'flex',marginLeft: '10%', paddingBottom:'100%',marginTop:'3%'}}>
      <br /><br />
            {/* Black box 1 */}
            <div className="w-[200px] h-[100px]  bg-black  mr-12 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '30%', paddingLeft: '7%' }}>
                  <img src={order} alt="Total_Order" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>3<sup></sup></span>
                  <br />
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Total Orders</span>
                </div>
              </div>
            </div>
            {/* Black box 2 */}
            <div className="w-[200px] h-[100px]  bg-black mr-12 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '40%', paddingLeft: '7%' }}>
                  <img src={Stations1} alt="Total_Delivered" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>2<sup></sup></span>
                  <br />
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Delivereded</span>
                </div>
              </div>
            </div>
            {/* Black box 3 */}
            <div className="w-[200px] h-[100px]  bg-black mr-12 rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '40%', paddingLeft: '7%' }}>
                  <img src={shipped} alt="Shipped" />
                </div>
                <div style={{ width: '70%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>1<sup></sup></span>
                  <br />
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>On Shipping</span>
                </div>
              </div>
            </div>
            {/* Black box 4 */}
            <div className="w-[200px] h-[100px]  bg-black  rounded-md shadow-xl flex items-center justify-center hover" style={{ borderRadius: '18px' }}>
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div style={{ width: '28%', paddingLeft: '7%' }}>
                  <img src={revenue} alt="Revenue" />
                </div>
                <div style={{ width: '72%', paddingRight: '20%', textAlign: 'right' }}>
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>354.14<sup></sup></span>
                  <br />
                  <span className="text-white text-sm font-bold mx-auto" style={{ fontFamily: 'Comfortaa' }}>Revenue</span>
                </div>
              </div>
            </div>
           
      </div>
  
    </div>
  )
}

export default Admindashboardc