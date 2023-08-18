import React from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutMe.css";
import "../../../src/index.css";
function AboutMe(props){
let fadeInScreenHandler=(screen)=>{
    if(screen.fadeInScreen !==props.id) return;
    Animations.animations.fadeInScreen(props.id);
};
const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const SCREEN_CONSTANTS ={
description:" My skills span a range of languages and technologies, allowing me to tackle diverse challenges. Join me as I explore the ever-exciting world of code, one project at a time ,and comfortable around both front-end and back-end coding languages, development frameworks and third-party libraries.",
highlights: {
    bullets:[
        "Full Stack Developer",
        "Interactive Front End as per the design",
        "React and React Native",
        "Uses API",
        "Managing Database",
        "Computer Programmer",
        "Languages ,C++,Python",
        "coding at Leetcode , GFG",

    ],
    heading:"Here are few highlights:"
}


}

const renderHighlight=()=>{
    return (
        SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
            <div className="highlight" key={i}>
                <div className="hightlight-blob"></div>
            <span>{value}</span>
            </div>
        ))

    )
}

return(<>
<div className="about-me-container screen-container fade-in" id={props.id || ""}>
    <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'why to choose me'}/>
    <div className="about_me_card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
            
            <span className="about-me-discription"> {SCREEN_CONSTANTS.description}</span>
        <div className="about-me-highlight">
            <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight()}
        </div>
        <div className="about-me-options">
        <button className=" primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            
                            {""}
                            Hire me {""}
                        </button>
                        <a href="Resume-ayush-bisht.pdf" download="Resume-ayush-bisht.pdf">

                            <button className=" high highlighted-btn"> Get Resume</button>
                        </a>
        </div>
        </div>
    </div>
    </div>
</div>



</>)


}

export default AboutMe;