import React from 'react';
import Photo from './geeksforgeeks.svg'

function Inner(props) {
  return (
    <div className='border border-gray-400 rounded-lg text-2xl self-center hover:shadow-md hover:shadow-sky-600'>
      <a href={props.link} target='_blank' rel='noopener noreferrer' className="p-1">
        <i className={`${props.title}`}></i>
      </a>
      {props.imgs && (
        <a target='_blank' rel='noopener noreferrer' href={props.link}><img src={Photo} alt="" className='w-7 -mt-7' /></a>
      )}
    </div>
  );
}

export default Inner;
