import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperItem from "./PortfolioReal";
// import SwiperItem from "./SwiperItem";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

SwiperCore.use([Mousewheel, Pagination, Navigation]);

export default function PracComp({data}) {
  // const data = [
  //   {id:'01',title : "제목",project : "날씨",desc : "01 반응형0-제목같은", image : 'images/dummy.jpg'},
  //   {id:'02',title : "제목",project : "날씨디벨롭",desc : "01 반응형0-제목같은", image : 'images/dummy.jpg'},
  //   {id:'03',title : "영화",project : "영화",desc : "01 반응형0-제목같은", image : 'images/dummy.jpg'}
  // ]

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
