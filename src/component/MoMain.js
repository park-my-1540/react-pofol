import { init } from "aos";
import React, {useEffect, useState } from "react";
import MessageContainer from "../container/MessageContainer";
import '../scss/chat.scss';
import {transGsap,slideGsap3} from '../lib/gsapFuncs'
export default function Momain({deviceChk}){
    useEffect(()=>{
        document.querySelectorAll('.btn-chat').length > 0 && init()
    },[])

    function init() {
        const   circles = document.querySelectorAll('.circle-box'),
                motagWrap = document.querySelector('.tag-wrap.momain-tag'),
                modalBox = document.querySelectorAll('.modal-box'),
                motypograpyWrap = document.querySelector('.momainTypo');
                document.querySelector('.btn-chat').addEventListener('click',function(e){

                const chat_btn = document.querySelector('.btn-chat');

            if(chat_btn.classList.contains('active')){
                chat_btn.classList.remove('active');
                // chatBotGsap(e.currentTarget.closest('.modal-box'),false);
                transGsap(modalBox,'left','999px',1);
                slideGsap3([circles,motagWrap,motypograpyWrap],-999,false);
            }else{
                chat_btn.classList.add('active');
                slideGsap3([circles,motagWrap,motypograpyWrap],-999);
                transGsap(modalBox,'left','0',1);
                // chatBotGsap(e.currentTarget.closest('.modal-box'),true);
            }
        })
      }
    return(
        <>
            <a href="#none" className="btn-chat"></a>
            <div className="modal-box">
                <MessageContainer/>
            </div>
        </>
    );
}