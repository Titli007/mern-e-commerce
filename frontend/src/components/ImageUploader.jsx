import React from "react";
import i1 from "../RoomInspirationImages/alexandru-acea-Zg9R__O-8fM-unsplash.jpg"
import i2 from '../RoomInspirationImages/avery-klein-JaXs8Tk5Iww-unsplash.jpg'
import i3 from '../RoomInspirationImages/charlotte-karlsen-bFnAcUl7B70-unsplash.jpg'
import i4 from '../RoomInspirationImages/darren-richardson-ATf_DqE9kgk-unsplash.jpg'
import i5 from '../RoomInspirationImages/erika-osberg-nLqdo69GFy4-unsplash.jpg'
import i6 from '../RoomInspirationImages/filios-sazeides-TNysTUu5EOU-unsplash.jpg'
import i7 from '../RoomInspirationImages/grant-UhpYKnqZwE8-unsplash.jpg'
import i8 from '../RoomInspirationImages/haley-truong-G8v9b8SdzYM-unsplash.jpg'
import i9 from '../RoomInspirationImages/jean-philippe-delberghe-T5BF4OyQLwU-unsplash.jpg'
import i10 from '../RoomInspirationImages/kara-eads-buhmhprfo3g-unsplash.jpg'
import i11 from '../RoomInspirationImages/kari-shea-AMyjxxLEHU4-unsplash.jpg'
import { GrNext } from "react-icons/gr";
import ReactDOM from 'react-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ImageUploader = () =>{
  const allImages =[i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return(
    <div className=" bg-bg">
    <div className="flex p-1 relative w-full">
        <div className="m-10 spae-y-10 tracking-wider w-full space-y-5 text-center">
          <p className="text-5xlfont-bold font-bold text-5xl">15+ Beautiful rooms inspiration</p>
          <p className="text-gra-600 leading-loose">
            Our designer already made a lot of beautiful prototype
             of rooms that inspire you</p>
        </div>
        </div>
        <div className=" ml-12">
            <Carousel 
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={5000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
              {allImages.length>0 && 
                allImages.map((image,index) => {
                  return (
                    <div key={index} className="w-96 h-96 overflow-hidden">
                      <img className="" src={image} alt='room images 1' />
                    </div>
                  )
                })

              }
            </Carousel>
          </div>

          </div>
  )
}

export default ImageUploader