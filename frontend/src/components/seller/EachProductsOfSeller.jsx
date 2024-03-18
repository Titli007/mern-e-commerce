import React, { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { MdDelete } from "react-icons/md";

const EachProductsOfSeller = ({products}) => {
  const [edit,setEdit] = useState(false)
  const[updatedPrice, setUpdatedPrice] = useState(products.price)
  const [updatedProduct,setUpdatedProduct] = useState('')
  
  function editHandler() {
    setEdit(!edit)
  }
  function callApiForUpdate(){
    console.log(updatedPrice)
    axios.put(`http://localhost:4000/product/update/${products._id}`, {price:updatedPrice})
    .then(res=>setUpdatedProduct(res.data))
    .catch(error=>console.log(error))

    window.location.reload();
  }
  console.log(updatedProduct)

  function callApiForDelete(){
    axios.delete(`http://localhost:4000/product/delete/${products._id}`)
    .then(res=>console.log(res.data))
    .catch(error=>console.log(error))

    window.location.reload();
  }

  return (
    <div>
      <img src={products.imageUrl}/>'
      <button onClick={editHandler}>
        <AiFillEdit size={45}/>
      </button>
      <button onClick={callApiForDelete}>
        <MdDelete size={45}/>
      </button>
      {
        !edit? 
        <>
        <p>{products.price}</p>
        </>
        :
        <p>
        <input value={updatedPrice} onChange={(e)=>{setUpdatedPrice(e.target.value)}}/>
        <button onClick={callApiForUpdate}>done</button>
        </p>
      }

      
      
      <p>{products.name}</p>
      <p>{products.desc}</p>
      <p>{products.category}</p>
    </div>
  )
}

export default EachProductsOfSeller
