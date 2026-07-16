import "../index.css";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import FrontOfficeFunctional from "../functional-components/FrontOfficeFunctional";
import OwnerImg from "../assets/owner.jpg";
import CoachImg from "../assets/coach.jpg";


function FrontOffice() {
    return (
    <div>
        
        <FrontOfficeFunctional 
  ownerImage={OwnerImg}
  ownerName="Owner Name"
  coachImage={CoachImg}
  coachName="Coach Name"
  scheme="Pace & Space"
  drafting="Dalton Knecht, Jared Vanderbilt, Myles Turner"
  spending="Into the tax"
  development="Poor"
  assets="Poor"
/>
    </div>
    )
}

export default FrontOffice