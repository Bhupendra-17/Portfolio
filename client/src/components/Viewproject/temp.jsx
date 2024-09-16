import React from 'react'

function temp(props) {
  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer'  >
        <div className='m-3 border border-gray-700 rounded-xl p-2 shadow-xl shadow-gray-500 bg-gradient-to-r from-sky-900 to-stone-700 transition transform hover:-translate-y-3 cursor-pointer duration-300 w-44 h-36 text-white font-semibold text-xl px-3'>
        <div className='flex justify-between  items-center'>
            {props.title}   
            <i className=" fa-solid fa-arrow-up-right-from-square "></i>  
        </div>
        <div className='text-sm font-thin text-justify'>
            <p>{props.desc}</p>
        </div>   
    </div>
    </a>
  )
}

export default temp