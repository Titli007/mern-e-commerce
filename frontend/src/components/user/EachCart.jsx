import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { notify } from '../Toast'


const EachCart = ({eachCartData, updateProduct, removeFromCart, removeCartAddWishlist}) => {
  const [quantity , setQuantity] = useState(0)

  useEffect(()=> {
    setQuantity(eachCartData.quantity)
  },[eachCartData])


  async function quantityUpgradeHandler() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateProduct(eachCartData.product_id._id, newQuantity);
 }

 async function quantityDowngradeHandler() {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    await updateProduct(eachCartData.product_id._id, newQuantity);
 }

 async function removeButtonHandler(){
  notify("Product Removed From Cart")
  await removeFromCart(eachCartData.product_id._id)
 }

 
async function moveToWishlistHandler(){
  notify("Product Added To Wishlist")
  await removeCartAddWishlist(eachCartData.product_id._id)
}
 

  return (
    <div className='border-b-2 border-gray-300 md:p-10 py-10'>
        <div className='text-3xl tracking-wider space-y-4 flex space-x-4'>
          <div className='md:w-96 w-full'>
            <img  src={eachCartData.product_id.imageUrl}/>
          </div>
          <div>
            <p>{eachCartData.product_id.name}</p>
            
            
            <p>Seller :  {eachCartData.product_id.shop_name}</p>
            <p>₹{eachCartData.product_id.price}</p>
          </div>
          
        </div>

        <div className='flex space-x-5 text-2xl my-8 md:mx-5 mx-2'>
          <div className='flex h-1/2'>
            <button className='bg-white lg:px-4 lg:pb-2 rounded-full  border-2 text-4xl px-2' onClick={quantityDowngradeHandler}>-</button>
            <p className=' bg-white border-2 lg:px-5 lg:pt-2 md:mx-3 px-2'>{quantity}</p>
            <button className='bg-white lg:px-4 lg:pb-2 rounded-full border-2 text-4xl px-2' onClick={quantityUpgradeHandler}>+</button>
          </div>
          <p className='md:px-10 md:py-1 p-3 text-primary border-2 border-primary' onClick={removeButtonHandler}>Remove</p>
          <p className='md:px-10 md:py-1 px-3 text-primary border-2 border-primary' onClick={moveToWishlistHandler}>Move To Wishlist</p>
        </div>
      
    </div>
  )
}

export default EachCart
