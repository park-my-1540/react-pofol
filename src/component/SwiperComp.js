import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./PortfolioReal";
// import SwiperItem from "./SwiperItem";
import{slideGsap2} from "../lib/gsapFuncs";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function SwiperComp({data,actIdx}) {
  const onChanged = () =>{
    const swiper_type01 = document.querySelector('.swiper-container.type01'),
      active_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-active'),
      title = active_slide.querySelector('.prg-top'),
      pc = active_slide.querySelector('.prj-img .pc'),
      mo = active_slide.querySelector('.prj-img .mo'),
      desc = active_slide.querySelector('.desc-wrap'),
      etc = active_slide.querySelector('.etc-box');

    slideGsap2([title,etc,mo,pc,desc]);
  }

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
        onSlideChangeTransitionStart = {onChanged}
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
