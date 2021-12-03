import React,{useEffect} from "react";

import CustomLink from "./CustomLink";
import{allToClipGsap} from "../lib/gsapFuncs";

  export default function PortfolioReal({pofoldata}) {
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
  useEffect(() => {
    let arr = [];
    const tar01 = document.querySelector('.prg-title');
    const tar02 = document.querySelector('.tag-wrap');
    const tar03 = document.querySelector('.prj-img');
    const tar04 = document.querySelector('.desc-wrap');
    arr = [tar01,tar02,tar03,tar04];
    allToClipGsap([tar01,tar02,tar03,tar04]);
  }, [])
  console.log(pofoldata.hashtag );
  return (  
      <>
        <div className="inner">
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
            >view Project
          </CustomLink>
        </div>
        </>
  );
}
