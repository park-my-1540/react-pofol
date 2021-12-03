
import React,{useEffect,useState} from "react";
import {clipGsap} from '../lib/gsapFuncs';

export default function Header({actSec}){
    const sub_tit = document.querySelector('.inner span');
    const [tit,setTit] = useState('');
    useEffect(() => {
        clipGsap(sub_tit);
        setTimeout(()=>{
            setTit(actSec);
        },1000);
    }, [actSec])
    return(
        <div className={(actSec === "Home" ? "header isMain" : "header")}>
            <div className="inner"><span>{tit}</span></div>
            <a href="#none" className="link_git"><span className="blind">깃으로 이동</span></a>
        </div>
    );
}