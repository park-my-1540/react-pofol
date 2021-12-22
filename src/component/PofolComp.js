import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./ItemComp";
import{slideGsap,slideGsap2} from "../lib/gsapFuncs";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

function PofolComp({data}) {
  const onChanged = (swiper) =>{

    const swiper_type01 = document.querySelector('.swiper-container.type01'), //기준 스와이퍼
          active_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-active'), //현재 active 스와이퍼 이 영역은 공통
          title = active_slide.querySelector('.prj-top'),
          pc = active_slide.querySelector('.prj-img .pc'),
          mo = active_slide.querySelector('.prj-img .mo'),
          desc = active_slide.querySelector('.desc-wrap'),
          etc = active_slide.querySelector('.etc-box');
          
          if(swiper.previousIndex<swiper.activeIndex){
            slideGsap([title,etc,mo,pc,desc]); // 다음으로 갈때 제목-휴대폰이미지 - 설명 순
          }else{
            slideGsap([desc,mo,pc,etc,title]); // 전으로 갈때 설명-휴대폰이미지 - 제목 순
          }

    if(swiper.activeIndex === 0){//첫번째 슬라이드면 prev 제외

      const next_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-next'), //next
            next_title = next_slide.querySelector('.prj-top'),
            next_pc = next_slide.querySelector('.prj-img .pc'),
            next_mo = next_slide.querySelector('.prj-img .mo'),
            next_desc = next_slide.querySelector('.desc-wrap'),
            next_etc = next_slide.querySelector('.etc-box');
            slideGsap2([next_desc,next_pc,next_mo,next_etc,next_title],200); //next

    }else if(swiper.activeIndex === 7){ //마지막 슬라이드면 next 제외
      const prev_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-prev'), //prev
            prev_title = prev_slide.querySelector('.prj-top'),
            prev_pc = prev_slide.querySelector('.prj-img .pc'),
            prev_mo = prev_slide.querySelector('.prj-img .mo'),
            prev_desc = prev_slide.querySelector('.desc-wrap'),
            prev_etc = prev_slide.querySelector('.etc-box');
             slideGsap2([prev_desc,prev_pc,prev_mo,prev_etc,prev_title],-200);  //prev
    }else{
      //그 외
      const prev_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-prev'),  //prev
            prev_title = prev_slide.querySelector('.prj-top'),
            prev_pc = prev_slide.querySelector('.prj-img .pc'),
            prev_mo = prev_slide.querySelector('.prj-img .mo'),
            prev_desc = prev_slide.querySelector('.desc-wrap'),
            prev_etc = prev_slide.querySelector('.etc-box');

      const next_slide = swiper_type01.querySelector('.swiper-slide.swiper-slide-next'),  //next
            next_title = next_slide.querySelector('.prj-top'),
            next_pc = next_slide.querySelector('.prj-img .pc'),
            next_mo = next_slide.querySelector('.prj-img .mo'),
            next_desc = next_slide.querySelector('.desc-wrap'),
            next_etc = next_slide.querySelector('.etc-box');
            slideGsap2([prev_desc,prev_pc,prev_mo,prev_etc,prev_title],-200); //next gsap
            slideGsap2([next_desc,next_pc,next_mo,next_etc,next_title],200); //prev gsap
    }
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
            <SwiperItem pofoldata = {data}/>
          </SwiperSlide>
      )}
      </Swiper>
    </>
  );
}
export default React.memo(PofolComp)