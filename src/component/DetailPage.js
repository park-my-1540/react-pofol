
import React ,{useRef,useEffect} from "react";
import {useParams,useLocation  } from "react-router-dom";

import {gsap} from 'gsap'
import { TweenMax } from "gsap";

import '../scss/Detail.scss'
function DetailPage(){
    let params = useLocation ();
    let project = params.state.state; 
    console.log(project.image);
    const scaleRef = useRef();
    useEffect(() => {

        let tween = gsap.to(scaleRef.current, {rotation: 360, duration: 5, ease: "elastic"});

        tween.play();


        // scaleAnim = TweenMax.fromTo(
        //     target, 500,
        //     {
        //         width:3000,
        //         height:3000
        //     }
        //  )
        //  scaleAnim.pr
    }, [])
    return (
        <>
            <div className="sub-container">
                <section className="sub-main" style={{backgroundImage : `url(${project.image})`}}>
                    <h1>{project.project}</h1>
                </section>
                <section className="sub-content">
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
                </section>
            </div>
        </>
    )
}    
export default DetailPage;