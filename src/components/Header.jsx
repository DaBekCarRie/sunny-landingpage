import React from 'react'
import Nav from './Nav'
import {FaLongArrowAltDown} from 'react-icons/fa'
function Header() {
  return (
    <div className='h-[43rem] border bg-gradient-to-r from-sky-500 to-indigo-500 bg-header bg-cover'>
        <Nav/>
        <h1 className='text-center text-7xl text-white uppercase'>We Are creatives</h1>
        <div className='flex justify-center mt-[30px]'>

        <FaLongArrowAltDown className='text-white text-7xl'/>
        </div>
    </div>
  )
}

export default Header