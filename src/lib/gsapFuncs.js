import {gsap} from 'gsap'
import { TweenMax } from "gsap";
export function sclaeAnimation({target}){
    /**
     * 선언하고 타겟받으면 실행하는 식으로 ㄱㄱ
     * 
     */
     scaleAnim = TweenMax.fromTo(
        target, 500,
        {
            width:3000,
            height:3000
        }
     )

}