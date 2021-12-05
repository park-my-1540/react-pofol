import React from "react";

import CustomLink from "./CustomLink";


  export default function PortfolioReal({pofoldata}) {
  return (  
      <>
        <div className="inner" id={pofoldata.id}>
            <div class="prg-top">
              <div className="tag-wrap">
                {pofoldata.hashtag.map((hs)=><span>{hs}</span>)}
              </div>
              <h2 className="prg-title">{pofoldata.project}</h2>
            </div>

            <div className="prj-img">
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png" class="mo"/>    
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png" class="pc"/>
            </div>
            <div className="desc-wrap">
                <p className="prj-name">{pofoldata.title}</p>
                <p className="prj-desc">{pofoldata.desc}</p>
            </div>
            <CustomLink 
                to={`/project/${pofoldata.id}`}
                state ={pofoldata}
            >view<br/>Detail
          </CustomLink>
        </div>
        </>
  );
}
