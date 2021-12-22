import React ,{useEffect,useCallback} from "react";
import {useLocation,Link } from "react-router-dom";
import '../scss/import.scss'
import '../scss/detail.scss'
import { Scrollbar } from "smooth-scrollbar-react";
import { allToClipGsap } from "../lib/gsapFuncs";
function DetailPage({cursorOuterRef,cursorInnerRef}){
    let params = useLocation ();
    let project;
    if(params.state != null){
        project = params.state.state; 
    }
    /*
    elementHover : innerRef에 넣을 클래스 inner , outerRef에 넣을 클래스 outer 를 받아서 hover 시 add
    elementLeave : innerRef에 넣을 클래스 inner , outerRef에 넣을 클래스 outer 를 받아서 leave 시 remove
  */
    const elementHover =useCallback((inner,outer=inner) => {
        cursorOuterRef.current.classList.add(inner);
        cursorInnerRef.current.classList.add(outer);
    },[]);
    const elementLeave =useCallback((inner,outer=inner) => {
        cursorOuterRef.current.classList.remove(inner);
        cursorInnerRef.current.classList.remove(outer);
    },[]);


    useEffect(() => {
        /**
         * 메인 배너 ,
         * 메인 배너 프로젝트명.
         * 스크롤 텍스트 애니메이션 효과
         */
        document.querySelectorAll('.prj-link').forEach((link)=>{
            link.addEventListener("mouseover",function(){elementHover('cursor-hide','cursor-link')});
            link.addEventListener("mouseleave",function(){elementLeave('cursor-hide','cursor-link')});
        })

        const   _target = document.querySelector('.sub-tit'),
                _target02 = document.querySelector('.tit-scroll-wrap');
                allToClipGsap([_target,_target02],0.7)  ;
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
                <div className="sub-wrap">
                <div className="fixed-wrap">
                    <div className="fixed-bg" style={{backgroundImage : `url(${process.env.PUBLIC_URL}${project.image[1]})`}}></div>
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
                                <Link to="/">HOME</Link>
                                <a href="#none" className="link-git">PORTFOLO</a>
                            </div>
                            <h1 className="sub-tit">{project.project}</h1>
                            <div className="tit-scroll-wrap">
                                <p className="tit-scroll">SCROLL</p>
                            </div>
                        </div>
                       
                        <div className="sub-content">
                            <div className="inner">
                                <div className="sub-top">
                                    <div className="sub-title-wrap">
                                        <div className="tag-wrap">
                                            {project.hashtag.map((hs)=><span>{hs}</span>)}
                                        </div>
                                        <p className="date">{project.date}</p>
                                        <h2 className="project">{project.project}</h2>
                                        <h3>{project.title}</h3>
                                    </div>
                                    <div className="sub-desc-wrap">
                                        <p className="desc-tit">{project.desc}</p>
                                        <div className="sub-desc" dangerouslySetInnerHTML={ {__html: project.sub_desc}}></div>
                                    </div>
                                </div>
                               
                                <div className="sub-cont">
                                    <div className="main-box">
                                        <div className="pc-box">
                                            <a href={project.url[0]} alt={`${project.title} img`} className="prj-link" target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}${project.image[0]}`} />    
                                            </a>
                                        </div>
                                        <a href={project.url[0]} alt={`${project.title} img`} className="btn-site" target="_blank"><span class="txt">View Site</span></a>
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