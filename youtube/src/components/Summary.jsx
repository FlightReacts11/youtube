import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Keys from "../icons/keys.png";
import Money from "../icons/money.png";

function Summary() {
   return (
    <div>
        <div className="summary-outer">
    <div className="final-graphic-container">
        <div className="team-overall">
            <div className="keys-box">
                <h2 className="keys-to-success">Keys To Success</h2>
                <ul className="key-list">
                    <li className="key-card">Sean Sweeney Getting This Squad To Play Great</li>
                    <li className="key-card">Team Health</li>
                    <li className="key-card">Anthony Black Taking Another Big Step</li>
                </ul>
            </div>

            <div className="assets-box">
    <h2 className="assets">Team Strengths + Weaknesses</h2>
    <div className="assets-cards">
        <div className="asset-card">
            <p className="asset-value">Size & Defense</p>
            
        </div>
        <div className="asset-card">
            <p className="asset-value">Really Good Team In The Playoffs</p>

        </div>
        <div className="asset-card">
            <p className="asset-value">Shooting</p>
        </div>
    </div>
</div>
        </div>
        
    </div>
   <div className="final-grade">
    <div className="final-grade-bar">
        <div className="final-grade-card">
            <p className="final-grade-label">Final Grade</p>
            <p className="final-grade-value grade-color">78.66</p>
        </div>
        <div className="final-grade-card">
            <p className="final-grade-label">Estimated Win Total</p>
            <p className="final-grade-value wins-color">36-50</p>
        </div>
    </div>
</div>
    </div>
    
</div>
   )
}

export default Summary