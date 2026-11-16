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
            {name: "Jamahl Mosley", color: "var(--moderate-addition)"},
           
        ]}

        additions={[
            {"name": "Sean Sweeney", "color": "var(--moderate-addition)"},
            
        ]}
        />

        <OffseasonCard 
        title={["Players"]}
        losses={[
            {name: "Moritz Wagner", color: "var(--neutral)"},
            {name: "Jett Howard", color: "var(--neutral)"},
        ]}

        additions={[
            {name: "Nikola Vucevic", color: "var(--neutral)"}, 
            {name: "Izaiyah Nelson (R2)", color: "var(--rookie)"}, 
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