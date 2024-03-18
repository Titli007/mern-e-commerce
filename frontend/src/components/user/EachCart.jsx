import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
  await removeFromCart(eachCartData.product_id._id)
 }

 
async function addToWishlistHandler(){
  await removeCartAddWishlist(eachCartData.product_id._id)
}
 

  return (
    <div className='border-b-2 border-gray-300 p-10 '>
        <div className='text-3xl tracking-wider space-y-4 flex space-x-4'>
          <div className='w-96'>
            <img  src={eachCartData.product_id.imageUrl}/>
          </div>
          <div>
            <p>{eachCartData.product_id.name}</p>
            <p>{eachCartData.product_id.desc}</p>
            
            
            <p>Seller :  {eachCartData.product_id.shop_name}</p>
            <p>₹{eachCartData.product_id.price}</p>
          </div>
          
        </div>

        <div className='flex space-x-5 text-2xl my-8 justify-between'>
          <div className='flex'>
            <button className='bg-white px-4 pb-2 rounded-full border-2 text-4xl' onClick={quantityDowngradeHandler}>-</button>
            <p className=' bg-white border-2 px-5 pt-2 mx-3'>{quantity}</p>
            <button className='bg-white px-4 pb-2 rounded-full border-2 text-4xl' onClick={quantityUpgradeHandler}>+</button>
          </div>
          <p className='px-10 py-1 text-primary border-2 border-primary' onClick={removeButtonHandler}>Remove</p>
          <p className='px-10 py-1 text-primary border-2 border-primary' onClick={addToWishlistHandler}>Move To Wishlist</p>
        </div>

    </div>
  )
}

export default EachCart
