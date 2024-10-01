import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admintrackordersc from '../Components/Admintrackordersc'
import Adminnavbar from '../Components/Adminnavbar'

const AdminTrackOrders = () => {
  return (
    <div className='flex flex-col-2 bg-[#121212] text-gray-200'>
    <div className='fixed w-[18%]'>
      <Sidebar/>
      </div>
      <div>
      <Adminnavbar/>
      </div>
      <div style={{width:'100%',marginTop:'4%'}}>
      <Admintrackordersc/>
      </div>
  </div>
  )
}

export default AdminTrackOrders