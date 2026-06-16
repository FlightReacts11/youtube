import { useState } from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Bench from "./components/Bench";
import FrontOffice from "./components/FrontOffice";
import Offseason from "./components/Offseason";
import StartingFive from "./components/StartingFive";


function App() {
  return (
    <div>
    {/* <Offseason /> */}
    <StartingFive />
    </div>
  )
}

export default App
