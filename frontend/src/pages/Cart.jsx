import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachCart from '../components/user/EachCart'
import { Toaster } from 'react-hot-toast'
const Cart = () => {
    const [cartData, setCartData] = useState([])
    let total = 0

    useEffect(()=>{
        const userId = '65d366a5663b0f345086c712'
        axios.get(`http://localhost:4000/cart/get/${userId}`)
        .then(res=>setCartData(res.data.existingCart.products))
        .catch(error=>console.log(error))
    },[])

    console.log(cartData)


    async function removeFromCart(product_id){
      const userId = '65d366a5663b0f345086c712'
      const res = await axios.put(`http://localhost:4000/cart/delete/${userId}`, {product_id : product_id})
      setCartData(res.data.populatedCart.products)
     }

     async function removeCartAddWishlist(product_id){
      const userId = '65d366a5663b0f345086c712'
      const res = await axios.put(`http://localhost:4000/cart/delete/${userId}`,{product_id : product_id})
      setCartData(res.data.populatedCart.products)

      const res2 = await axios.post(`http://localhost:4000/wishlist/post/${userId}`, {product_id : product_id})
      console.log(res2.data)
     }


    async function updateProduct(product_id, quantity) {
      const userId = '65d366a5663b0f345086c712'

      if(quantity>=1){
      await axios.put(`http://localhost:4000/cart/put/${userId}`, {product_id : product_id , quantity: quantity})
        .then(res => {
          setCartData(res.data.populatedCart.products);
        })
      .catch(error => {console.error(error);});
      }

      else{
        console.log("enter")
        await axios.put(`http://localhost:4000/cart/delete/${userId}` , {product_id : product_id})
          .then(res => {setCartData(res.data.populatedCart.products);})
          .catch(error => {console.error(error);});
      }
    }

  console.log(cartData)

  cartData.map((data,index)=>{
    return(
      total += (data.product_id.price*data.quantity)
    )
  })

  console.log(total)

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='max-w-[1400px] w-full flex justify-between'>
        <div className='w-full'>
          {
            cartData.length>0 ?
            (
            <div className='w-full flex justify-between mt-10'>


              <div className='w-1/2'>
                {
                  cartData.map((data, index)=>{
                      return(
                          <div key={index} className='bg-bg p-4'>
                              <EachCart eachCartData = {data} updateProduct={updateProduct} removeFromCart={removeFromCart} removeCartAddWishlist={removeCartAddWishlist}/>
                          </div>
                      )
                  })
                }
              </div>

              <div className='flex flex-col text-3xl tracking-wide w-1/3 h-min space-y-6 bg-secondary p-10 sticky top-10'>

                <p className='border-b-2 py-6'>PRICE DETAILS :</p>
                <div className='flex justify-between'>
                  <p>Items</p>
                  <p>{cartData.length}</p>
                </div>
                
                <div className='flex justify-between'>
                  <p>Delivery Charges</p>
                  <p>free</p>
                </div>
                <div className='flex justify-between'>
                  <p>subtotal</p>
                  <p>₹{total}</p>
                </div>
              
              </div>


            </div>
            ):(
              <p className='text-center text-3xl tracking-wider text-primary m-20'>Yet To Add Product In Cart!</p>
            )
          }
        </div>
        
      </div>
      <Toaster/>
    </div>
  )
}

export default Cart
