import React from 'react'
import Sidebar from '../Components/Sidebar'
import Admindashboardc from '../Components/Admindashboardc'
import Adminnavbar from '../Components/Adminnavbar'


const AdminDashboard = () => {
  return (
    <div className='flex flex-col-2 bg-[#121212] text-gray-200'>
      
      <div className='fixed w-[18%]'>
        <Sidebar/>
        </div>
        <div>
        <Adminnavbar/>
        </div>
        <div style={{width:'100%',marginTop:'8%',marginLeft:'8%'}}>
        <Admindashboardc/>
      
        </div>
       
        
      
        
       
    </div>
  )
}

export default AdminDashboard