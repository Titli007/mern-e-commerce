import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col mt-40 bg-slate-100 p-10'>
        <hr className='border-gray-800'></hr>

        <div className='md:flex md:justify-between my-4 grid grid-cols-3 gap-9'>
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
                    <p>
                        <p className='border-b-2 border-gray-400 ml-10 md:ml-0'>SUBSCRIBE</p>
                    </p>
                    
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
