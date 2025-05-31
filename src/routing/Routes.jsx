// import React from 'react'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from '../layout/Layout'
// import AddExpense from '../pages/AddExpense'
// import AddIncome from '../pages/AddIncome'
// import Alltransaction from '../pages/Alltransaction'
// import Dashboard from '../pages/Dashboard'
// import Signup from '../pages/Signup'
// import Login from '../pages/Login'

// function Routes() {

//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path='/' element={<Layout />}>

//                 <Route path='/' element={<Dashboard />} />
//                 <Route path='/add-Expense' element={<AddExpense />} />
//                 <Route path='/add-income' element={<AddIncome />} />
//                 <Route path='/Transaction-list' element={<Alltransaction />} />
//                 <Route path='/signup' element={<Signup />} />
//                 <Route path='/login' element={<Login />} />

//             </Route>
//         )
//     )


//     return (
//         <>
//             <RouterProvider router={router} />
//         </>
//     )
// }

// export default Routes


// import React from 'react'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Navigate,
// } from 'react-router-dom'

// import Layout from '../layout/Layout'
// import AddExpense from '../pages/AddExpense'
// import AddIncome from '../pages/AddIncome'
// import Alltransaction from '../pages/Alltransaction'
// import Dashboard from '../pages/Dashboard'
// import Signup from '../pages/Signup'
// import Login from '../pages/Login'
// import ProtectedRoute from './ProtectedRoute'

// function Routes() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>

//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />


//         <Route
//           path='/'
//           element={
//             <ProtectedRoute>
//               <Layout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />
//           <Route path='add-expense' element={<AddExpense />} />
//           <Route path='add-income' element={<AddIncome />} />
//           <Route path='transaction-list' element={<Alltransaction />} />
//         </Route>


//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </>
//     )
//   )

//   return <RouterProvider router={router} />
// }

// export default Routes
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import Layout from '../layout/Layout';
import AddExpense from '../pages/AddExpense';
import AddIncome from '../pages/AddIncome';
import Alltransaction from '../pages/Alltransaction';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="add-income" element={<AddIncome />} />
          <Route path="transaction-list" element={<Alltransaction />} />
        </Route>


        <Route path="*" element={<Navigate to="/login" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;