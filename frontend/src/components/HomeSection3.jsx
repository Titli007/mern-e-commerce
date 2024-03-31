import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EachProduct from './EachProduct'
import { useNavigate } from 'react-router-dom'

const HomeSection3 = () => {

  const [allProducts, setAllProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const getProductUrl = `${import.meta.env.VITE_API_URL}/product/get`
    axios.get(getProductUrl)
    .then(res=>setAllProducts(res.data.products))
    .catch(error=>console.log(error))
  },[])
  
  return (
    <>
    <p className='text-center font-bold text-4xl my-10'>Our Products</p>
      {allProducts&&
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-16'>
        {allProducts.slice(0, 8).map((product,index)=>{
          return(
            <EachProduct key={index} product={product}/>
          )
        })}
      </div>}
      <div className='w-full flex justify-center'>
      <button className='px-10 py-1 my-10 text-primary border-2 border-primary' onClick={()=> navigate('/shop')}>Show More</button>
      </div>
    
    </>
    )
}

export default HomeSection3