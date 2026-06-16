import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Paolo from "../assets/paolo.jpg"


function StartingFiveCard({color, rating, position, image, icon = [], firstname, lastname}) {
    return (
        <div className="starting-wrapper">

            <div className="card-container">
                <div className="top-card" style={{borderColor: color}}>
                    <img className="top-image" src={image}></img>
                    <div className="card-icons">
                        {icon.map((icons, index) => (
                        <img key={index} className="card-icon" src={icons} />
                        ))}
                    </div>
                    
                    <div className="bottom-card">
                        <div className="rating-and-overall" style={{backgroundColor: color}}>
                        <h3 className="rating">{rating}</h3>
                        <h3 className="overall">OVR</h3>
                        </div>
                    <div className="player-name">
                <h3 className="first-name">{firstname}</h3>
                <h3 className="last-name">{lastname}</h3>
                    </div>
                    <h3 className="position">{position}</h3>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default StartingFiveCard