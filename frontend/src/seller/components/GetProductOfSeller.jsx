import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EachProductsOfSeller from './EachProductsOfSeller'

const GetProduct = () => {
    const sellerId = '65e0d50e460a53c15595febb'
    const [products,setProducts] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:4000/products/get/${sellerId}`)
      .then(response=>setProducts(response.data.products))
      .catch(error=>console.log(error))
    },[])

    console.log(products)
  return (
    <div className='my-10'>
      {
        products.length>0&&(
          <div className='grid grid-cols-4 gap-6'>
          {
            products.map((data,index)=>{
              return(
              <div key={index}>
                <EachProductsOfSeller product={data}/>
              </div>)
            })
          }
          </div>
        )
      }
    </div>
  )
}

export default GetProduct
