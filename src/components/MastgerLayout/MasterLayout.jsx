import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div>
      <div className="row  gx-0">
        <div className="col-md-3">
            <Sidebar/>
            </div>
            <div className="col-md-9">
             <Outlet/>
            
              </div>
            
      </div>
        
     
    </div>
  )
}
