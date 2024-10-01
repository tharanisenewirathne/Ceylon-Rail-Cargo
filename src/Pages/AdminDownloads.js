import React from 'react'
import Sidebar from '../Components/Sidebar'
import Adminnavbar from '../Components/Adminnavbar'
import Admindownloads from '../Components/Admindownloads'

const AdminDownloads = () => {
  return (
    <div className='flex flex-col-2 bg-[#121212] text-gray-200'> 
    <div className='fixed w-[18%]'>
      <Sidebar/>
      </div>
      <div>
      <Adminnavbar/>
      </div>
      <div style={{width:'100%',marginTop:'8%'}}>
      <Admindownloads/>
      </div>
  </div>
  )
}

export default AdminDownloads