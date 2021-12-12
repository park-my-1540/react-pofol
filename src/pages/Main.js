import React, {useState } from "react";
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
import {useDispatch,useSelector} from 'react-redux';
import {mainUpdate} from "../module/ui";

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

export default function Main({deviceChk}) {
  const dispatch = useDispatch();
  const mainActIdx = useSelector(state=>state.ui.mainActIdx);
  const CircleComp =  (
    <>
      <div className="circle one"><span></span></div>
      <div className="circle two"><span></span></div>
      <div className="circle three"><span></span></div>
    </>
  );

  const [actIdx,setActIdx] = useState(0);
  const list = ["PARK'S MY Portfolio",'About','Project','Practice']; //메뉴

  const onChanged = (swiper) =>{

    const aside = document.querySelector('.aside'),
          msgBox = document.querySelector('.chat-box');

    dispatch(mainUpdate(swiper.activeIndex));
    setActIdx(swiper.activeIndex);

    if(swiper.activeIndex !== 0){ //메인만 아니면
      swiper.mousewheel.disable();
      transGsap(msgBox,'right',-msgBox.offsetWidth,1); //msg 날라감

      if(deviceChk === 'pc'){ //pc 일때만
        transGsap(aside,'left',0,1); //aside 옆으로 오고
      }

    }else{
      swiper.mousewheel.enable(); 
      transGsap(msgBox,'right',0,1); 
      
      if(deviceChk === 'pc'){ //pc 일때만
        transGsap(aside,'left',-aside.offsetWidth,1);
      }
    }

  }
  return (
    <>
    <div className="wrapper">
        <Header deviceChk={deviceChk} actSec={list[actIdx]}/>
        <Aside deviceChk={deviceChk} />
        <MainTypeComp deviceChk={deviceChk}/>
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
          initialSlide={parseInt(mainActIdx)}
          pagination={{
              el: '.main-pagination',
              clickable:true,
              renderBullet: function (index, className) {
                return `<span class="${className}">  ${index ===0 ? 'Home' : (list[index])}</span>`;
              },
          }} 
          className="mainSwipper">
            <SwiperSlide>
               {
                deviceChk === "pc" && CircleComp
               }
              <MessageContainer/>
            </SwiperSlide>
            <SwiperSlide><About/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'project'}/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'prac'}/></SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
