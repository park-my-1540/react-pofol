
import React ,{useEffect} from "react";
import {useLocation,Link } from "react-router-dom";
import '../scss/import.scss'
import '../scss/detail.scss'
import { Scrollbar } from "smooth-scrollbar-react";
import { transGsap } from "../lib/gsapFuncs";

function DetailPage(){
    let params = useLocation ();
    let project = params.state.state; 

    useEffect(() => {
        /**
         * 메인 배너 ,
         * 메인 배너 프로젝트명.
         * 스크롤 텍스트 애니메이션 효과
         */
  
        const _target = document.querySelector('.sub-main');
        transGsap(_target,'marginTop',0);
     
        const _target02 = document.querySelector('.fixed-bg');
        transGsap(_target02,'top',0);

        const _target03 = document.querySelector('.sub-tit');
        _target03.classList.add('on');

        const _target04 = document.querySelector('.tit-scroll-wrap');
        _target04.classList.add('on');
        
    }, [])

    /**
     * scrollFunc : 스크롤 한만큼 text-wrap 이동
     */
    function scrollFunc(){
        const   _text = document.querySelector('.text-wrap'),
                _text_span = document.querySelector('.text-wrap').querySelector('span'),
                winH = window.innerHeight, /* 윈도우의 높이 */
                posFromTop = _text.getBoundingClientRect().top; /* _text top 값 */

        0 > posFromTop-winH &&  posFromTop-winH > -900 ?   //텍스트영역에서 스크롤 할 경우
            _text_span.style.top=posFromTop + "px" : 
                _text_span.style.top=-posFromTop + "px";
    }
    return (
        <>
            <div class="sub-wrap">
                <div className="fixed-wrap">
                    <div className="fixed-bg" style={{backgroundImage : `url(${process.env.PUBLIC_URL}/${project.image})`}}></div>
                    {/* <div className="fixed-bg" style={{backgroundImage : `url(${process.env.PUBLIC_URL.project.image})`}}></div> */}
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
                        {/* <div className="sub-content">
                            <h1>{project.title}</h1>
                            <div className="main-box">
                                <div className="pc-box">
                                    <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png"/>
                                </div>
                                <div className="mo-box">
                                    <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png"/>
                                </div>
                                <div className="txt-horizon">
                                    <span>lways enjoy</span>
                                </div>
                            </div>
                        </div> */}
                        <div className="sub-content">
                            <div className="empty">
                                emptyclass
                            </div>
                            <div className="text-wrap" >
                                <span>Always enjoy the work</span>
                            </div>
                            <div className="empty">
                                emptyclass
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        </>
    )
}    
export default DetailPage;