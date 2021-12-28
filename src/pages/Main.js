import React, {useState ,useRef, useEffect,useCallback} from "react";
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
import {transGsap ,mainResTypoGsap,ToPcSub,ToPcMain} from '../lib/gsapFuncs';
import {useDispatch,useSelector} from 'react-redux';
import {mainUpdate} from "../module/ui";

SwiperCore.use([ Pagination,Navigation,Mousewheel]);

/**
 * Main : 
 * 1. useEffect => 마우스 포인터 클래스 변경되는 이벤트 연결
 * 2. 스와이퍼 변경 될때 onChanged 호출
 * 3. 윈도우 사이즈(deviceChk)와 활성화된 메인스와이퍼 인덱스(mainActIdx)에 따라 
 * 
 *    pc면서 메인이면 isPc_icMain  함수 호출
 *    pc면서 서브면 isPc_isSub 함수 호출
 *    mo면서 메인이면 isMo_isMain 함수 호출
 *    mo면서 서브면 isMo_isSub 함수 호출
 */

export default function Main({deviceChk,cursorOuterRef,cursorInnerRef}) {
  const dispatch = useDispatch();
  const mainActIdx = useSelector(state=>state.ui.mainActIdx);
  const [actIdx,setActIdx] = useState();
  const swiperRef=useRef();
  const list = ["Home",'About','Project','Practice']; //메뉴

  useEffect(()=>{
      mainActIdx !== 0 && swiperRef.current.swiper.mousewheel.disable();
      
      document.querySelectorAll('.main-pagination span').forEach((menu)=>{
        menu.addEventListener("mouseover",function(){elementHover('cursor-grow')});
        menu.addEventListener("mouseleave",function(){elementLeave('cursor-grow')});
      });
        document.querySelectorAll('.prj-link').forEach((link)=>{
        link.addEventListener("mouseover",function(){elementHover('cursor-hide','cursor-link')});
        link.addEventListener("mouseleave",function(){elementLeave('cursor-hide','cursor-link')});
      })
       document.querySelectorAll('.circle').forEach((circle)=>{
        circle.addEventListener("mouseover",function(){elementHover('cursor-hide')});
        circle.addEventListener("mouseleave",function(){elementLeave('cursor-hide')});
      })
       document.querySelectorAll('.point').forEach((point)=>{
        point.addEventListener("mouseover",function(){elementHover('cursor-grow3','cursor-grow2')});
        point.addEventListener("mouseleave",function(){elementLeave('cursor-grow3','cursor-grow2')});
      })
  },[]);

  /*
    elementHover : innerRef에 넣을 클래스 inner , outerRef에 넣을 클래스 outer 를 받아서 hover 시 add
    elementLeave : innerRef에 넣을 클래스 inner , outerRef에 넣을 클래스 outer 를 받아서 leave 시 remove
  */
  const elementHover =useCallback((inner,outer=inner) => {
    cursorOuterRef.current.classList.add(inner);
    cursorInnerRef.current.classList.add(outer);
  },[]);
  const elementLeave =useCallback((inner,outer=inner) => {
    cursorOuterRef.current.classList.remove(inner);
    cursorInnerRef.current.classList.remove(outer);
  },[]);

  /**
   * init 
   * @param {*} swiper 
   * @param {*} activeIndx : 현재 활성화된 인덱스 인수
   * 
   * isPc_icMain : gsap 커스텀함수 호출, 휠 활성화, aside 메뉴 왼쪽으로 사라지게 함
   * isPc_isSub  : gsap 커스텀함수 호출, 휠비활성화, aside 메뉴 왼쪽에서 화면에 노출
   * isMo_isMain : gsap 커스텀함수 호출, 휠비활성화, 로고텍스트 스타일 변경
   * isMo_isSub  : gsap 커스텀함수 호출, 휠비활성화, 로고텍스트 스타일 변경
   * 
   */
  const init = (swiper,activeIndx) =>{
    setActIdx(activeIndx);
    /**
     * 변수 설정
     */
    const aside = document.querySelector('.aside'),
          msgBox = document.querySelector('.chat-box'),
          typoBox = document.querySelector('.typograpy-wrap'),
          tagWrap = document.querySelector('.tag-wrap.main-tag'),
          chatBtn = document.querySelector('.btn-chat'),
          motagWrap = document.querySelector('.tag-wrap.momain-tag');

    const _activeIdx= activeIndx;
        
    const isPc_isMain= ()=>{
      typoBox.classList.remove('pc');
      ToPcMain(typoBox);
      swiperRef.current.swiper.mousewheel.enable();
      transGsap(aside,'left','-9999px',1);
    }
    const isPc_isSub= ()=>{
      transGsap(aside,'left','0',1);
      ToPcSub(typoBox);
      typoBox.classList.add('pc');
      typoBox.classList.remove('top');
      swiperRef.current.swiper.mousewheel.disable();
    }
    const isMo_isMain= ()=>{
      mainResTypoGsap(typoBox);
      typoBox.classList.remove('top');
      swiperRef.current.swiper.mousewheel.disable();
    }
    const isMo_isSub= ()=>{
      typoBox.classList.add('top');
      mainResTypoGsap(typoBox,false);
      swiperRef.current.swiper.mousewheel.disable();
    }
    /**
     *  스와이퍼 변경될때 마다 activeIndex로 메인/ 서브 일때 gsap 함수 실행.
     */
    const setPositionFunc = (activeIndx=actIdx)=>{

      if(activeIndx > 0){ //메인만 아니면
          transGsap(msgBox,'right',-msgBox.offsetWidth,1); //msg 오로ㅡㄴ쪽으로 사라짐
          transGsap(tagWrap,'left','-999px',0.5);
          transGsap(motagWrap,'left','-999px',0.5);
          transGsap(chatBtn,'left','-999px',0.5);
  
          if(deviceChk === 'pc' && !typoBox.classList.contains('pc')){ isPc_isSub();}
          else if(deviceChk === "mo" && !typoBox.classList.contains('top')){ isMo_isSub();}

      }else{ //메인이면
          transGsap(msgBox,'right','0',1); 
          transGsap(motagWrap,'left','5.5%',0.5);
          transGsap(tagWrap,'left','5.5%',0.5);
          transGsap(chatBtn,'left','80%',0.5);
          
          if(deviceChk === 'pc' && !typoBox.classList.contains('top')){ isPc_isMain();} 
          else if(deviceChk === "mo" && typoBox.classList.contains('top')){ isMo_isMain();}
      }
    };
    setPositionFunc(activeIndx);
    /*
     * resize 될때마다 바로 즉시 반응하게 
      스토어에 저장한 값이 아닌 windeow.innerWidth로 바로 잡음.
     */
    const resize = () =>{
      let winWid = window.innerWidth;

      if(winWid > 768){ _activeIdx > 0 ?  isPc_isSub() : isPc_isMain()} //pc -> main or sub
      else{
        _activeIdx > 0 ? isMo_isSub() : isMo_isMain(false);}  //mo -> main or sub
    }
    window.addEventListener('resize',function () {
      if(document.querySelectorAll('.wrapper').length > 0){
        resize();
      }
      });
  }
  /**
   * onChanged
   * 메인 스와이퍼 인덱스 업데이트 함수 디스패치
   * 현재 활성화된 인덱스 상태변경
   * init 호출
   */ 
  const onChanged = (swiper) =>{
      dispatch(mainUpdate(swiper.activeIndex));
      setActIdx(swiper.activeIndex);
      init(swiper,swiper.activeIndex);
  };
  // 메인에 노출되는 원 컴포넌트
  const CircleComp =  (
    <>
    <div className="circle-box">
      <div className="circle one"><span></span></div>
      <div className="circle two"><span></span></div>
      <div className="circle three"><span></span></div>
    </div>
    </>
  );
 
  return (
    <>
    <div className="wrapper">
        {
          deviceChk === "mo" && <MoMain/>
        }
        <Header deviceChk={deviceChk} actSec={list[mainActIdx]}/>
        <Aside  deviceChk={deviceChk} actSec={list[mainActIdx]}/>
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
          ref={swiperRef}
          className="mainSwipper">
            <SwiperSlide>
              {CircleComp}
              {
                deviceChk === "pc" && <MessageContainer/>
              }
            </SwiperSlide>
            <SwiperSlide><About mainActIdx={mainActIdx}/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'project'}/></SwiperSlide>
            <SwiperSlide><SlideComp cont={'prac'}/></SwiperSlide>
        </Swiper>
    </div>
    </>
  );
}
