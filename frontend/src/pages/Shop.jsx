import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EachProduct from '../components/EachProduct'
import ShopMaster from '../components/ShopMaster'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'


const Shop = () => {

    const [allProducts, setAllProducts] = useState([])
    const [allWishlist, setAllWishlist] = useState([])

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    console.log(category)

    useEffect(()=>{
        const getProductUrl = category? `http://localhost:4000/product/get?category=${category}`  :`http://localhost:4000/product/get`
        axios.get(getProductUrl)
        .then(res=>{setAllProducts(res.data.products)})
        .catch(error=>console.log(error))
    },[])

    // console.log(allProducts)

    useEffect(()=>{
        const userId= '65d366a5663b0f345086c712'
        axios.get(`http://localhost:4000/wishlist/get/${userId}`)
        .then(res=>
            {const productIds = res.data.existingWishlist.products.map(data => data.product_id._id);
            setAllWishlist(productIds);}
            )
        .catch(error=>console.log(error))
    },[])

    // console.log("allwishlist",allWishlist)

  return (
    <div className='w-full flex flex-col items-center'>
        
    <div className='max-w-[1400px] w-full'>
        
        <div><ShopMaster/></div>
            <div>
                {allProducts.length>0&&
                <div className='grid grid-cols-4 gap-16 m-4'>
                    {allProducts.map((product,index)=>{
                    return(
                        <EachProduct key={index} product={product} button="Add To Cart" isWishListed={allWishlist.includes(product._id)}/>
                    )
                    })}
            </div>}
        </div>
        <div><Footer/></div>
    </div>
    <Toaster/>
    </div>
  )
}

export default Shop
