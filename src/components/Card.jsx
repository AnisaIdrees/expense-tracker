import React from 'react'

function Card({text,number}) {
  return (
<>

<a href="#" class=" text-center block w-[250px] bg-[#303232] max-w-sm p-6 bg-white border border-[#405757] rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
<p class="text-[20px] text-[aqua] text-gray-700 dark:text-gray-400 text-center"> $ {number} </p>
</a>

</>
  )
}

export default Card


