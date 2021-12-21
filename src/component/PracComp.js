import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./ItemComp";
import{allToClipGsap} from "../lib/gsapFuncs";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
import {useSelector} from "react-redux";
SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function PracComp({data,cont}) {
  const actIdx = useSelector(state=>state.ui.mainActIdx);
  const pofolIdx = useSelector(state=>state.ui.pofolActIdx);
  useEffect(()=>{
    if(actIdx===3){
      onChanged();
    }
  },[actIdx])
  const onChanged = () =>{
    const swiper_type02 = document.querySelector('.swiper-container.type2');
    const active_slide = swiper_type02.querySelector('.swiper-slide.swiper-slide-active');
    const tar01 = active_slide.querySelector('.prj-top');
    const tar02 = active_slide.querySelector('.prj-img');
    const tar03 = active_slide.querySelector('.desc-wrap');
    const tar04 = active_slide.querySelector('.desc-wrap+a');
    allToClipGsap(tar01,tar02,tar03,tar04);
  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        speed={1000}
        initialSlide = {parseInt(pofolIdx)}
        pagination={{
          el: '.pofol-pagination',
          clickable:true,
          renderBullet:function(index,className){
            const list = ["Home",'About','Portfolio'];
            return `<p class="${className}"><span>${list[index]}</span></p>`
          }
      }} 
      onSlideChangeTransitionEnd = {onChanged}
      className="type2">
      {
        data.map((data)=>
          <SwiperSlide>
            <SwiperItem pofoldata = {data} cont={cont} />
          </SwiperSlide>
      )}
      </Swiper>
      <div className="pofol-pagi-wrap"><div className="pofol-pagination"></div></div>
    </>
  );
}
