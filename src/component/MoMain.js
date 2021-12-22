import React,{useCallback} from "react";
import MessageContainer from "../container/MessageContainer";
import '../scss/chat.scss';
import {transGsap,slideGsap2} from '../lib/gsapFuncs'
export default function Momain(){
    
    const openChat = useCallback((e)=> {

        const   circles = document.querySelectorAll('.circle-box'),
                motagWrap = document.querySelector('.tag-wrap.momain-tag'),
                modalBox = document.querySelectorAll('.modal-box'),
                typoBox = document.querySelector('.typograpy-wrap'),
                chat_btn = e.currentTarget;

                if(chat_btn.classList.contains('active')){
                    chat_btn.classList.remove('active');
                    modalBox[0].classList.remove('on');
                    transGsap(modalBox,'left','999px',1);
                    slideGsap2([circles,motagWrap,typoBox],-999,false);
                }else{
                    chat_btn.classList.add('active');
                    slideGsap2([circles,motagWrap,typoBox],-999);
                    transGsap(modalBox,'left','0',1);
                    setTimeout(()=>{
                        modalBox[0].classList.add('on');
                    },1500);
                }
      },[]);
    return(
        <>
            <a href="#none" className="btn-chat" onClick={openChat}></a>
            <div className="modal-box">
                <MessageContainer/>
            </div>
        </>
    )
}