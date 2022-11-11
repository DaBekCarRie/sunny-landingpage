import React from 'react'
import tranformImg from '../assets/images/desktop/image-transform.jpg'

function SectionOne() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2' >
        <div className="left p-[5rem] flex justify-center items-center">
            <div>
            <h1 className='text-5xl'>Tranform your brand</h1>
            <p className='text-gray-400 m-[2rem]'>We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="#" className='uppercase border-b-4 border-yellow-200'>Learn More</a>
            </div>
        </div>
        <div className="right w-50">
            <img className='w-full' src={tranformImg} alt="transform" />
        </div>
    </div>
  )
}

export default SectionOne