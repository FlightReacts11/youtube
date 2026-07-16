import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Offseason from "../components/Offseason";

import "../index.css";

function FrontOfficeFunctional({ownerImage, ownerName, coachName, coachImage, scheme, drafting, spending, development, assets}) {
    return (
        <>
        <div className="front-office-header">
            <h2>Front Office</h2>
        </div>
        <div className="front-office">
            <div className="front-office-top">
                <div className="front-office-person owner-side">
                    <img className="front-office-image" src={ownerImage} />
                    <div className="front-office-overlay">
                        <p className="front-office-label">Owner</p>
                        <h2 className="front-office-name">{ownerName} <span className="front-office-grade">A+</span></h2>
                        
                    </div>
                </div>

                <div className="front-office-person">
                    <img className="front-office-image" src={coachImage} />
                    <div className="front-office-overlay">
                        <p className="front-office-label">Head Coach</p>
                        <h2 className="front-office-name">{coachName} <span className="front-office-grade">A+</span></h2>
                    </div>
                </div>
            </div>

            <div className="front-office-bottom">
                <div className="front-office-pill">
                    <p className="front-office-stat-label">Scheme</p>
                    <p className="front-office-stat-value">{scheme}</p>
                </div>

                <div className="front-office-pill">
                    <p className="front-office-stat-label">Recent Draft Hits</p>
                    <p className="front-office-stat-value">{drafting}</p>
                </div>

                <div className="front-office-pill">
                    <p className="front-office-stat-label">Cap Space Usage</p>
                    <p className="front-office-stat-value">{spending}</p>
                </div>

                <div className="front-office-pill">
                    <p className="front-office-stat-label">Player Development</p>
                    <p className="front-office-stat-value">{development}</p>
                </div>

                <div className="front-office-pill">
                    <p className="front-office-stat-label">Asset Management</p>
                    <p className="front-office-stat-value">{assets}</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default FrontOfficeFunctional