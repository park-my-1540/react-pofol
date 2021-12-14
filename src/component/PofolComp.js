import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./ItemComp";
import{slideGsap2,slideGsap3} from "../lib/gsapFuncs";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function PofolComp({data}) {
  const onChanged = () =>{
    const swiper_type01 = document.querySelector('.swiper-container.type01'),
      active_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-active'),
      prev_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-prev'),
      title = active_slide.querySelector('.prg-top'),
      pc = active_slide.querySelector('.prj-img .pc'),
      mo = active_slide.querySelector('.prj-img .mo'),
      desc = active_slide.querySelector('.desc-wrap'),
      etc = active_slide.querySelector('.etc-box'),
      prev_title = prev_slide.querySelector('.prg-top'),
      prev_pc = prev_slide.querySelector('.prj-img .pc'),
      prev_mo = prev_slide.querySelector('.prj-img .mo'),
      prev_desc = prev_slide.querySelector('.desc-wrap'),
      prev_etc = prev_slide.querySelector('.etc-box');

    slideGsap2([title,etc,mo,pc,desc],0);
    slideGsap3([prev_desc,prev_pc,prev_mo,prev_etc,prev_title],-200);
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        speed={1500}
        loop={true}
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
