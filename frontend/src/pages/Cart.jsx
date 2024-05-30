import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import EachCart from '../components/user/EachCart'
import { Toaster } from 'react-hot-toast'
import {globalContext} from '../Global_variable/context'

const Cart = () => {
    const [cartData, setCartData] = useState([])
    const {state} = useContext(globalContext)
    const [userId, setUserId] = useState()

    useEffect(()=> {
      setUserId(state.userId)
    }, [state.userId])

    console.log("state is" , userId)
    let total = 0


    useEffect(()=>{
      if(userId) {
        axios.get(`${import.meta.env.VITE_API_URL}/cart/get/${userId}`)
        .then(res=>setCartData(res.data.existingCart.products))
        .catch(error=>console.log(error))
      }
    },[userId])

    const product_id = setCartData._id

    console.log(cartData)

    console.log("userid", userId, "productId", product_id)

    async function removeFromCart(product_id){
      if(userId){
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/cart/delete/${userId}`, {product_id : product_id})
      setCartData(res.data.populatedCart.products)
      }
     }

     async function removeCartAddWishlist(product_id){
      if(userId){
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/cart/delete/${userId}`,{product_id : product_id})
      setCartData(res.data.populatedCart.products)

      const res2 = await axios.post(`${import.meta.env.VITE_API_URL}/wishlist/post/${userId}`, {product_id : product_id})
      console.log(res2.data)
      }
     }


    async function updateProduct(product_id, quantity) {

      if(userId){
        if(quantity>=1){
        await axios.put(`${import.meta.env.VITE_API_URL}/cart/put/${userId}`, {product_id : product_id , quantity: quantity})
          .then(res => {
            setCartData(res.data.populatedCart.products);
          })
        .catch(error => {console.error(error);});
        }

        else{
          console.log("enter")
          await axios.put(`${import.meta.env.VITE_API_URL}/cart/delete/${userId}` , {product_id : product_id})
            .then(res => {setCartData(res.data.populatedCart.products);})
            .catch(error => {console.error(error);});
        }
    }
    }


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
            <div className='w-full lg:flex justify-between mt-10'>


              <div className='lg:w-3/4 mx-4 xl:w-1/2'>
                {
                  cartData.map((data, index)=>{
                      return(
                          <div key={index} className='bg-bg mg:p-4'>
                              <EachCart eachCartData = {data} updateProduct={updateProduct} removeFromCart={removeFromCart} removeCartAddWishlist={removeCartAddWishlist}/>
                          </div>
                      )
                  })
                }
              </div>
              
              <div>

              <div className='flex flex-col text-3xl tracking-wide lg:w-1/3 h-min space-y-6 bg-secondary p-10 sticky top-10 m-10 lg:m-0'>

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
              <p>Place Order</p>
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
