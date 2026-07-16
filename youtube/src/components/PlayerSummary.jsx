import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PlayerSummaryContent from "../functional-components/PlayerSummaryContent";
import Paolo from "../assets/paolo.jpg";

function PlayerSummary() {
    return (
        <div>
            <PlayerSummaryContent 
            image={Paolo}
            color="var(--superstar)"
            rating={90}
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            icon={[]}
            strengths={[
                { name: "Ball handling", color: "var(--superstar)" },
                { name: "Ball handling", color: "var(--superstar)" },
                
            ]}
            weaknesses={[
                { name: "Ball handling", color: "var(--big-addition)" },
                { name: "Ball handling", color: "var(--superstar)" },
                { name: "Ball handling", color: "var(--superstar)" },
                { name: "Ball handling", color: "var(--superstar)" },
            ]}
            />
        </div>
    )
}

export default PlayerSummary 