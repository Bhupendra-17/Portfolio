import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Block from './components/Certifications/Block';
import Footer from './Footer';
const Certification =() =>{
  return (
    <div className='bg-gradient-to-r from-gray-400 to-cyan-300 min-h-screen overflow-hidden pt-7 '>
      <Navbar />
      <div className='px-4 py-8 md:px-7 lg:px-8'>
      <Block />
      </div>
      <Footer/>
    </div>
  )
}

export default Certification