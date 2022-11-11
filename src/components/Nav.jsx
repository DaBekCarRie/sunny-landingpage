import React from 'react'

function Nav() {
  return (
    <div className='flex flex-col md:flex-row  justify-between px-[5rem] py-[3rem]'>
      <div className="logo">
        <a href="#" className='text-white font-bold text-2xl'>sunnyside</a>
      </div>
      <ul className="menu text-white flex flex-col md:flex-row items-center">
        <li className='mx-[40px] my-[10px]'><a href="#">About</a></li>
        <li className='mx-[40px] my-[10px]'><a href="#">Service</a></li>
        <li className='mx-[40px] my-[10px]'><a href="#">Projects</a></li>
        <li className='mx-[40px] my-[10px] flex justify-center items-center bg-white text-black w-[100px] h-[45px] rounded-full'><a href="#">CONTACT</a></li>
      </ul>
    </div>
  )
}

export default Nav