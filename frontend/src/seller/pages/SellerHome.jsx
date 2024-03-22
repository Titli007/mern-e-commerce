import React from 'react'
import SellerNav from '../components/SellerNav'
import SideBar from '../components/SideBar'
import GetProduct from '../components/GetProductOfSeller'
import { Outlet, useNavigate } from 'react-router-dom'
import Products from '../components/SellerHeader'

const SellerHome = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-full'>
            <div className='flex w-full'>
                <div>
                    <SideBar/>
                </div>
                <div className='w-full'>
                    <div className='w-full'>
                        <SellerNav/>
                    </div>

                    <div className='px-20'>
                        <Outlet/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerHome
