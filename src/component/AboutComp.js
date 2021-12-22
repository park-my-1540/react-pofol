import React,{useEffect,useState,useCallback} from "react";
import {allToClipGsap,reverseAllToClipGsap} from '../lib/gsapFuncs';
import TagCanvas from "tag-canvas";
import '../scss/about.scss';
export default function AboutComp({mainActIdx}){
    const [wid,setWid] = useState();
    const [hei,setHei] = useState();
    const resize = useCallback( () =>{

        let winWid = window.innerWidth;
        if(winWid > 768){ 
             setWid(Math.ceil(document.querySelectorAll('.about')[0].offsetWidth/2));
             setHei(Math.ceil(document.querySelectorAll('.about')[0].offsetHeight/1.2));
        }
        else{
            setWid(Math.ceil(document.querySelectorAll('.about')[0].offsetWidth/1.5));
            setHei(Math.ceil(document.querySelectorAll('.about')[0].offsetHeight/2));
        }  
      },[]);
      window.addEventListener('resize',function(){
           if(document.querySelectorAll('.about').length > 0){resize();}
      });

    useEffect(()=>{
        const aboutBox = document.querySelector('.about-wrap');
        const h3 = aboutBox.querySelector('.about-wrap h3');
        const desc = aboutBox.querySelector('.pharse');
        const desc2 = aboutBox.querySelector('.pharse2');
        if(mainActIdx===1){
            allToClipGsap([h3,desc,desc2]);
        }
        else{
            reverseAllToClipGsap([h3,desc,desc2]);
        }
        resize();
            try {
              TagCanvas.Start('myCanvas','tags',{
                    outlineColour: '#ffffff80',
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05,
                    textFont: null,
                    textColour: null,
                    weightMode:'both',
                    weight: true,
                    weightGradient: {
                        0: '#eb808e', 
                        0.66: '#6ab6df', 
                        1:    '#3a5dae',
                    }
                }
              );
            } catch(e) {
              document.getElementById('myCanvasContainer').style.display = 'none';
            }
    },[mainActIdx]);
    return(
        <>
        <div className="about">
            <div className="inner">
                <div className="svg-box">
                    <div class="img_rotate"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400">
                        <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle_bottom">
                                <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="195 250 250" to="555 250 250" repeatCount="indefinite" />
                            </path>
                        </defs>
                        <text dy={70} textLength={1220}>
                            <textPath xlinkHref="#textcircle_bottom">&nbsp;&nbsp;Do my best &nbsp;Since ~ 2017 </textPath>
                        </text>
                    </svg>
                </div>
                <div className="about-wrap">
                    <h3>Me,My self and I</h3>
                    <div className="about-desc">
                        <div className="pharse">
                            저는 4년차 웹 퍼블리셔 박미영입니다.<br/><br/>

                            깔끔하고 동적인 UI를 좋아하고,<br/>
                            <span className="point">유지보수에 최적화된 스크립트 작성과 마크업에</span> 관심이 많습니다.<br/><br/>
                        </div>
                        <div className="pharse2">
                            프론트엔드 개발자가 되기 위해<br/>
                            리액트에 많은 시간을 투자하고 있습니다.<br/>
                            <span className="point">리액트 최적화 방법</span>에 대해 관심이 많습니다.<br/><br/>

                            정체되지 않고 계속해서 발전하는 사람이 되고싶습니다. 
                        </div>
                    </div>
                </div>
                <div id="myCanvasContainer">
                    <canvas width={wid} height={hei} id="myCanvas">
                        <p>Anything in here will be replaced on browsers that support the canvas element</p>
                    </canvas>
                </div>
                <div id="tags">
                    <ul>
                        <li><a style={{fontSize:'1.5em'}} href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML5</a></li>
                        <li><a style={{fontSize:'1.5em'}} href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS3</a></li>
                        <li><a style={{fontSize:'1.2em'}} href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">ES6</a></li>
                        <li><a style={{fontSize:'1.2em'}} href="https://en.wikipedia.org/wiki/XML" target="_blank">GSAP</a></li>
                        <li><a style={{fontSize:'1.2em'}} href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li>
                        <li><a style={{fontSize:'1.2em'}} href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a></li>
                        <li><a style={{fontSize:'1.2em'}} href="https://reactjs.org/" target="_blank">React</a></li>
                        <li><a style={{fontSize:'0.7em'}} href="https://reactjs.org/" target="_blank">Redux</a></li>
                        <li><a style={{fontSize:'1.5em'}} href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}