import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { MdDelete } from "react-icons/md";

const EachProductsOfSeller = ({product}) => {
  const [edit,setEdit] = useState(false)
  const[updatedPrice, setUpdatedPrice] = useState(product.price)
  const [updatedProduct,setUpdatedProduct] = useState('')
  
  function editHandler() {
    setEdit(!edit)
  }
  function callApiForUpdate(){
    console.log(updatedPrice)
    axios.put(`http://localhost:4000/product/update/${product._id}`, {price:updatedPrice})
    .then(res=>setUpdatedProduct(res.data))
    .catch(error=>console.log(error))

    window.location.reload();
  }
  console.log(updatedProduct)

  function callApiForDelete(){
    axios.delete(`http://localhost:4000/product/delete/${product._id}`)
    .then(res=>console.log(res.data))
    .catch(error=>console.log(error))

    window.location.reload();
  }

  return (
    <div className='relative'>
      

      <div className='w-full h-full object-cover hover:scale-105 hover:transform hover:transition-transform hover:duration-300 hover:ease-in-out'>
        {
            product&&
            <div className='tracking-wide space-y-6 shadow-xl p-9'>
            <div className='space-y-4 relative'>
              <div className=''><img className='w-full h-80 object-cover' src={product.imageUrl} alt='image'/></div>

              
              <button className='p-4 bg-white rounded-full absolute top-0 right-0' onClick={callApiForDelete}>
                <MdDelete size={30} color='red'/>
              </button>

              <p className='text-2xl font-semibold text-primary'>{product.name}</p>
              <p className='truncate'>{product.desc}</p>
              <p className='text-xl truncate'>{product.category}</p>


              <div className='flex space-x-10'>
                
                {
                  !edit? 
                  <>
                  <p className='text-xl text-gray-500'>₹{product.price}</p>
                  </>
                  :
                  <p>
                  <input value={updatedPrice} onChange={(e)=>{setUpdatedPrice(e.target.value)}}/>
                  <button onClick={callApiForUpdate}>done</button>
                  </p>
                }      

                <button onClick={editHandler}>
                  <AiFillEdit size={30} color='green'/>
                </button>
              </div> 
                
                
                
            </div>
            <div className=''>
              
            </div>
            </div>
        }
        
    </div>
    </div>
  )
}

export default EachProductsOfSeller
