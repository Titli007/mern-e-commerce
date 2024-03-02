import React from 'react'
import CategorySection from './CategorySection'
import dining from '../images/Mask Group (1).jpg'
import living from '../images/Image-living room.jpg'
import bedRoom from '../images/Mask Group (2).jpg'

const HomeSection2 = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='text-center m-4'>
            <p>Browse The Range</p>
            <p>Explore furnitures for your specific room</p>
        </div>
        <div className='w-2/3 flex justify-between'>
            <CategorySection image={dining} text="Dining"/>
            <CategorySection image={living} text="Living"/>
            <CategorySection image={bedRoom} text="Bedroom"/>
        </div>
    </div>
  )
}

export default HomeSection2