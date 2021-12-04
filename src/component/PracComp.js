import React, { useEffect ,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./PortfolioReal";
// import SwiperItem from "./SwiperItem";
import{allToClipGsap} from "../lib/gsapFuncs";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function PracComp({data,actIdx}) {
  useEffect(()=>{
    console.log(actIdx);
    if(actIdx===3){
      console.log("zzz");
      onChanged();
    }
  },[actIdx])
  const onChanged = (swiper) =>{
    console.log("changed");
    const swiper_type02 = document.querySelector('.swiper-container.type2');
    const active_slide = swiper_type02.querySelector('.swiper-slide.swiper-slide-active');
    const tar01 = active_slide.querySelector('.prg-title');
    const tar02 = active_slide.querySelector('.tag-wrap');
    const tar03 = active_slide.querySelector('.prj-img');
    const tar04 = active_slide.querySelector('.desc-wrap');
    allToClipGsap(tar01,tar02,tar03,tar04);
  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        speed={1500}
        pagination={{
          el: '.pofol-pagination',
          clickable:true,
          renderBullet:function(index,className){
            const list = ['Home','About','Portfolio'];
            return `<p class="${className}"><span>${list[index]}</span></p>`
          }
      }} 
      onSlideChangeTransitionEnd = {onChanged}
      className="type2">
      {
        data.map((data)=>
          <SwiperSlide>
            <SwiperItem pofoldata = {data} />
          </SwiperSlide>
      )}
      </Swiper>
      <div className="pofol-pagi-wrap"><div className="pofol-pagination"></div></div>
    </>
  );
}
