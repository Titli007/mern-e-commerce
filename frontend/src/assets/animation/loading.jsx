import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../Animation - 1712218195845.json';

const Loading = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // You can choose the renderer (svg, canvas, html)
      loop: true, // Set to true for looping
      autoplay: true, // Set to true for autoplay
      animationData: animationData, // The animation data
    });

    return () => {
      anim.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return <div ref={animationContainer} />;
};

export default Loading;