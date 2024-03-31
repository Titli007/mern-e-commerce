import React from 'react'
import Home1 from '../images/background1.jpg'

const HomeSection1 = () => {
  return (
    <div className='w-full md:flex justify-center relative md:relative '>
        <div className='mb-5 md:mb-0'>
            <img src={Home1} alt='A room picture'/>
        </div>
        <div className='text-primary absolute top-16 left-20 text-4xl md:sr-only'>
          <span>WELCOME TO FURNIZONE!</span>
        </div>
        <div className='w-full h-full flex  md:absolute md:top-20 md:right-10 md:w-2/3'>
          <div className='md:w-1/2 md:not-sr-only'>
          </div>
          <div className='space-y-4  bg-secondary mx-10 h-min p-10 md:m-0 md:p-5'>
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