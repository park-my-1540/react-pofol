import {gsap,timeline} from 'gsap'


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

// useTopGsap : 받아온 attr 속성을 0로
export function hoverGsap(target){
    // let topTo = TweenMax.staggerTo(target, 
    //  {
    //     transform: 'scale(1.5)',
    //     // transform: 'matrix(0.8, 0, 0, 1.5, 0, 0)',
    //     color:'red',
    //     duration: 3, 
    //     ease: "ease"
    //  },
    //  {
    //     transform: 'scale(1)',
    //     // transform: 'matrix(1, 0, 0, 1, 0, 0)',
    //     color:'black',
    //     duration: 3, 
    //     ease: "ease"
    //  },
    //  );
    //  topTo.play();
    //  if(flag === "over"){
    //  }else if(flag === "leave"){
    //     topTo.reverse();
    // var tl = new gsap.timeline({paused:true});
    // tl.to(target, 0.2, {backgroundColor:"yellow"})
    //   .to(target, 0.2, {height:100})
    //   .to(target, 0.2, 
    //   {color:"red", rotation:360, y:40})
    // target.animation = tl;
    // if(flag === "over"){
    //      tl.play();
    //  }else if(flag === "leave"){
    //     tl.reverse();
    //     console.log("reverse");
    //  }
     var tl = gsap.timeline();
        tl.to(target, {transform: 'matrix(0.8, 0, 0, 1.5, 0, 0)', duration: 0.1});
        tl.to(target, {transform: 'matrix(1, 0, 0, 1, 0, 0)', duration: 0.1});

        // then we can control the whole thing easily...
        tl.pause();
        tl.play();
        tl.seek(1.5);
        tl.reverse();
}