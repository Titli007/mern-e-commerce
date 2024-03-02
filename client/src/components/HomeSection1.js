import React from 'react'
import Home1 from '../images/background1.jpg'

const HomeSection1 = () => {
  return (
    <div className='relative w-full flex justify-center'>
        <div className=''>
            <img src={Home1} alt='A room picture'/>
        </div>
        <div className='w-3/4 h-full flex items-center absolute top-0'>
          <div className='w-1/2'>
          </div>
          <div className='bg-secondary w-1/2 h-min p-5'>
            <p className=''>New Arrival</p>
            <p className='text-primary'>Discover Our New Collection</p>
            <p>explore the furniture in FurniZone to experience authentic collection for your sweet home</p>
            <button className='bg-orange-400 p-4 text-white'>Buy Now</button>
          </div>
        </div>
        
    </div>
  )
}

export default HomeSection1