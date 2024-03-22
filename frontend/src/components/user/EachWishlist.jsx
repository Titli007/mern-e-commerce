import React from 'react'
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { notify } from '../Toast';
import { Toaster } from 'react-hot-toast';

const EachWishlist = ({wishlistData, deleteWishlist}) => {
  const userId= '65d366a5663b0f345086c712'

  const removeButtonHandler = async() => {
    notify("Product Removed From Wishlist" , 'error')
    await deleteWishlist(wishlistData.product_id._id)
  }

  async function handleCart(){
    notify("Product Added To Cart" , 'success')
    const userId = '65d366a5663b0f345086c712'

    try {
      const res = await axios.put(`http://localhost:4000/cart/put/${userId}`, { product_id: wishlistData.product_id._id });
      console.log(res.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }

    await deleteWishlist(wishlistData.product_id._id)
    
  }

  return (
    <div className='m-10'>
      <div className='space-y-4 relative'>
        <div>
          <img className='h-80 w-96 object-cover' src={wishlistData.product_id.imageUrl} alt='image'/>
        </div>
        <p className='text-3xl font-semibold text-primary'>{wishlistData.product_id.name}</p>
        <p className='text-2xl text-gray-500'>₹{wishlistData.product_id.price}</p>
        <button className='px-5 py-1 text-primary border-2 border-primary mr-16' onClick={handleCart}>Add To Bag</button>
        <div className='absolute top-0 right-20 rounded-full'>
        <button className='rounded-full p-3 text-xl bg-gray-200 absolute' onClick={removeButtonHandler}><RxCross1 /></button>
        </div>
      </div>
      
    </div>
  )
}

export default EachWishlist
