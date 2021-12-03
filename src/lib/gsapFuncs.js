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
    tl.to(target, {transform: 'translate(-18%, 400%) scale(0.4)', duration: 1,ease:'elastic.out(1,1.3)'});
    tl.pause();
    tl.play();
}

// typoGsap-reverse  
export function reverseTypoGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {transform: 'translate(20%, 230%) scale(1)', duration: 1,ease:'elastic.out(1,1.3)'});
    tl.pause();
    tl.play();
}

export function clipGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {'-webkit-clip-path': 'inset(100% 0 0 0)', duration: 0.5});
    tl.to(target, {'clip-path': 'inset(100% 0 0 0)', duration: 0.5});
    tl.to(target, {'-webkit-clip-path': 'inset(0% 0 0 0)', duration: 0.5});
    tl.to(target, {'clip-path': 'inset(0% 0 0 0)', duration: 0.5});
    tl.pause();
    tl.play();
}

// TweenMax.allTo([mc1, mc2, mc3, mc4, mc5], 1, {y:"100", alpha:0, delayIncrement:0.2});

// delayIncrement : Number - 각 target들 간에 delay
// onCompleteAll : Function - onComplete는 각 target이 complete 될 때 마다 각각 호출
//                          - onCompleteAll은 tween이 다 끝나고 한번만 호출
// onCompleteAllParams : Array

export function allToClipGsap(arr){
    console.log(arr);
    var tlParam, tlX, tlY ;
    var tlDelay = -0.1;
    let tl = gsap.TimelineMax();
    var insertion = 0;
    var tlTrain = [0.5,1,1.5];
    tl.add("insertion" + insertion, insertion);
    const targets= arr;
    tl.add(gsap.TweenMax.allTo(targets,
        1,{
            '-webkit-clip-path': 'inset(100% 0 0 0)',
            'clip-path': 'inset(100% 0 0 0)'
         
        },0.1), "insertion" + insertion);
        insertion++;

        tl.add(restart, "-=0.4");

        function restart() {
            tl.seek("insertion1");
          }
        
    }
    