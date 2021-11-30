import React,{useEffect,useCallback} from "react"
import '../scss/chat.scss'
import { hoverGsap,typoGsap ,reverseTypoGsap} from "../lib/gsapFuncs";
export default function MainTypeComp({fstIndex}){
    /**
     * 첫번째 인덱스면
     * mouseenter hover 되고
     * typograpy-wrap에 효과 빼야함
     * 
     * 첫번째 인덱스가 아니게 되면
     * mouseenter 없애고
     * typograpy-wrap에 효과 넣어야함. 
     * event.stopImmediatePropagation()
     */

     const typoEventListner = useCallback((e) => {  // state가 바뀔 때마다 close 함수가 재생성되어, 컴포넌트 업데이터 전과 동일하지 않은 함수로 인식되는 것 같다.
        hoverGsap(e.currentTarget) 
    },[]);

    useEffect(()=>{
        const typograpy=[...document.querySelectorAll('.typograpy-wrap span')],
                typograpyWrap=document.querySelector('.typograpy-wrap');
        
        if(fstIndex){
            typograpy.forEach((text)=>{
                text.addEventListener('mouseover',typoEventListner);
            })
            reverseTypoGsap(typograpyWrap)
        }else{
            typograpy.forEach((text)=>{
                text.removeEventListener('mouseover',typoEventListner);
            })
            typoGsap(typograpyWrap);
        }
                
    },[fstIndex])

    return (
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
    )
}