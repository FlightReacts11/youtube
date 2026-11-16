import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PlayerSummaryContent from "../functional-components/PlayerSummaryContent";
import Paolo from "../assets/paolo.jpg";

import Suggs from "../assets/suggs.webp";
import Bane from "../assets/bane.webp";
import Wagner from "../assets/wagner.webp";
import Carter from "../assets/carter.jpg";

import Black from "../assets/black.jpg";
import Tristan from "../assets/tristan.jpg";
import Cain from "../assets/cain.jpg";
import Vooch from "../assets/vooch.webp";

function PlayerSummary() {
    return (
        <div>
            <PlayerSummaryContent 
            image={Vooch}
            color="var(--starting-calibre)"
            rating={75}
            firstname="Nikola"
            lastname="Vucevic"
            position="SF/PF"
            icon={[]}
            strengths={[
                { name: "Good Shooter", color: "var(--big-addition)" },
                { name: "Great Passer From The Post", color: "var(--big-addition)" },
                { name: "Rebounding", color: "var(--big-addition)" },
                { name: "Sealing Out Defenders For An Entry Pass", color: "var(--big-addition)" },
                
            ]}
            weaknesses={[
                { name: "Cone", color: "var(--big-loss)" },
                { name: "Getting Back In Transition", color: "var(--big-loss)" },
                { name: "Drawing Fouls", color: "var(--big-loss)" },
                
            ]}  
            />
        </div>
    )
}

export default PlayerSummary 