import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import EachWishlist from '../components/user/EachWishlist'
import { Toaster } from 'react-hot-toast'
import { globalContext } from '../Global_variable/context';


const wishlist = () => {
  const [allWishlistdata, setAllWishlistdata] = useState([])

  const {state} = useContext(globalContext)
  const [userId, setUserId] = useState()

  useEffect(()=> {
    setUserId(state.userId)
  }, [state.userId])


  useEffect(()=>{
    if(userId){
    axios.get(`${import.meta.env.VITE_API_URL}/wishlist/get/${userId}`)
    .then (res=>setAllWishlistdata(res.data.existingWishlist.products))
    .catch(error=>console.log(error))
    }
  },[userId])

  

  const deleteWishlist = async (productId) => {
    try {
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/wishlist/delete/${userId}`, {
            product_id: productId
        });
        console.log(res.data)
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
          <div className='grid grid-cols-2 lg:grid-cols-3 m-2 lg:m-10'>
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
