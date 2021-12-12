
import React from "react";
import PofolComp from './PofolComp';
import PracComp from './PracComp';
import data from '../data/datas.json';
import '../scss/portfolio.scss'

export default function SlideComp({cont}){
    const project =  <PofolComp data={data.project}/>;
    const practice =  <PracComp data={data.practice} cont={cont}/>;
    return (
        <>
        <section className="portfolio">
            {cont === "project" ? project : practice}
        </section>
        </>
    )
}    