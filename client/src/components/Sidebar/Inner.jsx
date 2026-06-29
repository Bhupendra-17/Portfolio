import React from 'react';

function Inner({ title, link, imgs }) {
  return (
    <div className='border border-gray-400 rounded-lg text-2xl self-center hover:shadow-md hover:shadow-cyan-500/50 bg-white text-gray-900 transition-all duration-300 hover:scale-110'>
      {imgs ? (
        <a href={link} target='_blank' rel='noopener noreferrer' className="p-1.5 flex items-center justify-center w-10 h-10">
          <img src={imgs} alt="icon" className='w-6 object-contain' />
        </a>
      ) : (
        <a href={link} target='_blank' rel='noopener noreferrer' className="p-1.5 flex items-center justify-center w-10 h-10">
          <i className={`${title}`}></i>
        </a>
      )}
    </div>
  );
}

export default Inner;
