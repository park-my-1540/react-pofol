
import React from "react";
import SwiperComp from './SwiperComp';
import '../scss/portfolio.scss'
export default function Portfolio({location}){
    return (
        <>
         <section className="portfolio">
             <div className="test-wrap">
                <SwiperComp/>
             </div>
         </section>
        </>
    )
}    