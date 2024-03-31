import React,{useEffect,useState, useContext} from 'react'
import axios from 'axios'
import EachProductsOfSeller from './EachProductsOfSeller'
import { globalContext } from '../../Global_variable/context'

const GetProduct = () => {
    const [products,setProducts] = useState([])
    const {state} = useContext(globalContext)
    const[ sellerId, setSellerId] = useState('')

    useEffect(()=> {
      setSellerId(state.sellerId)
    }, [state.sellerId])

    console.log("rsrert",sellerId)

    useEffect(()=>{
      if(sellerId){
      axios.get(`${import.meta.env.VITE_API_URL}/products/get/${sellerId}`)
      .then(response=>setProducts(response.data.products))
      .catch(error=>console.log(error))
      }
    },[sellerId])

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
