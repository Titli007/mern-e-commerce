import React from 'react'
import { FaList, FaShoppingCart} from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='shadow-2xl text-center h-full tracking-widest space-y-20 text-3xl text-indigo-950 pt-8 rounded-md w-96'>
      <div className='flex space-x-6 items-center px-16 cursor-pointer' onClick={()=>navigate('/seller')}>
        <FaList/>
        <p>Products</p>
      </div>

      <div className='flex space-x-6 items-center px-16'>
        <FaShoppingCart/>
        <p>Orders</p>
      </div>

      <div className='flex space-x-6 items-center px-16'>
        <MdGroups2/>
        <p>Customers</p>
      </div>

      <div className='flex space-x-6 items-center px-16'>
        <MdStarRate/>
        <p>Ratings</p>
      </div>

      <div className='flex space-x-6 items-center px-16'>
        <MdOutlineRateReview />
        <p>Reviews</p>
      </div>
      
    </div>
  )
}

export default SideBar
