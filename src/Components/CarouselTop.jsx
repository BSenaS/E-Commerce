import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import carouselimg1 from "../assets/carouselimg1.jpeg";
import carouselimg2 from "../assets/carouselimg2.jpg";
import { useState } from "react";
export const CarouselTop = () => {
  const slides = [
    {
      url: carouselimg1,
    },
    {
      url: carouselimg2,
    },
  ];

  //İleri geri conditionu, düzenlemeleri yap ve stateyi reduxa bağla.
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="flex w-full mt-4">
      <div className="max-w-[1440px] max-h-[716px] w-full h-screen mx-auto relative group ">
        {/*Geri Dön! -> Sliderı refactor et... */}
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
          className="w-full h-full bg-cover bg-no-repeat duration-500 flex items-center justify-center"
        >
          {/* Div içerisindeki content kısmı */}
          <div className="flex max-w-[1044px] max-h-[680px] w-full h-full items-center ">
            <div className="flex flex-col gap-8">
              <h5 className="font-bold text-white ">Summer 2020</h5>
              <h1 className="font-bold text-6xl text-white">NEW COLLECTION</h1>
              <p className="text-white font-bold max-w-80">
                We know how large objects will act, but things on a small scale.
              </p>
              <div className="flex justify-start ">
                <button className="text-white font-bold text-xl bg-[#2DC071] p-4 rounded-md">
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* Slider DOTLARI */}
            <div className="flex gap-1 absolute top-[95%] left-[50%]  translate-y-[-150%] justify-center">
              {slides.map((slide, slideIndex) => {
                return (
                  <div
                    className="text-2xl cursor-pointer"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                  >
                    {/*Geri dön -> CurrentIndex Opacity ve Size*/}
                    <RxDotFilled
                      className="text-white"
                      size={slideIndex === 0 && currentIndex === 0 ? 30 : 30}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};
