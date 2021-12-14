import React,{useEffect,useState} from "react";
import {clipGsap} from '../lib/gsapFuncs';
export default function Aside({actSec,deviceChk}){
  const header_tit = document.querySelector('.aside-top h1');
  const [h1tit,setH1Tit] = useState('Home');
 
  useEffect(() => {
    if(deviceChk === 'mo'){
      clipGsap(header_tit);
      setTimeout(()=>{
        setH1Tit(actSec);
      },1000);
    }
}, [actSec])
    return(
        <div className="aside">
            <div className="aside-top">
              {
                deviceChk === 'mo' ? <h1>{h1tit}</h1> :  <h1>PARK MY's Portfolio</h1>
              }
            </div>
            <div className="main-ctrl">
              <button className="main-prev"><span className="blind">이전으로</span><svg width={deviceChk==='pc'? 15 :12} height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
              <div class="main-pagination"></div>
              <button className="main-next"><span className="blind">다음으로</span><svg width={deviceChk==='pc'? 15 :12} height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9.21373 11L18 1" stroke="#1A1B1C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </div>
          </div>
    );
}