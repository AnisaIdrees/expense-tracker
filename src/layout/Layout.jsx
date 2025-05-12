import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default Layout