import React,{useState} from 'react'
import SideBar from './SideBar';

function Content() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <SideBar/>
      <div className={`p-4 ${sidebarOpen ? 'sm:ml-64' : ''}`}>

        <div className="p-4  border-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20">
          {/* Content */}
        </div>
        
      </div>
    </>
  )
}

export default Content