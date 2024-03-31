import React from 'react'
import { LuLogOut } from "react-icons/lu";
import Cookies from 'js-cookie';
import { GiHamburgerMenu } from "react-icons/gi";

const SellerNav = ({toggleSideBar}) => {


  function handleLogout(){
    Cookies.remove('auth');
    console.log("log out as seller");
    location.reload();
    navigate('/seller/login');
  }


  return (
    <div className='flex justify-between w-full text-5xl shadow-xl p-10  text-indigo-950 items-center rounded-md '>
        <div className='flex items-center space-x-5'>
          <span onClick={()=> toggleSideBar()}><GiHamburgerMenu/></span>
          <span>Admin Panel</span>
        </div>
        <div className='flex items-center space-x-2 font-semibold text-4xl cursor-pointer' onClick={handleLogout}>
        <LuLogOut />
        <span>Log out</span>
        </div>
    </div>
  )
}

export default SellerNav
