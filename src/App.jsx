// import React, { useState } from 'react';
// import SideBar from './components/SideBar';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
// <SideBar/>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Content from './components/Content';
import Routes from './routing/Routes';
import './app.css'

function App() {


  return (
    <>

      {/* <Content /> */}
      <Routes/>

    </>
  );
}

export default App;