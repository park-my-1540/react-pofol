import React,{ useEffect } from "react";
import { hoverFunc } from "../lib/common"
import CustomLink from "./CustomLink";


  export default function ItemComp({pofoldata,cont}) {
    useEffect(() => {
      const hoverTarget = document.querySelectorAll('[data-ui="hover"]');
      hoverFunc(hoverTarget);
    }, [])
  return (  
      <>
        <div className="inner" id={pofoldata.id}>
            <div class="prg-top">
              <div className="tag-wrap">
                {pofoldata.hashtag.map((hs)=><span>{hs}</span>)}
              </div>
              <h2 className="prg-title">{pofoldata.project}</h2>
              <p className="prj-name">{pofoldata.title}</p>
            </div>
            <div className="etc-box">
                <div className="etc-item" data-ui="hover">
                    <span className="txt">참여인원</span><span className="txt off">{pofoldata.members}</span><span class="hover"></span>
                </div>
                <div className="etc-item" data-ui="hover">
                <span className="txt">참여정도</span><span className="txt off">{pofoldata.participation}</span><span class="hover"></span>
                </div>
            </div>
            <div className="prj-img">
              <a href={pofoldata.url[0]} alt="mo" class="prj-link" target="_blank">
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png" class="mo" alt="a"/>    
              </a>
              <a href={pofoldata.url[1]} alt="pc" class="prj-link" target="_blank">
                <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png" class="pc" alt="a"/>
              </a>
            </div>
            <div className="desc-wrap">
                <p className="prj-date">{pofoldata.date}</p>
                <p className="prj-desc">{pofoldata.desc}</p>
                <div class="sub-desc-wrap">
                    <ul>
                        {
                            pofoldata.sub_desc.split("\n").map((i,key) =><li key={key}>{i}</li>)
                        }
                    </ul>
                </div>
            </div>
            {
              cont && (
                <CustomLink 
                      to={`/${pofoldata.id}`}
                      state ={pofoldata}
                  >view<br/>Detail
                </CustomLink>
              )
            }
        </div>
        </>
  );
}
