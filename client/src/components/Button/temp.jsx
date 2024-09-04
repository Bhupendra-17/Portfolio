import React from 'react'

function temp(props) {
  return (
    <div>
        <button className='text-xl font-semibold px-3 py-1 border border-gray-400  rounded-full shadow-md  transition transform  hover:bg-black hover:text-white duration-300'>{props.text}</button>
    </div>
  )
}

export default temp