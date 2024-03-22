import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategorySection = ({image, text}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/get?category=${text}`)}>
        <div className='flex flex-col'>
            <img src={image} width={250} alt={text} />
            <span className='text-center'>{text}</span>
        </div>
    </div>
  )
}

export default CategorySection