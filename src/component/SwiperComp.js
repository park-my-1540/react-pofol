import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./SwiperItem";
import {preloadImages} from "../lib/PreLoadImage";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function SwiperComp() {
  const data = [
    {id:'01',title : "제목",project : "프로젝트명",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'02',title : "제목",project : "프로젝트2",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'03',title : "제목",project : "프로젝트3",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'04',title : "제목",project : "프로젝트명44",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'05',title : "제목",project : "프로젝트명44",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'06',title : "제목",project : "프로젝트명44",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'},
    {id:'07',title : "제목",project : "프로젝트명44",desc : "01 반응형0-제목같은", image : 'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'}
  ]
   
  useEffect(()=>{
    elementAlign();
    preloadImages([
      'https://yuta-abe.com/assets/img/projects/gig/thumb.jpg'
    ], function(){
      console.log('All images were loaded');
    });
  },[])
  function elementAlign() {
    const boxs=[...document.getElementsByClassName("imageHolder")];
    const parentWid = document.getElementsByClassName("swiper-slide")[0].offsetWidth; //배열이라 ? 
    boxs.forEach(element => {
        element.style.width = parentWid + "px";
        element.style.height = parentWid + "px";
    });
  }
  window.addEventListener("resize",function () {
    elementAlign();
  })

    function handleMouseMove  (e) {
      var window_height = e.currentTarget.offsetHeight;
      var window_width = e.currentTarget.offsetWidth;
      
      var mouseXpos = e.nativeEvent.offsetX;
      var mouseYpos = e.nativeEvent.offsetY;
      var YrotateDeg = (window_width / 2 - mouseXpos) * 0.05;
      var XrotateDeg = (window_height / 2 - mouseYpos) * -0.05;
      e.currentTarget.firstChild.style.transform = `rotateX(${XrotateDeg}deg) rotateY(${YrotateDeg}deg)`;
    };
    function handleMouseLeave  (e) {
      e.currentTarget.firstChild.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          type: "progressbar",
          renderProgressbar : (progressbarFillClass)=>{
              return `
                <div class="pagination_custom">
                    <span class="start_idx">1</span>
                    <span class="${progressbarFillClass}"></span>
                    <span class="last_idx">${document.querySelectorAll('.swiper-slide').length}</span>
                </div>
              `;
          }
        }}
        className="mySwiper"
      >
      {
        data.map((data)=>
          <SwiperSlide>
            <SwiperItem 
              handleMouseMove={handleMouseMove} 
              handleMouseLeave={handleMouseLeave}
              pofoldata = {data}
              />
          </SwiperSlide>
      )}
      </Swiper>
    </>
  );
}
