import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Pagination, Navigation } from "swiper";
function Carousel({props}) {
    let tedtalks=[
        {
            "year":2018,
            "videos":["https://www.youtube.com/embed/8o-bsZ7cYYg","https://www.youtube.com/embed/rKrYLtif9pY","https://www.youtube.com/embed/gK7OPnEUZFc","https://www.youtube.com/embed/mZ9mj-BDNMM","https://www.youtube.com/embed/X0fuX1R1UfY"],
        },
        {
            "year":2017,
            "videos":["https://www.youtube.com/embed/InTY-_a6O1Y","https://www.youtube.com/embed/quxmuicUlLw","https://www.youtube.com/embed/G5xEgqG2HrA","https://www.youtube.com/embed/AuVAcIOQ0sU","https://www.youtube.com/embed/h3NGfp-2tQw","https://www.youtube.com/embed/doVRMBPUOhA","https://www.youtube.com/embed/t1AFNc4oujM","https://www.youtube.com/embed/quxmuicUlLw","https://www.youtube.com/embed/lCmyOGssh3c","https://www.youtube.com/embed/blS64Pbzazc","https://www.youtube.com/embed/yiIwXtYOgVQ"],
        },
        {
            "year":2016,
            "videos":["https://www.youtube.com/embed/crZrM2_wbOY","https://www.youtube.com/embed/yxo7DYT-9C4","https://www.youtube.com/embed/QJLPla3cQPo","https://www.youtube.com/embed/joVith2YdXA","https://www.youtube.com/embed/9ygp8P717vQ","https://www.youtube.com/embed/xZFQEN2CCA","https://www.youtube.com/embed/ncTY1hUBhuA","https://www.youtube.com/embed/kLmTuRXOa14","https://www.youtube.com/embed/qIhcXTzQGJQ","https://www.youtube.com/embed/JggZuQR3-2U","https://www.youtube.com/embed/S13ZwB2qnIE","https://www.youtube.com/embed/G7sXUGkpJ4Q"],
        }
    ]
    let slides=tedtalks.find(o=>o.year===props);
    slides=slides.videos;
  return (
    <div>
        {/* <hr className='border-0 h-1 ml-16 mb-4 rounded w-1/6  bg-white mt-10'/> */}
            <div className='pl-28 pr-10 '>
                    <h1 className='text-3xl mb-8 text-red-700 font-semibold mt-10'>Archive Talks</h1>
            </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            slides.map((s)=>(
                <SwiperSlide><iframe id="vid_frame" height="400px" width="700px" src={s} title={s} allowFullScreen></iframe></SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel