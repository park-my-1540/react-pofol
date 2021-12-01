
import React from "react";
import SwiperComp from './SwiperComp';
import PracComp from './PracComp';
import '../scss/portfolio.scss'
export default function Portfolio({cont}){
    const project =  <SwiperComp/>;
    const practice =  <PracComp/>;
    return (
        <>
        <section className="portfolio">
            {cont === "project" ? project : practice}
        </section>
        </>
    )
}    