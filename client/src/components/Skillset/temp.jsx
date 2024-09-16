import React from 'react'

function temp(props) {
  return (
    <a href={props.link} target='_blank' rel='noopener noreferrer'  >
      <div className='m-3 border border-gray-700 rounded-xl p-2 shadow-xl shadow-gray-500 bg-gradient-to-r from-sky-900 to-stone-700 transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer duration-300 w-44 h-18 text-white font-semibold text-xl px-3'>
        <div className='flex justify-around gap-3 items-center'>
          <img src={props.item} alt="" srcset="" 
          className='bg-stone-100 rounded-lg w-12 h-11 p-2'/>
          <div className='text-sm  text-justify'>
            <p>Level: {props.desc}</p>
          </div> 
        </div>
         
      </div>
    </a>
  )
}

export default temp