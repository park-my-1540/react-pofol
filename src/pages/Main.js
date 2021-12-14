import React, {useState ,useRef, useCallback, useEffect} from "react";
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
import MoMain from '../component/MoMain';
import '../scss/main.scss';
import {transGsap ,reverseTypoGsap ,typoGsap, clipGsap2} from '../lib/gsapFuncs';
import {useDispatch,useSelector} from 'react-redux';
import {mainUpdate} from "../module/ui";

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

export default function Main({deviceChk,onUpdateDevice}) {
  const dispatch = useDispatch();
  const mainActIdx = useSelector(state=>state.ui.mainActIdx);
  const swiperRef = useRef();
  const [actIdx,setActIdx] = useState();
  const list = ["Home",'About','Project','Practice']; //메뉴

  
  /**
   * init : 
   * 무슨일이 일어나야 하는가?
   * -> 메인일때 : 마우스 디저블, chat위치 변경, tag 위치변경, motag 위치 변경,  pc일때 aside 위치 변경 
   * -> 그외일때 : 마우스 디저블, chat위치 변경, tag 위치변경, motag 위치 변경,  pc일때 aside 위치 변경 
   * onchanged : 
   * 무슨일이 일어나야 하는가?
   * -> 메인일떄 : 마우스 디져블, chat 위치 변경,tag 위치 변경, motag 위치 변경 ,pc 일때 aside 위치 변경
   * -> 그외일때 : 마우스 이너블, chat 위치 변경,tag 위치 변경, motag 위치 변경 ,pc 일때 aside 위치 변경
   * 
   * 둘의 차이는 swiper.acitiveIdx 받아 쓰는거
   */
 
   const onChanged = (swiper) =>{
      dispatch(mainUpdate(swiper.activeIndex));
      setActIdx(swiper.activeIndex);
      setPositionFunc(swiper,swiper.activeIndex);
  };

  const setPositionFunc = useCallback((swiper,activeIndx)=>{
    
    const aside = document.querySelector('.aside'),
          msgBox = document.querySelector('.chat-box'),
          typoBox = document.querySelector('.typograpy-wrap'),
          tagWrap = document.querySelector('.tag-wrap.main-tag'),
          chatBtn = document.querySelector('.btn-chat'),
          motagWrap = document.querySelector('.tag-wrap.momain-tag');

    if(activeIndx === undefined){activeIndx = actIdx}
    console.log(deviceChk);
    if(activeIndx > 0){ //메인만 아니면
      
      transGsap(msgBox,'right',-msgBox.offsetWidth,1); //msg 날라감
      
      transGsap(tagWrap,'left','-999px',0.5);
      transGsap(motagWrap,'left','-999px',0.5);
      transGsap(chatBtn,'left','-999px',0.5);

      if(deviceChk === 'pc'){ //pc 일때만 
        typoGsap(typoBox);
        typoBox.classList.remove('top');
        transGsap(aside,'left','0',1); //aside 옆으로 오고
        // swiper.mousewheel.disable();
      }
      else if(deviceChk === "mo"){
        typoBox.removeAttribute('style');
        typoBox.classList.add('top');
        transGsap(typoBox,'top','0',1);
      }
      
    }else{ //메인이면
      transGsap(msgBox,'right','0',1); 
      transGsap(motagWrap,'left','5.5%',0.5);
      transGsap(tagWrap,'left','5.5%',0.5);
      transGsap(chatBtn,'left','80%',0.5);
      
      if(deviceChk === 'pc'){ //pc 일때만
        reverseTypoGsap(typoBox);
        transGsap(aside,'left',-aside.offsetWidth,1);
        // swiper.mousewheel.enable(); 
      } else if(deviceChk === "mo"){
        typoBox.removeAttribute('style');
        typoBox.classList.remove('top');
        transGsap(typoBox,'top','70%',1);
      }
    }
  },[deviceChk,actIdx]); //매개변수.....놓치지마..useCallback은



  const CircleComp =  (
    <>
    <div className="circle-box">
      <div className="circle one"><span></span></div>
      <div className="circle two"><span></span></div>
      <div className="circle three"><span></span></div>
    </div>
    </>
  );
  window.addEventListener('resize', setPositionFunc);
  return (
    <>
    <div className="wrapper">
        {
          deviceChk === "mo" && <MoMain/>
        }
        
        <Header deviceChk={deviceChk} actSec={list[actIdx]}/>
        <Aside  deviceChk={deviceChk} actSec={list[actIdx]}/>
        <MainTypeComp deviceChk={deviceChk}/>
        <Swiper direction={'vertical'}  
          navigation={{
            nextEl: '.main-next',
            prevEl: '.main-prev'
        }} 
          ref={swiperRef}
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
              {CircleComp}
              {
                deviceChk === "pc" && <MessageContainer/>
              }
            </SwiperSlide>
            <SwiperSlide><About/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'project'}/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'prac'}/></SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
