import {gsap} from 'gsap'


//transGsap : 받아온 attr 속성을 0로
export function transGsap(target,attr,val,dur=2){
    let topTo = gsap.to(target, {
        [attr]:val,
        duration: dur, 
        ease: "easeing"
     });
     topTo.play();
}

// hoverGsap 
export function hoverGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {transform: 'matrix(0.8, 0, 0, 1.5, 0, 0)', duration: 0.1});
    tl.to(target, {transform: 'matrix(1, 0, 0, 1, 0, 0)', duration: 0.1});
    tl.pause();
    tl.play();
    tl.seek(0.2);
    tl.reverse();
}

// typoGsap  
export function typoGsap(target){
    let tl = gsap.timeline();
    // tl.to(target, {transform: 'scale(0.3)', duration: 0.5});
    // tl.to(target, {left: '-5%', duration: 0.5});
    tl.to(target, {transform: 'translate(-18%, 400%) scale(0.4)', duration: 1,ease:'elastic.out(1,1.3)'});
    tl.pause();
    tl.play();
}

// typoGsap-reverse  
export function reverseTypoGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {transform: 'translate(20%, 230%) scale(1)', duration: 1,ease:'elastic.out(1,1.3)'});
    // tl.to(target, {transform: 'scale(1)', duration: 0.5});
    tl.pause();
    tl.play();
}