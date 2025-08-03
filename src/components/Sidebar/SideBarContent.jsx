import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SideBar.css'; // Assuming you have a CSS file for styling

export default function SideBarContent() {

  const location = useLocation();
const currentPath = location.pathname;

  return (
    <div className="d-flex flex-column align-items-center  p-4  ">
      <div className="sidebar-img">
      </div>
      <h5 className='side-text' >Jackson Ford
        
      </h5>
      <p className=' side-info  ' >
        <span className='side-span' >UI/UX/Designer</span> in Philippines
      </p>
      <ul className="list-unstyled d-flex flex-column gap-2 justify-content-center text-center text-danger "> 
        <li><Link  className={`text-decoration-none side-link ${currentPath === '/home' ? 'active-link' : ''} `}  to="home">Home</Link></li>
        <li><Link  className={`text-decoration-none side-link ${currentPath === '/about' ? 'active-link' : ''} `}  to="about">About</Link></li>
        <li><Link  className={`text-decoration-none side-link ${currentPath === '/skills' ? 'active-link' : ''} `  }  to={"skills"}>Skills</Link></li>
        <li><Link  className={`text-decoration-none side-link ${currentPath === '/experience' ? 'active-link' : ''} `} to="experience">Experience</Link></li>
        <li><Link  className={`text-decoration-none side-link ${currentPath === '/work' ? 'active-link' : ''} `} to="work">Work</Link></li>
      </ul>
    </div>
  )
}
