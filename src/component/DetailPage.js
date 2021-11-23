
import React from "react";
import {useParams,useLocation  } from "react-router-dom";
function DetailPage(){
    let params = useLocation ();
    let project = params.state; 
    console.log(params.state);
    return (
        <>
            <div className="sub-container">
                <section className="sub-main">
                    <h1>{project.project}</h1>
                </section>
                <section className="sub-main">
                    <h1>{project.title}</h1>
                    <div className="main-box">
                        <div className="pc-box">
                            <img src="https://yuta-abe.com/assets/img/projects/gig/img_pc.png"/>
                        </div>
                        <div className="mo-box">
                            <img src="https://yuta-abe.com/assets/img/projects/gig/img_sp.png"/>
                        </div>
                        <div className="txt-horizon">
                            <span>lways enjoy</span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}    
export default DetailPage;