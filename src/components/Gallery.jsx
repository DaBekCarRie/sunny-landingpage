import React from 'react'
import orange from '../assets/images/desktop/image-gallery-orange.jpg'
import cone from '../assets/images/desktop/image-gallery-cone.jpg'
import milk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <img src={milk} alt="milk" />
        <img src={orange} alt="orange" />
        <img src={cone} alt="cone" />
        <img src={sugar} alt="sugar" />

    </div>
  )
}

export default Gallery