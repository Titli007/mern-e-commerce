import React from 'react'
import CategorySection from './CategorySection'
import dining from '../images/Mask Group (1).jpg'
import living from '../images/Image-living room.jpg'
import bedRoom from '../images/Mask Group (2).jpg'
import { useNavigate } from 'react-router-dom'

const HomeSection2 = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='text-center '>
            <p className='font-bold text-4xl mt-10 mb-4'>Browse The Range</p>
            <p className='mb-9 text-slate-600 tracking-wider'>Explore furnitures for your specific room</p>
        </div>
        <div className='w-2/3 grid md:grid-cols-3 gap-8 justify-between grid-rows-1 p-10'>
            <CategorySection image={dining} text="Dining" />
            <CategorySection image={living} text="Living"/>
            <CategorySection image={bedRoom} text="Bedroom"/>
        </div>
    </div>
  )
}

export default HomeSection2