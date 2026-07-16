import { useState } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Bench from "./components/Bench";
import FrontOffice from "./components/FrontOffice";
import Offseason from "./components/Offseason";
import StartingFive from "./components/StartingFive";
import PlayerSummary from "./components/PlayerSummary";
import Summary from "./components/Summary";
import BackgroundVideo from "./assets/background-video.mp4";

function App() {
  return (
    <div>
      <div className="video-wrapper">
      <video
        className="background-video"
        src={BackgroundVideo}
        autoPlay
        loop
        muted
      />
      
      </div>

        <Offseason />
       {/* <FrontOffice /> */}
      {/* <StartingFive /> */}
      {/* <PlayerSummary /> */ }
      {/* <Bench /> */}
      {/* <Summary /> */}
    </div>
  )
}

export default App