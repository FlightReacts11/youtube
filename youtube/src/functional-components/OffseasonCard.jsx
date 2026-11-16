import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Offseason from "../components/Offseason";



function OffseasonCard({additions, losses, title, color, name}) {
    return (
        <div className="total-wrapper">
        <div>
            
        <div className="offseason-container">
    <h2 className="title">{title}</h2>
    <div className="offseason-container-contents">
        <div className="losses">
            <h2 className="font-touchup">Losses:</h2>
            <ul className="left-side">
                {losses.map((loss, index) => (
                    <li className="list-item" key={index} style={{color: loss.color}}>{loss.name}</li>
                ))}
            </ul>
        </div>
        
        <div className="additions">
            <h2 className="font-touchup">Additions:</h2>
            <ul className="right-side">
                {additions.map((addition, index) => (
                    <li className="list-item" key={index} style={{color: addition.color}}>{addition.name}</li>
                ))}
            </ul>
        </div>
        </div>
    </div>
</div>
</div>

   )
}

export default OffseasonCard