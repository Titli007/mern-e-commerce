import React from 'react'
import { BsSearch } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center w-full justify-center shadow-lg mb-5'>
      <div className='max-w-[1400px] w-full '>

        <div className='flex w-full py-5'>
          <div className='flex justify-around w-full p-4 text-xl'>
            <span className='cursor-pointer hover:text-primary hover:opacity-55' onClick={()=>navigate('/')}>FurniZone</span>
            <span className='cursor-pointer hover:text-primary hover:opacity-55' onClick={()=>navigate('/')}>Home</span>
            <span className='cursor-pointer hover:text-primary hover:opacity-55' onClick={()=>navigate('/shop')}>Shop</span>
            <span className='cursor-pointer hover:text-primary hover:opacity-55'>About</span>
            <span className='cursor-pointer hover:text-primary hover:opacity-55'>Contact</span>
            <span className='cursor-pointer hover:text-primary'><BsSearch size={25}/></span>
            <span className='cursor-pointer hover:text-primary'><MdAccountCircle size={25}/></span>
            <span className='cursor-pointer' onClick={()=>navigate('/wishlist')}><FaHeart color='red' size={25}/></span>
            <span className='cursor-pointer hover:text-primary '><MdOutlineShoppingCart size={25} onClick={()=>navigate('/cart')}/></span>
          </div>
        </div>

      </div>
      </div>
      
    
    
  )
}

export default Nav