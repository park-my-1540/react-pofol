import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
import MessageContainer from "../container/MessageContainer";
import Portfolio from "../component/Portfolio";

import '../scss/main.scss';

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

export default function SwiperComp() {

  useEffect(()=>{
  },[])

  const onChanged = (swiper) =>{
    const aside = document.querySelector('.aside');
    if(swiper.activeIndex !== 0){//첫번째 슬라이드 제외한 
      aside.classList.remove('hide');
      swiper.mousewheel.disable();
    }else{
      aside.classList.add('hide');
      swiper.mousewheel.enable();
    }
  }
  return (
    <>
    <div className="main-wrapper">
      <div className="main-header">
        HEADER
      </div>
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
                var list = ['Home','About','Portfolio'];
                return `<p class="${className}"><span>${list[index]}</span></p>`
              }
          }} 
          className="mainSwipper">
            <div className="aside hide">
                <div className="header">
                  <p>Control</p>
                  <span className="branch"></span>
                </div>
                <div className="main-ctrl">
                  <button className="main-prev">v</button>
                  <div class="main-pagination"></div>
                  <button className="main-next">v</button>
                </div>
                <div className="footer">
                  <h1>Controlled <br/>Cannabis Systems</h1>
                </div>
            </div>
            <SwiperSlide>
              <section className="main">
                <MessageContainer/>
              </section>
              </SwiperSlide>
            <SwiperSlide><div className="test-container">Slide2</div></SwiperSlide>
            <SwiperSlide><Portfolio/> </SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
