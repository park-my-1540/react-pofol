import React,{ useEffect,useCallback } from "react";
import CustomLink from "./CustomLink";
export default function ItemComp({pofoldata,cont}) {
    useEffect(() => {
      const hoverTarget = document.querySelectorAll('[data-ui="hover"]');
      hoverFunc(hoverTarget);
    }, [])

  const hoverFunc = useCallback(
   (_this)=>
      {
        _this.forEach(button => {
          ["mouseenter", "mouseout"].forEach(evt => {
            button.addEventListener(evt, e => {
              let _target = e.target.closest('[data-ui="hover"]'),
                  span = _target.getElementsByClassName("hover");
              let parentOffset = _target.getBoundingClientRect(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
      
              span[0].style.top = relY + "px";
              span[0].style.left = relX + "px";
            });
          });
        });
      },
    []);

  const project= (
      pofoldata.device.map(device=>{
        if(pofoldata.image[device] === null){
          return ;
        }
        return (
          <a href={pofoldata.url[device]} alt={device} className="prj-link" target="_blank">
            <img src={`${process.env.PUBLIC_URL}${pofoldata.image[device]}`} class={device} alt="a"/>    
          </a>
        )
      })
  )

  const pofol = (
      <img src={`${process.env.PUBLIC_URL}${pofoldata.image[0]}`} className="mo" alt="a"/>
  )

  return (  
      <>
        <div className="inner" id={pofoldata.id}>
            <div className="prj-top">
              <div className="tag-wrap">
                {pofoldata.hashtag.map((hs)=><span>{hs}</span>)}
              </div>
              <h2 className="prj-title">{pofoldata.project}</h2>
              <p className="prj-name">{pofoldata.title}</p>
            </div>
            <div className="etc-box">
                <div className="etc-item" data-ui="hover">
                    <span className="txt">참여인원</span><span className="txt off">{pofoldata.members}</span><span className="hover"></span>
                </div>
                <div className="etc-item" data-ui="hover">
                <span className="txt">참여정도</span><span className="txt off">{pofoldata.participation}</span><span className="hover"></span>
                </div>
            </div>
            <div className="prj-img">
              {
               cont === "prac" ?  pofol :project
              }
            </div>
            <div className="desc-wrap">
                <p className="prj-date">{pofoldata.date}</p>
                <p className="prj-desc">{pofoldata.desc}</p>
                {
                  !cont&&
                    (<div className="sub-desc-wrap">
                          <ul>
                              {
                                  pofoldata.sub_desc.split("\n").map((i,key) =><li key={key}>{i}</li>)
                              }
                          </ul>
                    </div>)
                }
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
