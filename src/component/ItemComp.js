import React,{ useEffect,useCallback } from "react";
import CustomLink from "./CustomLink";
/*
  SwiperItem 컴포넌트
*/
export default function ItemComp({pofoldata,cont}) {
    useEffect(() => {
      const hoverTarget = document.querySelectorAll('[data-ui="hover"]');
      hoverFunc(hoverTarget);
    }, []);

  /*
    hoverFunc : 참가인원, 참겨정도 circle hover 이벤트
  */
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
            <img src={`${process.env.PUBLIC_URL}${pofoldata.image[device]}`} class={device} alt={pofoldata.title}/>    
          </a>
        )
      })
  )

  const pofol = (
      <img src={`${process.env.PUBLIC_URL}${pofoldata.image[0]}`} className="mo" alt={pofoldata.title}/>
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
              { cont === "prac" ?  pofol :project}
            </div>
            <div className="desc-wrap">
                <p className="prj-date">{pofoldata.date}</p>
                <p className="prj-desc">{pofoldata.desc}</p>
                {
                  cont !== "prac"&&
                    (<div className="sub-desc-wrap">
                          <ul>
                              {pofoldata.sub_desc.split("\n").map((i,key) =><li key={key}>{i}</li>)}
                          </ul>
                    </div>)
                }
            </div>
            {/* 
              practice 컴포넌트 일경우 detaipPage로 페이지 이동 
              to : 조회한 id
              state : 조회한 pofol  데이터
              CustomLink 컴포넌트에 to, state 전달
            */}
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
