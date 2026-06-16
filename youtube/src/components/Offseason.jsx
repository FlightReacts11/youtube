import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import OffseasonCard from "./OffseasonCard";

function Offseason() {
   return (
    <div>
        <OffseasonCard 
        title={["Front Office"]}
        losses={[
            {name: "Coach 1", color: "var(--big-loss)"}
        ]}
        additions={["Coach 1", "Coach 2"]}
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