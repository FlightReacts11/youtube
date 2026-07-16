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
                    <li className="key-card">sss</li>
                    <li className="key-card">sss</li>
                    <li className="key-card">sss</li>
                </ul>
            </div>

            <div className="assets-box">
    <h2 className="assets">Team Strengths + Weaknesses</h2>
    <div className="assets-cards">
        <div className="asset-card">
            <p className="asset-value">$12.4M</p>
            
        </div>
        <div className="asset-card">
            <p className="asset-value">2</p>

        </div>
        <div className="asset-card">
            <p className="asset-value">KCP, </p>
        </div>
    </div>
</div>
        </div>
        
    </div>
   <div className="final-grade">
    <div className="final-grade-bar">
        <div className="final-grade-card">
            <p className="final-grade-label">Final Grade</p>
            <p className="final-grade-value grade-color">70</p>
        </div>
        <div className="final-grade-card">
            <p className="final-grade-label">Estimated Win Total</p>
            <p className="final-grade-value wins-color">45</p>
        </div>
    </div>
</div>
    </div>
    
</div>
   )
}

export default Summary