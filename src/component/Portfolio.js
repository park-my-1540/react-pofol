
import React from "react";
import SwiperComp from './SwiperComp';
import DetailPage from './DetailPage';
import '../scss/portfolio.scss'

export default function Portfolio(){
    return (
        <>
        {/* <DetailPage/> */}
         <section className="portfolio">
            <SwiperComp/>
         </section>
        </>
    )
}    