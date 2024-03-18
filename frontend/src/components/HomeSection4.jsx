// import React, { useEffect, useState } from "react";
// import { GrNext } from "react-icons/gr";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const HomeSection4 = () => {
//   const RoomI


//   return (
//     <>
//       <div className="flex bg-bg p-10 relative">
//         <div
//           className={`m-10 space-y-10 tracking-wider ${
//             isCarouselActive ? "hidden" : "w-1/3"
//           }`}
//         >
//           <p className="text-5xl font-bold">15+ Beautiful rooms inspiration</p>
//           <p className="text-gray-600">
//             Our designer already made a lot of beautiful prototype
//             <br /> of rooms that inspire you
//           </p>
//         </div>
//         <div className={`flex ${isCarouselActive ? "w-full" : "w-2/3"}`}>
//         {images.map((image, index) => (
//             <div key={index} className="h-96 w-96">
//               <img className="w-full h-full" src={image} alt={`Room Inspiration ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//         <div
//           className="bg-white rounded-full p-6 h-min absolute top-52 right-14"
//           onClick={() => handleCarousel()}
//         >
//           <GrNext />
//         </div>
//       </div>
//     </>

//           //   <>
//           //   <Carousel>
//           //   {images.map((image, index) => {
//           //   return (
//           //     <div key={index} className="h-96 w-96">
//           //       <img
//           //         className="w-full h-full"
//           //         src={image}
//           //         alt={`Room Inspiration ${index + 1}`}
//           //       />
//           //     </div>
//           //   );
//           // })}
//           //       <div>
//           //           <img src="assets/1.jpeg" />
//           //           <p className="legend">Legend 1</p>
//           //       </div>
//           //       <div>
//           //           <img src="assets/2.jpeg" />
//           //           <p className="legend">Legend 2</p>
//           //       </div>
//           //       <div>
//           //           <img src="assets/3.jpeg" />
//           //           <p className="legend">Legend 3</p>
//           //       </div>
//           //       </Carousel>
//           //   </>
//   );
// };

// export default HomeSection4;


{/* <div className='w-full flex justify-center'>
        {product&&
            <div className='tracking-wide space-y-6 flex justify-center m-5'>
                <div className='space-y-1 relative w-1/2 shadow-2xl p-14 bg-secondary'>
                <div className=''>
                    <img className='w-full rounded-md ' src={product.imageUrl} alt='image'/>
                </div>
                <div className='absolute top-16 right-16'>
                    <button className='p-2 rounded-full bg-white m-3' onClick={()=>setWishList(!wishlist)}>
                        {
                            wishlist?
                            <FaHeart size={25} color='red'/>
                            :
                            <FaRegHeart size={25} color='red'/>
                        }
                    </button>
                </div>
                <div className='space-y-4 text-2xl text-amber-950'>
                    <p className='text-4xl mt-5 font-semibold text-yellow-800'>{product.name}</p>
                    <p>{product.desc}</p>
                    <p>Seller :  {product.shop_name}</p>
                    <p>₹{product.price}</p>
                    <div>
                
                    <button className='bg-primary text-white text-xl px-7 py-3 rounded-md'>Add To Cart</button>
                    </div>
                
                </div>
                
                </div>
            </div>
        }
      </div> */}