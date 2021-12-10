
import React from "react";
import PofolComp from './PofolComp';
import PracComp from './PracComp';
import data from '../data/datas.json';
import '../scss/portfolio.scss'

export default function SlideComp({cont,actIdx}){
    const project =  <PofolComp data={data.project}/>;
    const practice =  <PracComp data={data.practice} actIdx={actIdx} cont={cont}/>;
    return (
        <>
        <section className="portfolio">
            {cont === "project" ? project : practice}
        </section>
        </>
    )
}    