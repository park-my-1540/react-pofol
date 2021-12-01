import React from "react";

import CustomLink from "./CustomLink";
  export default function SwiperItem({pofoldata}) {
  const navStyle = {
    textDecoration: 'none',
    color: '#000',
    zIndex : '1000',
    marginLeft: '-50px',
    textDecoration: 'none',
    position: 'absolute',
    top: '65%',
    left: '64%',
    marginTop: '-9px'
  }
  
  return (
      <>
        <div className="inner">
            <div className="tag-wrap">
                <span>반응형</span>
                <span>비경상</span>
            </div>
            <h2 className="prg-title">{pofoldata.title}</h2>
            <div className="prj-img">
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png" class="mo"/>    
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png" class="pc"/>
            </div>
            <div className="desc-wrap">
                <p className="prj-name">{pofoldata.project}</p>
                <p className="prj-desc">{pofoldata.desc}</p>
            </div>
            <CustomLink 
                to={`/project/${pofoldata.id}`}
                state ={pofoldata}
                style = {navStyle}
            >view Project
          </CustomLink>
        </div>
        </>
  );
}
