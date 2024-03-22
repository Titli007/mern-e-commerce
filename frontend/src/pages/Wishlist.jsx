import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EachWishlist from '../components/user/EachWishlist'
import { Toaster } from 'react-hot-toast'

const wishlist = () => {
  const [allWishlistdata, setAllWishlistdata] = useState([])

  const userId= '65d366a5663b0f345086c712'

  useEffect(()=>{
    axios.get(`http://localhost:4000/wishlist/get/${userId}`)
    .then (res=>setAllWishlistdata(res.data.existingWishlist.products))
    .catch(error=>console.log(error))
  },[])

  

  const deleteWishlist = async (productId) => {
    try {
        const res = await axios.put(`http://localhost:4000/wishlist/delete/${userId}`, {
            product_id: productId
        });
        setAllWishlistdata(res.data.populatedWishlist.products)
        console.log("enter")
    } catch (error) {
        console.error('Error deleting cart:', error);
        throw new Error('Failed to delete cart');
    }
};

  console.log(allWishlistdata)
  
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='max-w-[1400px] w-full'>
        {
          allWishlistdata.length>0 ?(
          <div className='grid grid-cols-3 m-10'>
            {
              allWishlistdata.map((data,index)=>{
                return(
                  <div key={index} >
                    <EachWishlist wishlistData = {data} deleteWishlist={deleteWishlist}/>
                  </div>
                )
              })
            }
          </div>
          ):
          (
            <p className='text-center text-3xl tracking-wider text-primary m-20'>Yet To Add Product In Wishlist!</p>
          )
        }
      </div>
      <Toaster/>
    </div>
  )
}

export default wishlist
