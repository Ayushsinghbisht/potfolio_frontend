import React from "react";
// import ReactDOM from 'react-dom';
import "./Profile.css";
import Typical from "react-typical"
import "../../../../src/index.css";
import ScrollService from "../../../Utilities/ScrollService";

function Profile(){
return(<>
<div className="profile-container">
    <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
                

                <div className=" colz-icon">
                <a href="https://www.linkedin.com/in/ayush-bisht-202b39233/">
                <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://myaccount.google.com/?pli=1" >
                     <i class="fa fa-google"></i>
                </a>
                <a href="https://www.instagram.com/ayushbisht111/">
                     <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/ayushbisht750083  ">
                     <i class="fa fa-facebook"></i>
                </a>
                <a href="https://github.com/Ayushsinghbisht?tab=repositories">
                    <i class="fa fa-github"></i>
                </a>
                </div>
            </div>
            <div className="profile-details-name">
                <span className="primary-text">
                    {""} Hello I am <span className="highlighted-text">Ayush Bisht</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                    {""}
                    <h1>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            
                            "computer Programmer 👩‍💻",1000,
                            
                            "Full Stack  developer 💻",1000,
                            
                        ]}
                        />
                    </h1>
                    < span className="profile-role-tagline">
                        Knack of building applications with front and back end operations
                        {" "}
                    </span>
                    </span>
                    <div className="profile-options">
                        <br></br>
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
        <div className="profile-picture"> 
                <div className="profile-picture-background"> </div>
            </div>
    </div>



</div>


</>)
}
export default Profile;