import {gsap} from 'gsap'


//useTopGsap : 받아온 attr 속성을 0로
export function topGsap(target,attr,val){
    let topTo = gsap.to(target, {
        [attr]:val,
        duration: 2, 
        ease: "easeing"
     });
     topTo.play();
}

// useTopGsap : 받아온 attr 속성을 0로
export function opacityGsap(target){
    let topTo = gsap.to(target, {
        opacity:1,
        duration: 2, 
        delay :2,
        ease: "ease-out"
     });
     topTo.play();
}