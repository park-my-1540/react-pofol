import React,{useEffect} from "react";
import TagCanvas from "tag-canvas";
import '../scss/about.scss';
export default function AboutComp(){
    useEffect(()=>{
        window.onload = function() {
            try {
              TagCanvas.Start('myCanvas','tags',{
                textColour : '#3a5dae',
                outlineThickness : 1,
                outlineColour : '#00000059',
                maxSpeed : 0.06,
                freezeActive:true,
                shuffleTags:true,
                shape:'sphere',
                zoom:1,
                zoomMin:1,
                wheelZoom:false,
                noSelect:true,
                textFont:null,
                freezeDecel:true,
                // fadeIn:3000,
                // initial: [0.3,-0.1],
                depth : 1.5
              });
            } catch(e) {
              document.getElementById('myCanvasContainer').style.display = 'none';
            }
          };

    },[]);
    return(
        <>
        <div className="about">
            <div className="inner">
                <div class="about-wrap">
                    <h3>me,mysef and i</h3>
                    <p className="about-desc">
                        blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
                    </p>
                </div>
                <div id="myCanvasContainer">
                    <canvas width="600" height="600" id="myCanvas">
                        <p>Anything in here will be replaced on browsers that support the canvas element</p>
                    </canvas>
                </div>
                <div id="tags">
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">CSS</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">ES5/ES6</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/XML" target="_blank">GSAP</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Git" target="_blank">Git</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank">SASS</a></li>
                        <li><a href="https://reactjs.org/" target="_blank">ReactJS</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/JQuery" target="_blank">jQuery</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}