import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useData } from "../../context/DataContext";
const ProductPageCarousel = () => {
  const { productData } = useData();
  const [imgIndex, setImgIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = imgIndex === productData.imageUrl.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide
      ? productData.imageUrl.length - 1
      : imgIndex - 1;
    setImgIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setImgIndex(slideIndex);
  };

  return (
    <div>
      <div className="w-[510px] h-[550px] flex flex-col relative md:flex-wrap gap-4 md:w-full">
        {/* img */}
        <div className="max-h-[450px] max-w-[510px] md:w-full">
          <img
            src={productData.imageUrl[imgIndex]}
            alt="asd"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-row gap-4">
          <img
            src={productData.imageUrl[0]}
            alt="img1"
            className="max-h-[75px] w-[100px] object-cover cursor-pointer"
            onClick={() => goToSlide(0)}
          />
          <img
            src={productData.imageUrl[1]}
            alt="img2"
            className="max-h-[75px] w-[100px] object-cover cursor-pointer"
            onClick={() => goToSlide(1)}
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
          <BsChevronCompactLeft
            size={30}
            onClick={prevSlide}
            className="text-white"
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
          <BsChevronCompactRight
            size={30}
            onClick={nextSlide}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPageCarousel;