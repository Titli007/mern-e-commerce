import React, { useContext, useEffect, useState } from 'react'
import SellerNav from '../components/SellerNav'
import SideBar from '../components/SideBar'
import GetProduct from '../components/GetProductOfSeller'
import { Outlet, useNavigate } from 'react-router-dom'
import Products from '../components/SellerHeader'
import { globalContext } from '../../Global_variable/context'


const SellerHome = () => {
    const {state, dispatch} = useContext(globalContext)
    const [isSideBarActive, setIsSideBarActive] = useState(true)

    const toggleSideBar = () =>  {
        setIsSideBarActive(!isSideBarActive)
    }

  return (
    <div className='w-full flex flex-col items-center'>
        <div className='w-full'>
                <SellerNav toggleSideBar={toggleSideBar}/>
        </div>
        <div className='w-full'>
            <div className='flex w-full'>
                {isSideBarActive &&
                    <div>
                        <SideBar/>
                    </div>
                }
                <div className='w-full'>

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
