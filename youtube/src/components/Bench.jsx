import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StartingFiveCard from "../functional-components/StartingFiveCard";
import Paolo from "../assets/paolo.jpg";
import UpArrow from "../icons/up-arrow.png"; 
import DownArrow from "../icons/down-arrow.png"; 
import DoubleArrow from "../icons/up-and-down-arrow.png";

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
                rating={90}
                color="var(--superstar)"
                firstname="Paolo"
                lastname="Banchero"
                position="PF"
                image={Paolo}
                icon={[UpArrow, DownArrow,]}/>

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

                <StartingFiveCard 
                rating={90}
                color="var(--superstar)"
                firstname="Paolo"
                lastname="Banchero"
                position="PF"
                image={Paolo}
                icon={[UpArrow, DownArrow]}/>

                
            </div>




                <div className="bench-wrapper">
            <div className="rest-of-bench-container">
                <h1 className="depth-title">Depth <span className="starting-five-note">(10% Of Final Grade)</span></h1>
    <div className="rest-of-bench">
        <div className="left-column">
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(95) }}>
                    <span className="bench-rating">95</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Victor Wembanyama</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={UpArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(85) }}>
                    <span className="bench-rating">85</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player B</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={UpArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(78) }}>
                    <span className="bench-rating">78</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player C</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={DownArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(72) }}>
                    <span className="bench-rating">72</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player D</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={DownArrow} />
                </div>
            </div>
        </div>

        <div className="right-column">

            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(68) }}>
                    <span className="bench-rating">70</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player E</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={DownArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(65) }}>
                    <span className="bench-rating">65</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player F</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={DownArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(90) }}>
                    <span className="bench-rating">90</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player G</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={UpArrow} />
                </div>
            </div>
            <div className="bench-cell">
                <div className="bench-rating-overall" style={{ backgroundColor: benchTable(80) }}>
                    <span className="bench-rating">80</span>
                    <span className="bench-overall">OVR</span>
                </div>
                <span className="bench-name">Player H</span>
                <div className="bench-icons">
                    <img className="bench-icon" src={UpArrow} />
                    <img className="bench-icon" src={UpArrow} />
                    <img className="bench-icon" src={DoubleArrow} />
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