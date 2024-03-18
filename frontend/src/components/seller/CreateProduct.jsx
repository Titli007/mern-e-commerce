import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CreateProduct = () => {
    const params = useParams()
    const sellerId = "65e0d50e460a53c15595febb"
    const [name,setName] = useState("")
    const [desc,setDesc] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [image, setImage] = useState(null);

    const formHandler= async(e) =>{
      e.preventDefault()
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('file', image);
      formData.append('category', category);
      formData.append('price', price);

      try {
        const response =await axios.post(`http://localhost:4000/product/create/${sellerId}`, formData, {
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
    <div>
      <form onSubmit={formHandler}>
        <p>Add Product :</p>
        <input placeholder='Product Name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder='Description' type='text' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <input placeholder='Upload Image' type='file' onChange={(e)=>{setImage(e.target.files[0])}}/>
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Select Category" >Select Category</option>
            <option value="Bed Room">Bed Room</option>
            <option value="Living">Living</option>
            <option value="Dining">Dining</option>
        </select>
        <input placeholder='Price' type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct


