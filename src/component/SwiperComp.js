import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./PortfolioReal";
// import SwiperItem from "./SwiperItem";
import {preloadImages} from "../lib/PreLoadImage";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function SwiperComp({data}) {
  useEffect(()=>{
    preloadImages([
      'images/dummy.jpg'
    ], function(){
      console.log('All images were loaded');
    });
  },[])

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        speed={1500}
        pagination={{
          type: "progressbar",
          renderProgressbar : (progressbarFillClass)=>{
              return `
                <div class="pagination_custom">
                    <span class="start_idx">1</span>
                    <span class="${progressbarFillClass}"></span>
                    <span class="last_idx">${document.querySelector('.type01').querySelectorAll('.swiper-slide').length}</span>
                </div>
              `;
          }
        }}
        className="type01">
      {
        data.map((data)=>
          <SwiperSlide>
            <SwiperItem 
              pofoldata = {data}
              />
          </SwiperSlide>
      )}
      </Swiper>
    </>
  );
}
