import React from 'react'

const CategorySection = ({image, text}) => {
  return (
    <div>
        <div className='flex flex-col'>
            <img src={image} width={250} alt={text} />
            <span className='text-center'>{text}</span>
        </div>
    </div>
  )
}

export default CategorySection