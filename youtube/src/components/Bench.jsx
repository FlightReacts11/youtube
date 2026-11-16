import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StartingFiveCard from "../functional-components/StartingFiveCard";
import Paolo from "../assets/paolo.jpg";


import Black from "../assets/black.jpg";
import Tristan from "../assets/tristan.jpg";
import Cain from "../assets/cain.jpg";
import Vooch from "../assets/vooch.webp";




import UpArrow from "../icons/up-arrow.png";
import DownArrow from "../icons/down-arrow.png";
import DoubleArrow from "../icons/up-and-down-arrow.png";
import Eyes from "../icons/eyes.png";
import Flame from "../icons/flame.png";
import Clock from "../icons/clock.png";
import Cross from "../icons/cross.png"

function Bench() {

    const benchTable = function(rating) {
        if (rating >= 94) {
            return "var(--superstar)";

        } else if (rating >= 88) {
            return "var(--franchise-player)";

        } else if (rating >= 83) {
            return "var(--all-star)";

        } else if (rating >= 79) {
            return "var(--quality-starter)";

        } else if (rating >= 75) {
            return "var(--starting-calibre)";

        } else if (rating >= 70) {
            return "var(--rotational-player)";

        } else if (rating >= 67) {
            return "var(--deep-rotation)";

        } else {
            return "var(--EOB)"
        }
    }

    return (

        <div className="starting-wrapper">
            <h1 className="starting-five">Key Rotation <span className="starting-five-note">(25% Of Final Grade)</span></h1>

            <div className="bench-grid">
                <StartingFiveCard 
                rating={77}
                color="var(--starting-calibre)"
                firstname="Anthony"
                lastname="Black"
                position="PG/SG"
                image={Black}
                icon={[UpArrow]}/>

                <StartingFiveCard 
                rating={71}
                color="var(--rotational-player)"
                firstname="Jamal"
                lastname="Cain"
                position="SF"
                image={Cain}
                icon={[Eyes]}/>

                <StartingFiveCard 
                rating={72}
                color="var(--rotational-player)"
                firstname="Tristan"
                lastname="da Silva"
                position="SF/PF"
                image={Tristan}
                icon={[UpArrow]}/>

                <StartingFiveCard 
                rating={75}
                color="var(--starting-calibre)"
                firstname="Nikola"
                lastname="Vucevic"
                position="C"
                image={Vooch}
                icon={[DownArrow]}/>



                
            </div>




                <div className="bench-wrapper">
            <div className="rest-of-bench-container">
                <h1 className="depth-title">Depth <span className="starting-five-note">(10% Of Final Grade)</span></h1>
    <div className="rest-of-bench">
        <div className="left-column">
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(67) }}>
                    <span className="bench-rating">67</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Jevon Carter (G)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(69) }}>
                    <span className="bench-rating">69</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Noah Penda (F)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={Eyes} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(73) }}>
                    <span className="bench-rating">73</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Goga Bitadze (C)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(67) }}>
                    <span className="bench-rating">69</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Jase Richardson (G)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={UpArrow} />
                </div>
            </div>
        </div>

        <div className="right-column">

            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(69) }}>
                    <span className="bench-rating">67</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Izaiyah Nelson (C)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(65) }}>
                    <span className="bench-rating">66</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Alex Morales (G)</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(68) }}>
                    <span className="bench-rating">68</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Johnathan Isaac (C) </span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(65) }}>
                    <span className="bench-rating">65</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Colin Castleton (C) </span>
                <div className="bench-icons">
                    <img className="bench-icon" src={""} />
                   
                </div>
            </div>
        </div>
    </div>
</div>







            
            
            <div className="bench-table-container">
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
        </div>
        </div>
    )
}

export default Bench