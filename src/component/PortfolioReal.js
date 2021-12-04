import React,{useEffect} from "react";

import CustomLink from "./CustomLink";


  export default function PortfolioReal({pofoldata}) {
  const navStyle = {
  }

  return (  
      <>
        <div className="inner" id={pofoldata.id}>
            <div className="tag-wrap">
              {pofoldata.hashtag.map((hs)=><span>{hs}</span>)}
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
            >view<br/>Project
          </CustomLink>
        </div>
        </>
  );
}
