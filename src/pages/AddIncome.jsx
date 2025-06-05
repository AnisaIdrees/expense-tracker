import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'



function AddIncome() {
  const { currentUser } = useAuth()

  const [incomeForm, setIncomeForm] = useState({

    amount: '',
    category: '',
    date: '',

  })

  const handleChange = (e) => {

    setIncomeForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    })
  
  )

  }

  const handleSubmit = (e) => {

    e.preventDefault()
  }


  return (
    <div className='p-9'>AddIncome

      <form onSubmit={handleSubmit}>
        <input type="number"
        className='text-[black]'
         placeholder='amount'
         onChange={handleChange}
         name='amount'
         value={incomeForm.amount} />
         
         <br /><br /><br /><br />

        <input type="text"
         placeholder='category'
         onChange={handleChange}
         value={incomeForm.category}
         name='category' />


        <button type='submit'>Add income</button>
      </form>

    </div>

  )
}

export default AddIncome