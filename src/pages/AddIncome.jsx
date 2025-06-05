import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { addIncome } from '../services/IncomeService'
import { FaRupeeSign, FaCalendarAlt, FaTags } from 'react-icons/fa';


function AddIncome() {
  const { currentUser } = useAuth()

  const [incomeForm, setIncomeForm] = useState({

    amount: '',
    category: '',
    date: '',

  })

  const handleChange = (e) => {

    let check = setIncomeForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))




  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (!currentUser || !currentUser.uid) {
      console.error('user not found')
      return
    }
    const incomeData = {
      ...incomeForm,
      userID: currentUser.uid,
      createdAt: new Date()
    };

    try {
      await addIncome(incomeData);
      console.log("Income added!");

      setIncomeForm({ amount: "", category: "", date: "" });

    } catch (error) {
      console.error("Error adding income:", error);
    }
    console.log(incomeForm);
  }


  return (
    // <div className='p-9'>AddIncome

    //   <form onSubmit={handleSubmit}>
    //     <input type="number"
    //       className='text-[black]'
    //       placeholder='amount'
    //       onChange={handleChange}
    //       name='amount'
    //       required
    //       value={incomeForm.amount} />

    //     <br /><br /><br /><br />

    //     <input type="text"
    //       className='text-[black]'
    //       placeholder='category'
    //       onChange={handleChange}
    //       value={incomeForm.category}
    //       name='category'
    //       required />


    //     <br /><br /><br /><br />

    //     <input type="date"
    //       className='text-[black]'
    //       placeholder='m/dd/yy'
    //       required
    //       onChange={handleChange}
    //       value={incomeForm.date}
    //       name='date' />

    //     <button type='submit'>Add income</button>
    //   </form>

    // </div>
    <div className="max-w-md mx-auto p-6 mt-10 bg-[#303232] rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-white to-aqua-400 bg-clip-text text-transparent">
        Add Income
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-white mb-1">
            Amount
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-aqua-400">
              <FaRupeeSign />
            </span>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              value={incomeForm.amount}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full rounded-lg text-sm text-white bg-[#444] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-aqua-400"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-white mb-1">
            Category
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-aqua-400">
              <FaTags />
            </span>
            <input
              type="text"
              id="category"
              name="category"
              required
              value={incomeForm.category}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full rounded-lg text-sm text-white bg-[#444] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-aqua-400"
              placeholder="e.g. Freelancing"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-white mb-1">
            Date
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-aqua-400">
              <FaCalendarAlt />
            </span>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={incomeForm.date}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full rounded-lg text-sm text-white bg-[#444] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-aqua-400"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-aqua-400 text-[#303232] font-semibold hover:bg-aqua-300 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Add Income
        </button>
      </form>
    </div>
  )
}

export default AddIncome


