import React from 'react'
import charges from '../Assets/charges.pdf'
import charges2 from '../Assets/charges2.pdf'
import charges3 from '../Assets/charges3.pdf'

const Admindownloads = () => {
  return (
    <div className='flex flex-col bg-[#121212] text-gray-200' style={{ display: 'flex', paddingLeft: '18%', paddingBottom:'100%'}}>
      
          <div style={{width:'50%',marginLeft:'3%'}}>
          <h1 className=" text-2xl font-bold "style={{ fontFamily: 'Comfortaa' }}>Downloads</h1>
          <br/><br/>

          <div style={{flexDirection:'row',display:'flex'}}>
            <div style={{width:'80%'}}>
           
            <a href={charges} target="_blank" rel="noopener noreferrer" 
            className="text-gray-200 font-bold "style={{ fontFamily: 'Comfortaa' }}>1. Parsal Transporting Charges
             </a><br/><br/>
            <a href={charges2} target="_blank" rel="noopener noreferrer" 
            className="text-gray-200  font-bold "style={{ fontFamily: 'Comfortaa' }}>2. Transporting Parcels by Trains
             </a><br/><br/>
            <a href={charges3} target="_blank" rel="noopener noreferrer" 
            className="mb-20 text-gray-200  font-bold "style={{ fontFamily: 'Comfortaa' }}>3. Transporting Goods using Railway Goods Wagons
             </a>
          
            </div>   
      </div>  
    </div>
    </div>
  )
}

export default Admindownloads