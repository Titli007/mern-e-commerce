import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import '../index.css'
import { FaLink } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import toast, { Toaster } from 'react-hot-toast';
import { notify } from '../components/Toast';
import {globalContext} from '../Global_variable/context'

const ProductCard = () => {

    const params = useParams()
    const [product, setProduct] = useState(null)
    const [cartInfo, setCartInfo] = useState(0)
    const [dynamicCart, setDynamicCart] = useState(false)
    const [staticWishlist, setStaticWishList] = useState(false)
    const [dynamicWishlist, setDynamicWishlist] = useState(false)
    const {state} = useContext(globalContext)
    const [userId, setUserId] = useState()
    const [product_id, setProduct_id] = useState("")

    useEffect(()=> {
      setUserId(state.userId)
    }, [state.userId])

    

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/singleproduct/get/${params.id}`)
        .then(res=>{setProduct(res.data.existingProduct);console.log("res.data is =====",res.data)})
        .catch(error=>console.log(error))
    },[])

    useEffect(()=>{
      if(product){
        setProduct_id(product._id)
      }
    },[product])


    async function handleCart(){
      try {
        console.log("sdff")

        if(userId){
          console.log("userid", userId, "productid" , product_id)
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/cart/put/${userId}`, { product_id: product_id });
        setCartInfo(res.status);
        notify("Product Added To The Cart" , 'success')
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  
  
  
    
    useEffect(() => {
      const fetchCartData = async () => {
        if(userId){
          try {
              const res = await axios.get(`${import.meta.env.VITE_API_URL}/cart/get/${userId}`);
              const productIds = res.data.existingCart.products.map(data => data.product_id._id);
              setDynamicCart(productIds.includes(product_id)); // Update dynamicCart with the fetched data
            
            } catch (error) {
              console.error('Error fetching cart data:', error);
          }
        }
      };

      fetchCartData(); // Call the async function
  }, [product, userId]);



    




    
    //for wishlist


    useEffect(()=>{
      if(userId){
        console.log("1", userId)
        axios.get(`${import.meta.env.VITE_API_URL}/wishlist/get/${userId}`)
        .then(res=>
          {const productIds = res.data.existingWishlist.products.map(data => data.product_id._id);
          setDynamicWishlist(productIds.includes(product_id))}
          )
        .catch(error=>console.log(error))
      }
    },[product, userId])


    useEffect(()=> {
      setStaticWishList(dynamicWishlist) //dynamic
    },[dynamicWishlist])

    
    async function handleWishlistClick(){
      setStaticWishList(!staticWishlist)
    }
  
  
  async function postWishlistClick(e){
    console.log("2", userId)
    notify("Product Added To The Wishlist", 'success')
    e.stopPropagation()
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/wishlist/post/${userId}`, { product_id: product_id });
    console.log(res.data)
    if(res.status===200) {
      setStaticWishList(true); //static
  }
  }
  
  async function removeWishlistClick(e){
    notify("Product Removed From Wishlist", 'error')
    e.stopPropagation()
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/wishlist/delete/${userId}`, { product_id: product_id });
    console.log(res.data)
    if(res.status===200) {
      setStaticWishList(false); //static
  }
  }

  function copyUrlToClipboard() {
    // Create a temporary input element
  const tempInput = document.createElement('input');
  // Set its value to the current URL
  tempInput.value = window.location.href;
  // Append it to the DOM
  document.body.appendChild(tempInput);
  // Select the input element's content
  tempInput.select();
  // Copy the selected content to the clipboard
  document.execCommand('copy');
  // Remove the temporary input element from the DOM
  document.body.removeChild(tempInput);
  // Optional: Provide some feedback to the user
  alert('URL copied to clipboard!');
  }



    
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='max-w-[1400px] w-full flex flex-col items-center'>
        <div className='flex p-5 text-lg w-full px-10 bg-bg'>
          <div className='space-x-2 pr-6 md:px-5 md:w-1/4 flex justify-around border-r-2 border-gray-700'>
            <span>Home</span>
            <span>{'>'}</span>
            <span>Shop</span>
            <span>{'>'}</span>
          </div>
          {
            product&&
            <div className='px-10'>
              <span>{product.name}</span>
            </div>
          }
        </div>

        <div className='mt-10'>
          {
            product&&
            <div className='md:flex space-y-10 md:flex-row justify-evenly mb-20 w-full'>
              <div className='md:w-2/4 md:mr-20 m-8 md: m-2'>
                <img src={product.imageUrl} alt='product image'/>
              </div>
              <div className='space-y-9 md:w-96 text-center md:text-start m-10  md:mr-10'>
                <p className='text-5xl  font-semibold tracking-wider'>{product.name}</p>
                <p className='text-4xl text-gray-500'>₹{product.price}</p>
                <p className='tracking-wide text-lg'>{product.desc}</p>
                <p className='tracking-wide text-right text-2xl m-10 lg:m-0'>~ By {product.shop_name}</p>

                <div className='flex justify-center md:justify-between pt-4'>
                  
                 
                <div className='mx-4 md:mx-0 p-5 border-2' onClick={handleWishlistClick}>
                  {
                    staticWishlist ?(
                    <button onClick={removeWishlistClick}><FaHeart size={25} color="red"/></button>
                    ):(
                    <button onClick={postWishlistClick}><FaRegHeart size={25} color="red" /></button>
                    )
                  }
                </div>
                  
                <button className='ml-4 mr-8 md:ml-0 md:mr-0 p-5 border-2' onClick={copyUrlToClipboard}><FaLink/></button>


                {
                  cartInfo === 200 || dynamicCart ?
                  <button className='bg-orange-200 text-xl px-6 py-3 rounded-md'>Added to cart</button>
                  :
                  <button className='bg-orange-200 text-xl px-8 py-3 rounded-md' onClick={handleCart}>Add To Cart</button>
                }
                <Toaster/>


                </div>
                <div className='border-2 px-4 flex justify-between m-12 md:m-0'>
                  <input placeholder='Enter Pincode' className='p-5 outline-none'/>
                  <button>CHECK</button>
                </div>
                <div className='flex justify-between pb-10 m-10 md:m-0'>
                  <div className='flex '>
                    <div className='bg-orange-100  p-3 rounded-full mr-2'>
                      <CiDeliveryTruck size={35}/>
                    </div>
                    
                    <p>Free delivery <br/>within India</p>
                  </div>
                  <div className='flex'>
                    <div className='bg-orange-100 p-3 rounded-full mr-2'>
                      <GiReturnArrow size={35}/>
                    </div>
                    <p>Easy returns<br/> in 15 day</p>
                  </div>
                </div>
                
                <div>
                  

                </div>

              </div>
            </div>
          }
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard
