import React from 'react'
import { BsSearch } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Nav = () => {
  return (
    <div className='flex justify-around m-5'>
        <span>FurniZone</span>
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
        <span><BsSearch /></span>
        <span><MdAccountCircle /></span>
        <span><FaHeart /></span>
        <span><MdOutlineShoppingCart /></span>
    </div>
  )
}

export default Nav