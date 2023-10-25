import React from 'react'
import Topbar from '../Topbar'
import Sidebar from './Sidebar'
function Dashboard() {
  return (
  
      <div className='d-flex'>
        <div>
        <Sidebar/>
        </div>
      <div className='flex-grow-1'>
        <Topbar/>
         </div>
      
      </div>

  )
}

export default Dashboard

