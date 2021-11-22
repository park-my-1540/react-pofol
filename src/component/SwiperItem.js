import React, { useEffect, useRef, useState } from "react";


export default function SwiperItem({handleMouseMove ,handleMouseLeave ,pofoldata}) {
  return (
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
              <img src={pofoldata.image}/>
            </div>
          </div>
          <a href="#none" className="btn-link">view Project</a>
        </div>
  );
}
