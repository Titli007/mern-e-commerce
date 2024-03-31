import React,{useState, useEffect, useContext} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { notify} from './Toast';
import {globalContext, reducer, initialState} from '../Global_variable/context'
import Protected from '../middleware/Protected';


const EachProduct = ({product,index,button , isWishListed}) => {
  const buttonProp = button || null
  const [wishList, setWishList] = useState(false) //static
  const navigate = useNavigate()
  const {state} = useContext(globalContext)
  const [userId, setUserId] = useState()
  
 
  const param = useParams()

  useEffect(()=> {
    setUserId(state.userId)
  }, [state.userId])

  useEffect(()=> {
    setWishList(isWishListed) //dynamic
  },[isWishListed])

  

  const product_id = product._id

  async function handleWishlistClick(e){
    e.stopPropagation()
    setWishList(!wishList)
  }


async function postWishlistClick(e){
  notify("Product Added To WishList", 'success')
  e.stopPropagation()
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/wishlist/post/${userId}`, { product_id: product_id });
  console.log(res.data)
  if(res.status===200) {
    setWishList(true); //static
}
}

async function removeWishlistClick(e){
  notify("Product Removed From Wishlist" , 'error')
  e.stopPropagation()
  const res = await axios.put(`${import.meta.env.VITE_API_URL}/wishlist/delete/${userId}`, { product_id: product_id });
  console.log(res.data)
  if(res.status===200) {
    setWishList(false); //static
}
}

  return (
    <div className='text-center md:w-80 md:h-max hover:scale-105 hover:transform hover:transition-transform hover:duration-300 hover:ease-in-out'>
        {
            product&&
            <div className='tracking-wide space-y-6 shadow-xl p-3 md:p-9' onClick={()=>navigate(`/product/${product_id}`)}>
            <div key={index} className='space-y-4 relative'>
              <div className=''><img className='w-full h-52 object-cover' src={product.imageUrl} alt='image'/></div>
              {
                buttonProp&&

                <div className='absolute top-0 right-0'>
                
                  <div className='p-2 rounded-full bg-white m-3' onClick={handleWishlistClick}>
                    {
                      wishList ?(
                      <button onClick={removeWishlistClick}><FaHeart size={25} color="red"/></button>
                      ):(
                      <button onClick={postWishlistClick}><FaRegHeart size={25} color="red" /></button>
                      )
                    }
                  </div>
                </div>
              }
                
                
                <p className='text-2xl font-semibold text-primary'>{product.name}</p>
                <p className='truncate px-5 md:px-0'>{product.desc}</p>
                <p className='text-xl truncate'>{product.category}</p>
                <p className='text-xl text-gray-500'>₹{product.price}</p>
            </div>
            <div className=''>
              
              {/* {
                buttonProp&&
                <button className='bg-secondary text-xl px-7 py-3 rounded-md' onClick={handleCart}>{buttonProp}</button>
              } */}
            </div>
            </div>
        }
        
    </div>
  )
}

export default EachProduct