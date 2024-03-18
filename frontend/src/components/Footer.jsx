import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col mt-40 bg-slate-100 p-10'>
        <hr className='border-gray-800'></hr>

        <div className='flex justify-between my-4'>
            <div>
                <p>FurniZone</p>
                <p>400 University Drive Suite 200 Coral Gables,
                    <br/> FL 33134 USA</p>
            </div>
            <div>
                <p>Links</p>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div>
                <p>Help</p>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
            </div>
            <div>
                <p>Newsletter</p>
                <div className='flex'>
                    <p className='mr-10'>Enter Your Email Address</p>
                    <p className='border-b-stone-950'>SUBSCRIBE</p>
                </div>
            </div>
        </div>
        <hr className='border-gray-800'></hr>
        <div className='flex my-4'><p className=''>2023 furino. All rights reverved</p>
        <div></div>
        <div></div>
        <div></div></div>

    </div>
  )
}

export default Footer
