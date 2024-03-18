import React from 'react'
import image from '../images/Rectangle_1.png'

const ShopMaster = () => {
  return (
    <div className='relative'>
        <div >
            <img src={image} width={2000} alt='image'/>
        </div>
        <div className='tracking-wider space-y-2 absolute top-1/3 left-2/4'>
            <p className='font-semibold text-4xl'>Shop</p>
            <p className='text-xl'>Home {'>'} Shop</p>
        </div>
    </div>
  )
}

export default ShopMaster
