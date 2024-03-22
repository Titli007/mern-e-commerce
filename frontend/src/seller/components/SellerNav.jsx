import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

const SellerNav = () => {
  return (
    <div className='flex justify-between w-full text-5xl shadow-xl p-10  text-indigo-950 items-center rounded-md'>
        <div className='flex space-x-0 items-center'>
            <IoSearch/>
            <input className='outline-none py-2 text-2xl px-12 ' placeholder='Search'/>
        </div>
        <div className='flex space-x-14'>
            <IoNotifications/>
            <RiAccountCircleFill/>
        </div>
    </div>
  )
}

export default SellerNav
