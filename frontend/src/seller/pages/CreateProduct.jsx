import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {globalContext} from '../../Global_variable/context'
import { useNavigate } from 'react-router-dom'


const CreateProduct = () => {
    const params = useParams()
    
    const [name,setName] = useState("")
    const [desc,setDesc] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [image, setImage] = useState(null);

  
    const navigate = useNavigate()
    const [cartData, setCartData] = useState([])
    const {state} = useContext(globalContext)
    const [sellerId, setSellerId] = useState()

    useEffect(()=> {
      setSellerId(state.sellerId)
    }, [state.sellerId])

    console.log(sellerId)

    const formHandler= async(e) =>{
      e.preventDefault()
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('file', image);
      formData.append('category', category);
      formData.append('price', price);

      try {
        const response =await axios.post(`${import.meta.env.VITE_API_URL}/product/create/${sellerId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);

        setName('');
        setDesc('');
        setCategory('');
        setPrice('');
        setImage(null);
      } catch (error) {
          console.error('Error while creating product:', error);
      }
      
    }
  return (
    

    <div className='text-indigo-950 flex items-center w-full justify-center py-6'>
      <form className='space-y-10 w-1/2 flex flex-col justify-center p-16' onSubmit={formHandler} >

        <p className='text-5xl font-bold '>Create Product :</p>

        <div className='border-2 border-primary flex w-full flex-col text-3xl space-y-8 outline-none  py-10 px-16 '>

          <label>Product Title :</label>
          <input className='outline-none  border-2 py-2 px-2 ' placeholder='Product Name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <label>Product Description :</label>
          <input className='outline-none  border-2 py-2 px-2' placeholder='Description' type='text' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
          <label>Product Image :</label>
          <input className='outline-none  border-2 py-2 px-2' placeholder='Upload Image' type='file' onChange={(e)=>{setImage(e.target.files[0])}}/>
          <label>Category :</label>
          <select className=' border-2 py-2 px-2' name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Select Category" >Select Category</option>
              <option value="Bed Room">Bed Room</option>
              <option value="Living">Living</option>
              <option value="Dining">Dining</option>
          </select>
          <label>Price :</label>
          <input className='outline-none  border-2 py-2 px-2' placeholder='Price' type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
          <div className='py-6 w-full text-end'>
            <button className='py-4 px-10 bg-primary  rounded-xl text-white' type='submit'>Submit</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default CreateProduct


