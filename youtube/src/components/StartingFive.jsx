import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StartingFiveCard from "./StartingFiveCard";
import Paolo from "../assets/paolo.jpg";
import UpArrow from "../icons/up-arrow.png";
import DownArrow from "../icons/down-arrow.png";

function StartingFive() {
    return (

        <div className="starting-wrapper">
            <h1 className="starting-five">Starting Five</h1>

            <div className="card-grid">
                <div className="top-row">
            <StartingFiveCard 
            rating={90}
            color="var(--superstar)"
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            image={Paolo}
            icon={[UpArrow, DownArrow]}/>

            <StartingFiveCard 
            rating={85}
            color="var(--franchise-player)"
            firstname="Desmond"
            lastname="Bane"
            position="SG"
            image={Paolo}
            icon={[UpArrow,]}/>

            <StartingFiveCard 
            rating={90}
            color="var(--superstar)"
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            image={Paolo}
            icon={[UpArrow, DownArrow]}/>

            </div>

            <div className="bottom-row">

            <StartingFiveCard 
            rating={90}
            color="var(--superstar)"
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            image={Paolo}
            icon={[UpArrow, DownArrow]}/>

            <StartingFiveCard 
            rating={90}
            color="var(--superstar)"
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            image={Paolo}
            icon={[UpArrow, DownArrow]}/>

            </div>
            </div>
            
            <div className="table-container">
  <div className="left-column">
    <div className="cell"> SuperStar</div>
    <div className="cell"> {"Franchise\nPlayer"}</div>
    <div className="cell"> All-Star</div>
    <div className="cell"> Quality Starter</div>
  </div>

  <div className="right-column">
    <div className="cell"> Starting Calibre</div>
    <div className="cell"> Rotational Player</div>
    <div className="cell"> Deep Rotation</div>
    <div className="cell"> End of Bench</div>
  </div>
</div>
            

           </div>

    )
}

export default StartingFive