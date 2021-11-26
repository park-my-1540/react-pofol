
import React ,{useEffect,useRef} from "react";
import {useLocation  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {gsap} from 'gsap'
import { TweenMax } from "gsap";
import '../scss/import.scss'
import '../scss/detail.scss'
import { Scrollbar } from "smooth-scrollbar-react";
function DetailPage(){
    let params = useLocation ();
    let project = params.state.state; 
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        const _target = document.querySelector('.sub-main');
        let tween = gsap.to(_target, {
            marginTop:'0',
            duration: 2, 
            ease: "easeing"});
            // document.body.scrollTop = 0;
        tween.play();

        // const _text = document.getElementsByClassName('text-wrap')[0];
        // let _text = gsap.to(_target, {
        //     marginTop:'0',
        //     duration: 2, 
        //     ease: "easeing"});
        //     // document.body.scrollTop = 0;
        // tween.play();
    }, [])
    function scrollFunc(){
        const _text = document.querySelector('.text-wrap');
        const _text_span = document.querySelector('.text-wrap').querySelector('span');;

        /* 윈도우의 높이 */
        var winH = window.innerHeight; //500
        /* _text top 값 */
        var posFromTop = _text.getBoundingClientRect().top; //1500
     
        if( 0 > posFromTop-winH &&  posFromTop-winH > -900){ //텍스트영역 스크롤시
            console.log("zz");
            _text_span.style.top=posFromTop + "px";
        }else{
            _text_span.style.top=-posFromTop + "px";
        }
    }
    return (
        <>
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
                    <section className="sub-main" style={{backgroundImage : `url(${project.image})`}}>
                        <h1>{project.project}</h1>
                    </section>
                    {/* <section className="sub-content">
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
                    </section> */}
                    <section className="empty">
                        emptyclass
                    </section>
                    <div className="text-wrap" >
                        <span>Always enjoy the work</span>
                    </div>
                    <section className="empty">
                        emptyclass
                    </section>
                </div>
            </Scrollbar>
        </>
    )
}    
export default DetailPage;