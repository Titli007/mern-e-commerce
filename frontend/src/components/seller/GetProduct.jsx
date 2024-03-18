import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EachProductsOfSeller from './EachProductsOfSeller'

const GetProduct = () => {
    const userId = '65e0d50e460a53c15595febb'
    const [products,setProducts] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:4000/products/get/${userId}`)
      .then(response=>setProducts(response.data.products))
      .catch(error=>console.log(error))
    },[])

    console.log(products)
  return (
    <div>
      {
        products.length>0&&(
          <>
          {
            products.map((data,index)=>{
              return(
              <div key={index}>
                <EachProductsOfSeller products={data}/>
              </div>)
            })
          }
          </>
        )
      }
    </div>
  )
}

export default GetProduct
