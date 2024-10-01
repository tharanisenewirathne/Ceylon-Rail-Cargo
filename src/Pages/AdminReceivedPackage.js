import React from 'react'
import Sidebar from '../Components/Sidebar'
import Adminreceivedpackagec from '../Components/Adminreceivedorderc'
import Adminnavbar from '../Components/Adminnavbar'


const AdminReceivedPackage = () => {
  return (
    <div className='flex flex-col-2 bg-[#121212] text-gray-200'>
    <div className='fixed w-[18%]'>
      <Sidebar/>
      </div>
      <div>
      <Adminnavbar/>
      </div>
      <div style={{width:'100%',marginTop:'4%'}}>
      <Adminreceivedpackagec/>
      </div>
  </div>
  )
}

export default AdminReceivedPackage