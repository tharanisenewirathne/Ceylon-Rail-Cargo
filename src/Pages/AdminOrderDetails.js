import React from 'react'
import Sidebar from '../Components/Sidebar'
import Adminnavbar from '../Components/Adminnavbar'
import Adminorderdetailsc from '../Components/Adminorderdetailsc'

const AdminOrderDetails = () => {
  return (
    <div className='flex flex-col-2 bg-[#121212] text-gray-200'> 
    <div className='fixed w-[18%]'>
      <Sidebar/>
      </div>
      <div>
      <Adminnavbar/>
      </div>
      <div style={{width:'100%',marginTop:'4%'}}>
      <Adminorderdetailsc/>
      </div>
  </div>
  )
}

export default AdminOrderDetails