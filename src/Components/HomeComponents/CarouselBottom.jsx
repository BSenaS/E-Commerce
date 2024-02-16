import React, { useEffect, useState } from "react";
import img1 from "../../assets/HomeAssets/bottomCarousel1.svg";
import img2 from "../../assets/HomeAssets/bottomCarousel2.svg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const CarouselBottom = () => {
  const imgArr = [img1, img2];
  const [imgIndex, setImgIndex] = useState(0);
  const colorArr = ["#23856D", "#96E9FB"];
  const backgroundColor = imgIndex === 0 ? colorArr[0] : colorArr[1]; // Arka plan rengini belirle

  const nextSlide = () => {
    const isLastSlide = imgIndex === imgArr.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? imgArr.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setImgIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [imgIndex]);
  return (
    <div className="w-full" style={{ backgroundColor }}>
      <div className="max-w-[1440px] max-h-[710px] flex flex-row justify-center mx-auto relative md:flex-wrap">
        {/* Description */}
        <div className="flex flex-col gap-6 justify-end max-w-[450px] max-h-[430px] mt-4">
          <h5 className="text-xl text-white">SUMMER 2020</h5>
          <h1 className="font-bold text-white text-6xl">
            Vita Classic Product
          </h1>
          <p className="text-white text-sm tracking-[0.2px] max-w-[341px]">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex items-center gap-4">
            <span className="font-bold text-white text-2xl">$16.48</span>
            <button className="py-4 px-8 bg-bGreen text-white rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
        {/* img */}
        <div className="mt-4 h-[685px] max-w-[760px] ">
          <img
            src={imgArr[imgIndex]}
            alt="asd"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-black cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex gap-1 absolute top-[95%] translate-y-[-150%] mx-auto">
          {imgArr.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  imgIndex === index
                    ? "bg-white w-[62px] h-[10px] "
                    : "w-[62px] h-[10px] bg-white opacity-[60%] cursor-pointer"
                }
                onClick={() => goToSlide(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselBottom;
