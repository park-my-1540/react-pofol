
import React ,{useEffect} from "react";
import {useLocation,Link } from "react-router-dom";
import '../scss/import.scss'
import '../scss/detail.scss'
import { Scrollbar } from "smooth-scrollbar-react";
import { transGsap } from "../lib/gsapFuncs";
import { hoverFunc } from "../lib/common"
function DetailPage(){
    let params = useLocation ();
    let project;
    console.log(params.state);
    if(params.state != null){
        project = params.state.state; 
    }
    useEffect(() => {
        /**
         * 메인 배너 ,
         * 메인 배너 프로젝트명.
         * 스크롤 텍스트 애니메이션 효과
         */
  
        // const _target = document.querySelector('.sub-main');
        // transGsap(_target,'marginTop',0);
     
        // const _target02 = document.querySelector('.fixed-bg');
        // transGsap(_target02,'top',0);

        // const _target03 = document.querySelector('.sub-tit');
        // _target03.classList.add('on');

        // const _target04 = document.querySelector('.tit-scroll-wrap');
        // _target04.classList.add('on');

        /**
         * hover 효과
         */
        const hoverTarget = document.querySelectorAll('[data-ui="hover"]');
        hoverFunc(hoverTarget);
        // hoverTarget.forEach(button => {
        //   ["mouseenter", "mouseout"].forEach(evt => {
        //     button.addEventListener(evt, e => {
        //         let _target = e.target.closest('[data-ui="hover"]');
        //       let parentOffset = _target.getBoundingClientRect(),
        //           relX = e.pageX - parentOffset.left,
        //           relY = e.pageY - parentOffset.top;
        //       const span = _target.getElementsByClassName("hover");
      
        //       span[0].style.top = relY + "px";
        //       span[0].style.left = relX + "px";
        //     });
        //   });
        // });
    }, [])

    /**
     * scrollFunc : 스크롤 한만큼 text-wrap 이동
     */
    function scrollFunc(){
        const   _text = document.querySelector('.text-wrap'),
                _text_span = document.querySelector('.text-wrap').querySelector('span'),
                winH = window.innerHeight, /* 윈도우의 높이 */
                posFromTop = _text.getBoundingClientRect().top; /* _text top 값 */

        0 > posFromTop-winH &&  posFromTop-winH > -_text.offsetHeight ?   //텍스트영역에서 스크롤 할 경우
            _text_span.style.top=posFromTop + "px" : 
                _text_span.style.top=-posFromTop + "px";
    }
    return (
        <>
        {
            project && (
                <div class="sub-wrap">
                <div className="fixed-wrap">
                    <div className="fixed-bg" style={{backgroundImage : `url(${process.env.PUBLIC_URL}/${project.image[0]})`}}></div>
                </div>
                <a href="#none" className="link_git"><span className="blind">깃으로 이동</span></a>
                <Scrollbar 
                    className="sub-container"
                    onScroll={scrollFunc}
                    alwaysShowTracks
                    plugins={{
                        overscroll: {
                            effect: "glow"
                        } 
                    }}
                    >
                    <div className="sub-container" style={{ maxHeight: '100vh' }}>
                        <div className="sub-main">
                            <div className="sub-header">
                                <span>PARK MY</span>
                                <Link to="/portfolio">PORTFOLO</Link>
                            </div>
                            <h1 className="sub-tit">{project.project}</h1>
                            <div class="tit-scroll-wrap">
                                <p className="tit-scroll">SCROLL</p>
                            </div>
                        </div>
                       
                        <div className="sub-content">
                            <div className="inner">
                                <div class="sub-top">
                                    <div class="sub-left">
                                        <div className="sub-title-wrap">
                                        <div className="tag-wrap">
                                            {project.hashtag.map((hs)=><span>{hs}</span>)}
                                        </div>
                                            <p className="date">{project.date}</p>
                                            <h2 className="project">{project.project}</h2>
                                            <h3>{project.title}</h3>
                                        </div>
                                        <div className="etc-box">
                                            <div className="etc-item" data-ui="hover">
                                                <span className="txt">참여인원</span><span className="txt off">{project.members}</span><span class="hover"></span>
                                            </div>
                                            <div className="etc-item" data-ui="hover">
                                            <span className="txt">참여정도</span><span className="txt off">{project.participation}</span><span class="hover"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sub-desc-wrap">
                                        <p className="desc-tit">{project.desc}</p>
                                        <ul>
                                            {
                                                project.sub_desc.split("\n").map((i,key) =><li key={key}>{i}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                               
                                <div className="sub-cont">
                                    <div className="main-box">
                                        <div className="pc-box">
                                            <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png"/>
                                            <a href="" className="btn-site pc" data-ui="hover"><span className="txt">View PC Site</span><span class="hover"></span></a>
                                        </div>
                                        <div className="mo-box">
                                            <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png"/>
                                            <a href="" className="btn-site mo" data-ui="hover"><span className="txt">View MO Site</span><span class="hover"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrap">
                                <span>Always enjoy the work</span>
                            </div>
                        </div>
                        <div className="sub-footer">
                            <span>PROJECTS</span>
                        </div>
                    </div>
                </Scrollbar>
            </div>
            )
        }
           
        </>
    )
}    
export default DetailPage;