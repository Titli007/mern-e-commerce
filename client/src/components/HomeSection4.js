import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import Slider from "react-slick";

const HomeSection4 = () => {
  const [images, setImages] = useState([]);
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  useEffect(() => {
    const imageContext = require.context(
      "../RoomInspirationImages",
      false,
      /\.(png|jpe?g|svg)$/
    );
    const images = imageContext.keys().map(imageContext);
    setImages(images);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  function handleCarousel() {
    setIsCarouselActive(true);
  }

  return (
    <>
      <div className="flex bg-bg p-10 relative">
        <div
          className={`m-10 space-y-10 tracking-wider ${
            isCarouselActive ? "hidden" : "w-1/3"
          }`}
        >
          <p className="text-5xl font-bold">15+ Beautiful rooms inspiration</p>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototype
            <br /> of rooms that inspire you
          </p>
        </div>
        <div
          className={`flex  ${
            isCarouselActive ? "w-full" : "w-2/3"
          }`}
        >
          {images.map((image, index) => {
            return (
              <div key={index} className="h-96 w-96">
                <img
                  className="w-full h-full"
                  src={image}
                  alt={`Room Inspiration ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
        <div
          className="bg-white rounded-full p-6 h-min absolute top-52 right-14"
          onClick={() => handleCarousel()}
        >
          <GrNext />
        </div>
      </div>
    </>
  );
};

export default HomeSection4;
