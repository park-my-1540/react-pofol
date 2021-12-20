import {gsap} from 'gsap'

//transGsap : 받아온 attr 속성을 0로
export function transGsap(target,attr,val,dur=2){
    let topTo = gsap.to(target, {
        [attr]:val,
        duration: dur, 
        ease: "easeing"
     });
     topTo.pause();
     topTo.play();
}

// hoverGsap 
export function hoverGsap(target){
    let tl = gsap.timeline();
    tl.to(target, 0.5, 
        {
           '-webkit-animation' :'text-shadow 0.5s ease',
           'animation' :'text-shadow 0.5s ease'
        }
    );
    tl.play();
}

// typoGsap  
export function typoGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {left: '0%',bottom:'0',transform: 'translate(-20%,20%) scale(0.4,0.3)', duration: 2,ease:'elastic.out(1,1.3)'});
    tl.pause();
    tl.play();
    // target.removeAttribute('style');
}

// typoGsap-reverse  
export function reverseTypoGsap(target){
    let tl = gsap.timeline();
    tl.to(target, {left: '5%',bottom:'100px',transform: 'translate(0,0) scale(1)', duration: 2,ease:'elastic.out(1,1.3)'});
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

export function allToClipGsap(target01,target02,target03,target04){
        
    var tl = gsap.timeline();

      tl.to(target01, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
        .to(target02, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
        .to(target03, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
        .to(target04, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
}
export function reverseAllToClipGsap(target01,target02,target03,target04){
        
    var tl = gsap.timeline();

      tl.to(target01, {'-webkit-clip-path': 'inset(0 100% 0 0)','clip-path': 'inset(0 100% 0 0)',duration:0.5})
        .to(target02, {'-webkit-clip-path': 'inset(0 100% 0 0)','clip-path': 'inset(0 100% 0 0)',duration:0.5})
        .to(target03, {'-webkit-clip-path': 'inset(0 100% 0 0)','clip-path': 'inset(0 100% 0 0)',duration:0.5})
        .to(target04, {'-webkit-clip-path': 'inset(0 100% 0 0)','clip-path': 'inset(0 100% 0 0)',duration:0.5})
}

export function mainTypoGsap(target){
    var tl = gsap.timeline();
    tl.to(target, 1, 
        {
           '-webkit-animation' :'text-shadow 1s ease',
           'animation' :'text-shadow 1s ease',
            stagger:0.1
        }
    );
}
/* 어떤 효과 넣을지 생각좀 해보자 */
export function slideGsap(target01,target02_pc,target02_mo,target03,target04){
    var tl = gsap.timeline();

    tl.to(target01, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
      .to(target02_pc, {top: 0,duration:0.5})
      .to(target02_mo, {left: 0,duration:0.5})
      .to(target03, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
      .to(target04, {'-webkit-clip-path': 'inset(0 0% 0 0)','clip-path': 'inset(0 0% 0 0)',duration:0.5})
}
/* 슬라이드 옆으로 가듯이 */
export function slideGsap2(target){
    var tl = gsap.timeline();
    tl.to(target, 1, 
        {
            transform :'translateX(0)',
            stagger:0.2
            ,duration:0.2
        }
    );
    tl.play();
}
export function slideGsap3(target,_var,flag=true){
    var tl = gsap.timeline();
    tl.fromTo(target, 1, 
        {
            transform :'translateX(0px)',
            stagger:0.2
            ,duration:0.2
        },
        {
            transform : `translateX(${_var}px)`,
            stagger:0.2
            ,duration:0.2
        }
    );
    if(flag){
        tl.play();
    }else{
        tl.reverse(1);
    }
}
export function mainResTypoGsap(target,flag=true){
    var tl = gsap.timeline();
    tl.fromTo(target, 1, 
        {
            top:'0',
            left : '5%',
            ease:'elastic.out(1,1.3)',
            transform:'none',
        }  , {
            top:'70%',
            left: '5%',
            rotation: 360,
            transform:'none',
            ease:'elastic.out(1,1.3)',
        }
    );
    if(flag){
        tl.play();
    }else{
        tl.reverse(1);
    }
}

export function ToPcSub(target,flag=true){
    var tl = gsap.timeline();
    tl.to(target, 1, 
        {
            top :'auto', //pc
            left: '5%',
            transform : 'translate(-20vh,20vh) scale(0.4,0.3)',
            ease:'elastic.out(1,1.3)',
        }
    );
    tl.pause();
    tl.play();
}
export function ToPcMain(target,flag=true){
    var tl = gsap.timeline();
    tl.to(target, 1, 
        {
            bottom: '35vh', //pc로 회귀
            transform : 'translate(0,0) scale(1,1)',
            ease:'elastic.out(1,1.3)',
        }
    );
    tl.pause();
    tl.play();
}
