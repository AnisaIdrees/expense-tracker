

import React from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="flex h-screen bg-gray-100">
            <SideBar />

            <div className={`
                
                flex-1 h-full overflow-auto
                transition-all duration-300
                pl-0 md:pl-64  /* Mobile: 0 padding, Desktop: 64px padding */
                pt-16 md:pt-0  /* Mobile: navbar height, Desktop: 0 */
            `}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;