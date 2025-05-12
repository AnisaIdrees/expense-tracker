import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import AddExpense from '../pages/AddExpense'

function Routes() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route path='/add Expense' element={<AddExpense />} />
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