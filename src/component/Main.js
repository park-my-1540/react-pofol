import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
import MessageContainer from "../container/MessageContainer";
import Portfolio from "../component/Portfolio";
import MainTypo from "../component/MainTypeComp";

import '../scss/main.scss';
import {transGsap} from '../lib/gsapFuncs';

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

export default function SwiperComp() {

  useEffect(()=>{
  },[])
  const [isFstIdx,setIsFstIdx] = useState(true);

  const onChanged = (swiper) =>{

    const aside = document.querySelector('.aside'),
          msgBox = document.querySelector('.chat-box');

    if(swiper.activeIndex !== 0){ 
      swiper.mousewheel.disable();
      transGsap(aside,'left',0,1);
      transGsap(msgBox,'right',-msgBox.offsetWidth,1);
      setIsFstIdx(false);
    }else{
      swiper.mousewheel.enable(); 
      transGsap(msgBox,'right',0,1);
      transGsap(aside,'left',-aside.offsetWidth,1);
      setIsFstIdx(true);
    }

  }
  return (
    <>
    <div className="main-wrapper">
      <div className="main-header">
        HEADER
      </div>
        <MainTypo isFstIdx={isFstIdx}/>
        <Swiper direction={'vertical'}  
          navigation={{
            nextEl: '.main-next',
            prevEl: '.main-prev'
        }} 
          speed = {1000}
          slidesPerView={1}
          spaceBetween={5}
          onSlideChange = {onChanged}
          mousewheel={true}
          pagination={{
              el: '.main-pagination',
              clickable:true,
              renderBullet:function(index,className){
                const list = ['Home','About','Project','Practice'];
                return `<p class="${className}"><span>${list[index]}</span></p>`
              }
          }} 
          className="mainSwipper">
            <div className="aside">
              <div className="header">
                <p>Control</p><span className="branch"></span>
              </div>
              <div className="main-ctrl">
                <button className="main-prev"><span className="blind">이전으로</span><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                <div class="main-pagination"></div>
                <button className="main-next"><span className="blind">다음으로</span><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
              </div>
            </div>
            <SwiperSlide><MessageContainer isFstIdx={isFstIdx}/></SwiperSlide>
            <SwiperSlide><div className="test-container">Slide2</div></SwiperSlide>
            <SwiperSlide><Portfolio cont={'project'}/></SwiperSlide>
            <SwiperSlide><Portfolio cont={'prac'}/></SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
