import React from 'react'
import { Link } from 'react-router-dom';

const Adminnavbar = () => {
  return (
    <div>
            <nav className="bg-[#121212] h-16 fixed top-0 left-[18%] right-0 z-10 mx-auto px-4 p-4">
 <div className="container mx-auto flex items-center justify-between">
   <div className="flex items-center">
   <h1 className="text-white text-xl  mx-4"style={{ fontFamily: 'Comfortaa' }}>
           Welcome Admin!
          </h1>
   </div>
   <div className="flex justify-center">
          
    </div>
   <div className="flex items-center">
     
     <Link to="/login" className="text-white font-bold text-[13px]"style={{ fontFamily: 'Comfortaa' }}>
       Log out
     </Link>
   </div>
 </div>
</nav>
    </div>
  )
}

export default Adminnavbar