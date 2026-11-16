import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StartingFiveCard from "../functional-components/StartingFiveCard";
import Paolo from "../assets/paolo.jpg";




import Suggs from "../assets/suggs.webp";
import Bane from "../assets/bane.webp";
import Wagner from "../assets/wagner.webp";
import Jackson from "../assets/jackson.jpg";
import Carter from "../assets/carter.jpg";


import UpArrow from "../icons/up-arrow.png";
import DownArrow from "../icons/down-arrow.png";
import DoubleArrow from "../icons/up-and-down-arrow.png";
import Eyes from "../icons/eyes.png";
import Flame from "../icons/flame.png";
import Clock from "../icons/clock.png";
import Cross from "../icons/cross.png"

function StartingFive() {
    return (

        <div className="starting-wrapper">
            <h1 className="starting-five">Starting Five <span className="starting-five-note">(65% Of Final Grade)</span> </h1> 
           

            <div className="card-grid">
                <div className="top-row">
            <StartingFiveCard 
            rating={79}
            color="var(--quality-starter)"
            firstname="Jalen"
            lastname="Suggs"
            position="PG"
            image={Suggs}
            icon={[Cross]}/>

            <StartingFiveCard 
            rating={83}
            color="var(--all-star)"
            firstname="Desmond"
            lastname="Bane"
            position="SG"
            image={Bane}
            icon={[]}/>

            <StartingFiveCard 
            rating={85}
            color="var(--all-star)"
            firstname="Franz"
            lastname="Wagner"
            position="SF/PF"
            image={Wagner}
            icon={[]}/>

            </div>

            <div className="bottom-row">

            <StartingFiveCard 
            rating={89}
            color="var(--franchise-player)"
            firstname="Paolo"
            lastname="Banchero"
            position="PF"
            image={Paolo}
            icon={[Eyes]}/>

            <StartingFiveCard 
            rating={75}
            color="var(--starting-calibre)"
            firstname="Wendell"
            lastname="Carter Jr"
            position="C"
            image={Carter}
            icon={[]}/>

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