import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FrontOfficeFunctional from "../functional-components/FrontOfficeFunctional";
import OwnerImg from "../assets/owner.webp";
import CoachImg from "../assets/coach.jpg";


function FrontOffice() {
    return (
    <div>
        
        <FrontOfficeFunctional 
  ownerImage={OwnerImg}
  ownerName="Jeff Weltman"
  coachImage={CoachImg}
  coachName="Sean Sweeney"
  scheme="Varied Defense & 5 Out Offense / 4 Out 1 In"
  drafting="Anthony Black (2023 R1 P18), Jalen Suggs (2021 R1 P5), Franz Wagner (2021 R1 P8)"
  spending="Into The Aprons"
  development="Good"
  assets="Bad"
/>
    </div>
    )
}

export default FrontOffice