import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import '../index.css'
import { FaLink } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import {useNavigate} from 'react-router-dom';

const ProductCard = () => {

    const params = useParams()
    const [product, setProduct] = useState(null)
    const [cartInfo, setCartInfo] = useState(0)
    const [dynamicCart, setDynamicCart] = useState(false)
    const navigate = useNavigate()
    const [staticWishlist, setStaticWishList] = useState(false)
    const [dynamicWishlist, setDynamicWishlist] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:4000/singleproduct/get/${params.id}`)
        .then(res=>{setProduct(res.data.existingProduct)})
        .catch(error=>console.log(error))
    },[])

    
    // for cart

    async function handleCart(){
      const userId = '65d366a5663b0f345086c712'
      try {
        const res = await axios.put(`http://localhost:4000/cart/put/${userId}`, { product_id: product._id });
        setCartInfo(res.status);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  
    console.log("cartinfo", cartInfo)
  
  
    
    useEffect(() => {
      const fetchCartData = async () => {
          const userId = '65d366a5663b0f345086c712';
          try {
              const res = await axios.get(`http://localhost:4000/cart/get/${userId}`);
              const productIds = res.data.existingCart.products.map(data => data.product_id._id);
              setDynamicCart(productIds.includes(product._id)); // Update dynamicCart with the fetched data
          } catch (error) {
              console.error('Error fetching cart data:', error);
          }
      };

      fetchCartData(); // Call the async function
  }, [product]);

console.log("dsfsdf",dynamicCart)

    



    
    //for wishlist
    
    async function handleWishlistClick(){
      
      const userId= '65d366a5663b0f345086c712'
      const res = await axios.post(`http://localhost:4000/wishlist/post/${userId}`, { product_id: product._id });
      setStaticWishList(!staticWishlist)
  }
  

  // console.log("wishlisted?", staticWishlist)

  useEffect(()=>{
    const userId= '65d366a5663b0f345086c712'
    axios.get(`http://localhost:4000/wishlist/get/${userId}`)
    .then(res=>
      {const productIds = res.data.existingWishlist.products.map(data => data.product_id._id);
      setDynamicWishlist(productIds.includes(product._id))}
      )
    .catch(error=>console.log(error))
  },[product])

  // console.log("fwefwf",dynamicWishlist)



    
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='max-w-[1400px] w-full flex flex-col items-center'>
        <div className='flex p-5 text-lg w-full px-10 bg-bg'>
          <div style={{borderRight: '2px solid gray'}} className=' px-5 w-1/4 flex justify-around'>
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
            <div className='flex justify-evenly mb-20'>
              <div className='w-2/4'>
                <img src={product.imageUrl} alt='product image'/>
              </div>
              <div className='space-y-9'>
                <p className='text-5xl  font-semibold tracking-wider'>{product.name}</p>
                <p className='text-4xl text-gray-500'>₹{product.price}</p>
                <p className='tracking-wide text-lg'>{product.desc}</p>
                <p className='tracking-wide text-right text-2xl'>~ By {product.shop_name}</p>
                <div className='flex justify-between pt-4'>
                  <button className='p-5 border-2' onClick={handleWishlistClick}>
                    {
                      staticWishlist || dynamicWishlist ?
                      <FaHeart size={25} color="red"/>
                      :<FaRegHeart size={25} color="red" />
                      
                    }
                  </button>
                  <button className='p-5 border-2'><FaLink/></button>

                                                                                                                                             
                  
                  {
                    cartInfo === 200 || dynamicCart ?
                    <button className='bg-orange-200 text-xl px-6 py-3 rounded-md'>Added to cart</button>
                    :
                    <button className='bg-orange-200 text-xl px-8 py-3 rounded-md' onClick={handleCart}>Add To Cart</button>
                  }

                </div>
                <div className='border-2 px-4 flex justify-between'>
                  <input placeholder='Enter Pincode' className='p-5 outline-none'/>
                  <button>CHECK</button>
                </div>
                <div className='flex justify-between pb-10'>
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
