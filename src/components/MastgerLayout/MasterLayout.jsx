import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './MasterLayout.css'

export default function MasterLayout() {
  return (
    <div className="container-fluid">
      <div className="row gx-0">
        <div className="col-md-3">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
        </div>
        <div className="col-md-9 m-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
