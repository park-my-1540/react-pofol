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

  // function handleMouseMove(e) {
  //   const window_height = e.currentTarget.offsetHeight,
  //       window_width = e.currentTarget.offsetWidth,
  //       mouseXpos = e.nativeEvent.offsetX,
  //       mouseYpos = e.nativeEvent.offsetY,
  //       YrotateDeg = (window_width / 2 - mouseXpos) * 0.05,
  //       XrotateDeg = (window_height / 2 - mouseYpos) * -0.05;
          
  //   e.currentTarget.firstChild.style.transform = `rotateX(${XrotateDeg}deg) rotateY(${YrotateDeg}deg)`;
  // };
  // function handleMouseLeave(e) {
  //   e.currentTarget.firstChild.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
  // };

  return (
    <>
      <Swiper
        slidesPerView={1.7}
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
