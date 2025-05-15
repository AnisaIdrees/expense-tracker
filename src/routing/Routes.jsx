import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import AddExpense from '../pages/AddExpense'
import AddIncome from '../pages/AddIncome'
import Alltransaction from '../pages/Alltransaction'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

function Routes() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>

                <Route path='/' element={<Dashboard />} />
                <Route path='/add-Expense' element={<AddExpense />} />
                <Route path='/add-income' element={<AddIncome />} />
                <Route path='/Transaction-list' element={<Alltransaction />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />

            </Route>
        )
    )


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routes