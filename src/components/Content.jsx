import React from 'react'
import SideBar from './SideBar'

function Content() {
  return (
    <div className="main-dashboard-container flex">
      <SideBar />
      <div className="content  flex-1 ml-64 p-4 min-h-screen bg-green-200">

        <div className="box">

        </div>
      </div>
    </div>
  )
}

export default Content