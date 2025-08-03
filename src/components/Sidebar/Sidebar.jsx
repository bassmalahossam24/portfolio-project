import React, { useEffect } from "react";
import SideBarContent from "./SideBarContent";
import { useLocation } from "react-router-dom";


export default function Sidebar() {

 const location = useLocation();

  useEffect(() => {
    
    const closeBtn = document.querySelector("#sidebarOffcanvas .btn-close");
    if (closeBtn) {
      closeBtn.click();
    }
  }, [location]);

  return (
    <>
      <button
        className="btn btn-primary m-3 d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
        aria-controls="sidebarOffcanvas"
      >
        ☰
      </button>

   

      <div
        className="offcanvas offcanvas-start "
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <SideBarContent />
        </div>
      </div>

      <div
        className="bg-light border-end p-3 vh-100 d-none d-md-block "
      >
        <SideBarContent />
      </div>
    </>
  );
}
