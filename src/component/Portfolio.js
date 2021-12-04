
import React from "react";
import SwiperComp from './SwiperComp';
import PracComp from './PracComp';
import data from '../data/datas.json';
import '../scss/portfolio.scss'


export default function Portfolio({cont,actIdx}){
    const project =  <SwiperComp data={data.project}/>;
    const practice =  <PracComp data={data.practice} actIdx={actIdx}/>;
    return (
        <>
        <section className="portfolio">
            {cont === "project" ? project : practice}
        </section>
        </>
    )
}    