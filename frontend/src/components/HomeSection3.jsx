import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EachProduct from './EachProduct'
import { useNavigate } from 'react-router-dom'

const HomeSection3 = () => {

  const [allProducts, setAllProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const id = '65d366a5663b0f345086c712'
    const getProductUrl = `http://localhost:4000/product/get`
    axios.get(getProductUrl)
    .then(res=>setAllProducts(res.data.products))
    .catch(error=>console.log(error))
  },[])

  return (
    <>
    <p className='text-center font-bold text-4xl m-10'>Our Products</p>
      {allProducts&&
      <div className='grid grid-cols-4 gap-16 m-4'>
        {allProducts.slice(0, 8).map((product,index)=>{
          return(
            <EachProduct key={index} product={product}/>
          )
        })}
      </div>}
      <div className='w-full flex justify-center'>
      <button className='px-10 py-1 text-primary border-2 border-primary' onClick={()=> navigate('/shop')}>Show More</button>
      </div>
    
    </>
    )
}

export default HomeSection3