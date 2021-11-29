import React,{useEffect,useState,useRef} from "react"
import '../scss/chat.scss'
import { hoverGsap } from "../lib/gsapFuncs";
export default function Main({msgList,onLoading,onAddAsync,onUpdated}){


    useEffect(()=>{
    
        const typograpy=[...document.querySelectorAll('.typograpy-wrap span')];
        typograpy.forEach((text)=>{
            text.addEventListener('mouseenter',function(e){
                const target = e.currentTarget;
                hoverGsap(target);
            });
            // text.addEventListener('mouseleave',function(e){
            //     const target = e.currentTarget;
            //     hoverGsap(target,"leave");
            // });
        })
    },[])
    

    return (
        <>
                    <div className="wrapper">
                    <div className="typograpy-wrap">
                        <span>H</span>
                        <span>I</span><br/>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                    </div>
                </div>
            

        </>
    )
}