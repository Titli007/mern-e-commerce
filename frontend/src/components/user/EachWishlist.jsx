import React, {useState,useEffect, useContext} from 'react'
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { notify } from '../Toast';
import { globalContext } from '../../Global_variable/context';

const EachWishlist = ({wishlistData, deleteWishlist}) => {

  const {state} = useContext(globalContext)
  const [userId, setUserId] = useState()

  useEffect(()=> {
    setUserId(state.userId)
  }, [state.userId])

  const removeButtonHandler = async() => {
    notify("Product Removed From Wishlist" , 'error')
    await deleteWishlist(wishlistData.product_id._id)
  }

  async function handleCart(){
    notify("Product Added To Cart" , 'success')

    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/cart/put/${userId}`, { product_id: wishlistData.product_id._id });
      console.log(res.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }

    await deleteWishlist(wishlistData.product_id._id)
    
  }

  return (
    <div className='lg:m-10 m-4'>
      <div className='space-y-4 relative'>
        <div>
          <img className='md:h-80 w-96 object-cover' src={wishlistData.product_id.imageUrl} alt='image'/>
        </div>
        <p className='text-3xl font-semibold text-primary'>{wishlistData.product_id.name}</p>
        <p className='text-2xl text-gray-500'>₹{wishlistData.product_id.price}</p>
        <button className='px-5 py-1 text-primary border-2 border-primary mr-16' onClick={handleCart}>Add To Bag</button>
        <div className='absolute top-0 right-20 rounded-full md: md:right-32 lg:right-20'>
        <button className='rounded-full p-3 text-xl bg-gray-200 absolute' onClick={removeButtonHandler}><RxCross1 /></button>
        </div>
      </div>
      
    </div>
  )
}

export default EachWishlist
