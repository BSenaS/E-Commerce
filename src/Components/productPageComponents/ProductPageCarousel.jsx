import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useData } from "../../context/DataContext";
import { useSelector } from "react-redux";
const ProductPageCarousel = () => {
  const activeProduct = useSelector((store) => store.product.currentProduct);

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
    <div className="w-full">
      <div className="w-[510px] h-[550px] flex flex-col relative md:flex-wrap gap-4 md:w-[350px] md:h-full">
        {/* img */}
        <div className="max-h-[450px] max-w-[510px] md:w-full ">
          <img
            src={activeProduct.images?.[0]?.url}
            alt="asd"
            className="object-fill h-full w-full"
          />
        </div>
        <div className="flex flex-row gap-4">
          <img
            src={activeProduct.images?.[0]?.url}
            alt="img1"
            className="max-h-[75px] w-[100px] object-fill cursor-pointer"
            onClick={() => goToSlide(0)}
          />
          <img
            src={activeProduct.images?.[0]?.url}
            alt="img2"
            className="max-h-[75px] w-[100px] object-fill cursor-pointer"
            onClick={() => goToSlide(1)}
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-black cursor-pointer md:top-[30%]">
          <BsChevronCompactLeft
            size={50}
            onClick={prevSlide}
            className="text-white"
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-black cursor-pointer md:top-[30%]">
          <BsChevronCompactRight
            size={50}
            onClick={nextSlide}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPageCarousel;
