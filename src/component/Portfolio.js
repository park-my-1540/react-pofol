
import React from "react";
import SwiperComp from './SwiperComp';
import '../scss/portfolio.scss'
export default function Portfolio({location}){
    console.log(location);
    return (
        <>
         <section className="portfolio">
            <SwiperComp/>
         </section>
        </>
    )
}    