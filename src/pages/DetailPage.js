
import React ,{useEffect} from "react";
import {useLocation,Link } from "react-router-dom";
import '../scss/import.scss'
import '../scss/detail.scss'
import { Scrollbar } from "smooth-scrollbar-react";
import { transGsap } from "../lib/gsapFuncs";
import { hoverFunc } from "../lib/common"
function DetailPage({location}){
    let params = useLocation ();
    let project;
    if(params.state != null){
        project = params.state.state; 
    }
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

        /**
         * hover 효과
         */
        const hoverTarget = document.querySelectorAll('[data-ui="hover"]');
        hoverFunc(hoverTarget);
        hoverTarget.forEach(button => {
          ["mouseenter", "mouseout"].forEach(evt => {
            button.addEventListener(evt, e => {
                let _target = e.target.closest('[data-ui="hover"]');
              let parentOffset = _target.getBoundingClientRect(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
              const span = _target.getElementsByClassName("hover");
      
              span[0].style.top = relY + "px";
              span[0].style.left = relX + "px";
            });
          });
        });
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
                    <div className="fixed-bg" style={{backgroundImage : `url(${process.env.PUBLIC_URL}/${project.image[1]})`}}></div>
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
                                    <div className="sub-left">
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
                                                <span className="txt">참여인원</span><span className="txt off">{project.members}</span><span className="hover"></span>
                                            </div>
                                            <div className="etc-item" data-ui="hover">
                                            <span className="txt">참여정도</span><span className="txt off">{project.participation}</span><span className="hover"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub-desc-wrap">
                                        <p className="desc-tit">{project.desc}</p>
                                        <div className="sub-desc" dangerouslySetInnerHTML={ {__html: project.sub_desc}}></div>
                                        {/* <div className="sub-desc">
                                        <h3>기능</h3>
                                        <strong>메인</strong>
                                        <p>API로 불러온 영화데이터 노출, 검색창및 카테고리 탭에서 영화 검색 가능</p>
                                        <strong>영화 소개</strong>
                                        <p>영화 포스터 클릭하시 해당 상세 페이지로 이동</p>
                                        <h4>API</h4>
                                        <p>    영화 데이터<a href='https://yts-proxy.now.sh/list_movies.json' target='_blank'>movie api</a></p>
                                        <h4>폴더 관리</h4><p>    comp : 프레젠테이션 컴포넌트
                                            <br/>    lib : useAsync, Provider state 관리
                                            <br/>    router : 액션 타입 선언/ 액션 생성함수</p>
                                        <h4>state 관리 - contextAPo : 검색 값  useQueryContext()</h4>
                                        <pre>    <code>    state =<br/>        &nbsp;search //키워드 검색 단어<br/>        &nbsp;lng : 127, //경도 - 서울,<br/>        &nbsp;city: where, //도시<br/></code></pre>
                                        <h4>state 관리 - useAsync :  로딩 값, 데이터 관리, 에러 관리하는 커스텀 훅</h4>
                                        <pre>    <code>    state =<br/>        &nbsp;loading: false, //로딩 상태<br/>        &nbsp;data : null, //api로 불러온 영화 데이터,<br/>        &nbsp;error: null, //에러상태<br/></code></pre>
                                        <h4>사용한 라이브러리</h4>
                                        <p>    axios<br/>    react-router-dom<br/>    styled-components<br/></p>
                                        </div>  */}
                                    </div>
                                </div>
                               
                                <div className="sub-cont">
                                    <div className="main-box">
                                        <div className="pc-box">
                                            <a href={project.url[0]} alt={`${project.title} img`} className="prj-link" target="_blank">
                                                <img src={`${process.env.PUBLIC_URL}${project.image[0]}`} />    
                                            </a>
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