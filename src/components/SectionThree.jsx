import React from 'react'

function SectionThree() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]' >
        <div className="left bg-graphic bg-cover flex justify-center items-end p-[2rem] lg:px-[12rem] lg:pb-[5rem] text-center">
            <div>
            <h3 className='text-3xl mb-3'>Graphic design</h3>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
        </div>
        <div className="right bg-Photography bg-cover flex justify-center items-end p-[2rem] lg:px-[12rem] lg:pb-[5rem] text-center">
            <div>
            <h3 className='text-3xl mb-3'>Photography</h3>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionThree