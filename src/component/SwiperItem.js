import React from "react";

import CustomLink from "./CustomLink";
  export default function SwiperItem({handleMouseMove ,handleMouseLeave ,pofoldata}) {
  const navStyle = {
    textDecoration: 'none',
    color: '#fff',
    zIndex : '1000',
    marginLeft: '-50px',
    textDecoration: 'none',
    color: '#fff',
    position: 'absolute',
    top: '65%',
    left: '64%',
    marginTop: '-9px'
  }

  return (
      <>
        <div class="main" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} >
          <div class="wrap">
            <div class="imageHolder bg0">
              <div class="circle">01</div>
            </div>
            <div class="imageHolder bg1">
              <div class="circle">꾸밈</div>
            </div>
            <div class="imageHolder bg2">
              <div class="circle">꾸밈</div>
            </div>
            <div class="imageHolder midTree2 bg3">
              {pofoldata.title}
            </div>
            <div class="imageHolder frontTree bg4">
              <h1>{pofoldata.project}</h1>
              <h2>{pofoldata.desc}</h2>
            </div>
            <div class="imageHolder wolf bg5">
              <img src={pofoldata.image} alt={pofoldata.project}/>
            </div>
          </div>
          <CustomLink to={`/project/${pofoldata.id}`}
                state ={pofoldata}
                style = {navStyle}
                >
            view Detail
          </CustomLink>
        </div>
        </>
  );
}
