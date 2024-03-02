import React from 'react'

const EachProduct = ({product,index}) => {
  return (
    <div>
        {
            product&&
            <>
            <div key={index} className=''>
                <img className='w-full h-80 object-cover' src={product.imageUrl} alt='image'/>
                <p>{product.name}</p>
                <p>{product.desc}</p>
                <p>Seller :  {product.shop_name}</p>
                <p>₹{product.price}</p>
            </div>
            </>
        }
    </div>
  )
}

export default EachProduct