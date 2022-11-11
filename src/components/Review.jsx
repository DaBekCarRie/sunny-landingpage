import React from 'react'
import Emily from '../assets/images/image-emily.jpg'
import Thomas from '../assets/images/image-thomas.jpg'
import Jennie from '../assets/images/image-jennie.jpg'

const usersData = [
    {
        img: Emily,
        content: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        name: 'Emily R.',
        position: 'Marketing Director',
    },
    {
        img: Thomas,
        content: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        name: 'Thomas S.',
        position: 'Chief Operating Officer',
    },
    {
        img: Jennie,
        content: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        name: 'Jennie F.',
        position: 'Business Owner',
    },
]
function Review() {
  return (
    <div className='text-center py-[10rem] px-[5rem]'>
        <h3 className='uppercase text-3xl'>Client Testinomials</h3>
        <div className='grid grid-col2-1 md:grid-cols-3 gap-[5rem]'>

        {usersData.map((user,i) => (
            <div key={i} className="py-[5rem]">
                <img src={user.img} className="inline-block rounded-full" alt={user.name}/>
                <p className='py-[5rem]'>{user.content}</p>
                <h4 className='font-bold'>{user.name}</h4>
                <p className='text-slate-400'>{user.position}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Review