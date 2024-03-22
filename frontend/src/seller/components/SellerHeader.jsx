import React from 'react'
import GetProduct from './GetProductOfSeller'
import { useNavigate } from 'react-router-dom'

const SellerHeader = () => {
    const navigate = useNavigate()
  return (
    <div className=''>
        <div className='flex justify-between my-10 mx-3'>
            <p className='text-3xl tracking-wider font-bold'>products :</p>
            <button className='px-10 py-3 bg-primary text-white text-xl' onClick={()=>navigate('/seller/create')}> + Create New</button>
        </div>

        <div>
            <GetProduct/>
        </div>
    </div>
  )
}

export default SellerHeader
