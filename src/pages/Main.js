import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

import MessageContainer from "../container/MessageContainer";
import SlideComp from "../component/SlideComp";
import MainTypeComp from "../component/MainTypeComp";
import Header from '../component/Header';
import Aside from '../component/Aside';
import About from '../component/AboutComp';
import '../scss/main.scss';
import {transGsap} from '../lib/gsapFuncs';

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

export default function PofolComp() {

  const CircleComp =  (
    <>
      <div className="circle one"><span></span></div>
      <div className="circle two"><span></span></div>
      <div className="circle three"><span></span></div>
    </>);

  const [isFstIdx,setIsFstIdx] = useState(true);
  const [actIdx,setActIdx] = useState(0);
  const list = ['Home','About','Project','Practice']; //메뉴

  const onChanged = (swiper) =>{

    const aside = document.querySelector('.aside'),
          msgBox = document.querySelector('.chat-box');

    setActIdx(swiper.activeIndex);

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
    <div className="wrapper">
        <Header actSec={list[actIdx]}/>
        <Aside/>
        <MainTypeComp isFstIdx={isFstIdx} />
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
          initialSlide={2}
          pagination={{
              el: '.main-pagination',
              clickable:true,
              renderBullet: function (index, className) {
                return `<span class="${className}">  ${(list[index])}</span>`;
              },
          }} 
          className="mainSwipper">
            <SwiperSlide>
               {CircleComp}
              <MessageContainer isFstIdx={isFstIdx}/>
            </SwiperSlide>
            <SwiperSlide><About/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'project'}/></SwiperSlide>
            <SwiperSlide><SlideComp actIdx={actIdx} cont={'prac'}/></SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
