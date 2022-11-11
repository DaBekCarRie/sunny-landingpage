import React from 'react'
import standOutImg from '../assets/images/desktop/image-stand-out.jpg'

function SectionTwo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2' >
        <div className="left row-start-2 row-end-3 ">
            <img className='w-full' src={standOutImg} alt="Stand out" />
        </div>
        <div className="right p-[5rem] flex justify-center items-center row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
            <div>
                <h1 className='text-5xl'>Stand out to the right audience</h1>
                <p className='text-gray-400 m-[2rem]'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places. 
                </p>
                <a href="#" className='uppercase border-b-4 border-pink-200'>Learn More</a>
            </div>
        </div>
       
    </div>
  )
}

export default SectionTwo