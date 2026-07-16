import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import OffseasonCard from "../functional-components/OffseasonCard";

function Offseason() {
   return (
    <div>
        <div className="offseason-header-container">
        <h1 className="offseason-header">Offseason Changes</h1>
        </div>
        <OffseasonCard 
        title={["Front Office"]}
        losses={[
            {name: "Coach 1", color: "var(--big-loss)"},
            {name: "Coach 1", color: "var(--big-loss)"},
        ]}

        additions={[
            {"name": "Coach 1", "color": "var(--big-addition)"}, 
            {"name": "Coach 3", "color": "var(--moderate-addition)"}
        ]}
        />

        <OffseasonCard 
        title={["Front Office"]}
        losses={[
            {name: "Coach 1", color: "var(--big-loss)"},
            {name: "Coach 1", color: "var(--big-loss)"},
        ]}

        additions={[
            {"name": "Coach 1", "color": "var(--big-addition)"}, 
            {"name": "Coach 3", "color": "var(--moderate-addition)"}
        ]}
        />

        
        
        

        <div className="footer">
            <ul className="footer-ul">
                <li>Big Addition</li>
                <li>Moderate Addition</li>
                <li>Neutral</li>
                <li>Moderate Loss</li>
                <li>Big Loss</li>
                <li>TBD</li>
                <li>Rookie</li>
            </ul>

        </div>
        </div>
   )
}

export default Offseason