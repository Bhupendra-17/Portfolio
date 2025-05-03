import React from 'react';

function Inner({ title, link, imgs }) {
  return (
    <div className='border border-gray-400 rounded-lg text-2xl self-center hover:shadow-md hover:shadow-sky-600'>
      {imgs ? (
        <a href={link} target='_blank' rel='noopener noreferrer' className="p-1 flex items-center justify-center">
          <img src={imgs} alt="icon" className='w-7' />
        </a>
      ) : (
        <a href={link} target='_blank' rel='noopener noreferrer' className="p-1">
          <i className={`${title}`}></i>
        </a>
      )}
    </div>
  );
}

export default Inner;
