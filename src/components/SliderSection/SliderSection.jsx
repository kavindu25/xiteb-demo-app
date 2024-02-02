import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation } from "swiper/modules";

import slideOne from "../../assets/slider-1.jpg";
import slideTwo from "../../assets/slider-2.jpg";
import slideThree from "../../assets/slider-3.jpg";
import slideFour from "../../assets/slider-4.jpg";

const SliderSection = () => {
  return (
    <div className="h-[580px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative z-10 bg-cover w-full h-full">
            <img src={slideOne} className="" />
            <div className="absolute z-20  top-10 left-5 right-5 text-4xl text-gray-600">
              <p>Hotel Plaza</p>
              <p className="text-lg">
                A personal tropical sanctuary set within the heart of the city.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-10  bg-cover w-full h-full">
            <img src={slideTwo} />
            <div className="absolute z-20  top-10 left-5 right-5 text-4xl text-gray-300">
              <p>Hotel Plaza</p>
              <p className="text-lg">
                A personal tropical sanctuary set within the heart of the city.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-10  bg-cover w-full h-full">
            <img src={slideThree} />
            <div className="absolute z-20  top-10 left-5 right-5 text-4xl text-gray-300">
              <p>Hotel Plaza</p>
              <p className="text-lg">
                A personal tropical sanctuary set within the heart of the city.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-10  bg-cover w-full h-full">
            <img src={slideFour} />
            <div className="absolute z-20  top-10 left-5 right-5 text-4xl text-gray-600">
              <p>Hotel Plaza</p>
              <p className="text-lg">
                A personal tropical sanctuary set within the heart of the city.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSection;
