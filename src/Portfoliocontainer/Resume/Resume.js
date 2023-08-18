import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

function Resume(props){
const [selectBulletIndex,setSelectedBulletIndex]=useState(0);
const [carousalOfSetStyle,setCarousalOfSetStyle]=useState({});

let fadeInScreenHandler=(screen)=>{
    if(screen.fadeInScreen!== props.id) return;
    Animations.animations.fadeInScreen(props.id); 
};
const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const ResumeHeading =(props)=>{
    return(
    <div className="resume-heading">
        <div className="resume-main-heading">
            <div className="heading-bullet">
                <span><div className="dots"></div>{props.heading ? props.heading :' '}</span>
           {props.fromDate && props.toDate ? (
            <dov className="heading-date">
                {props.fromDate +"-" + props.toDate}
       </dov> 
          ):(
          <div></div>
            )}
    </div>
    <div className="content">
    <div className="resume-sub-heading">
        <span>{props.subHeading ? props.subHeading : ''}</span>
    </div>
    <div className="resume-heading-description">
        <span>{props.description ? props.description :''}</span>
    </div>
    {/* <div className="resume-sub-heading">
        <span>{props.link ? props.link : ''}</span>
    </div> */}
    </div>
    </div>
    </div>
    )
};
const resumeBullets=[

    {label:"Education",logosrc:"education.svg"},
    {label:"work history ",logosrc:"work-history.svg"},
    {label:"Programming Skills",logosrc:"programming-skills.svg"},
    {label:"Projects",logosrc:"projects.svg"},
    {label:"Interests",logosrc:"interests.svg"},
];

const programmingSkillsDetails=[
    {skill:"javascript",ratingPercentage:80},
{skill:"React JS",ratingPercentage:70},
{skill:"React Native",ratingPercentage:70},
{skill:"Express JS",ratingPercentage:60},
{skill:"Node JS",ratingPercentage:60},
{skill:"Mongo Db",ratingPercentage:40},
{skill:"Mongoose",ratingPercentage:40},
{skill:"Html",ratingPercentage:95},
{skill:"Bootstrap css",ratingPercentage:95},
{skill:"Tailwind css",ratingPercentage:85},
{skill:"core Python",ratingPercentage:80},
{skill:"Motoko",ratingPercentage:20},
{skill:"Solidity",ratingPercentage:60},
{skill:"C++",ratingPercentage:95},
{skill:"Competetive Programing",ratingPercentage:60},

];

const projectsDetails=[
    {
        title:"Personal Portfolio website",
        duration:{fromDate: "2023",toDate: "2024"},
        description:"A personal Portfolio website to showcase all my details and projects at one place",
        subHeading:"Technology used: React JS ,Bootstrap",
    },
    {
        title:"Movie App Website",
        duration:{fromDate: "2023",toDate: "2024"},
        description:"A website to show popular trending movies and you can add it to your favourites",
        subHeading:"Technology used: React JS ,tailwind,API ",
        // link:"<a href='https://lnkd.in/dhS-6GHW'>url Link</a>",
    },
    {
        title:"to do list",
        duration:{fromDate: "2023",toDate: "2024"},
        description:"A wesite to store and show my to do list which I can add and delete ",
        subHeading:"Technology used: React JS ,Bootstrap,Node JS",
       
    },
    {
        title:"Ecommerce Website",
        duration:{fromDate: "202",toDate: "2023"},
        description:"Online ecommerce website for showcasing products ,try to clone like urban monkey ",
        subHeading:"Technology used: React JS ,Bootstrap",
    },
   

];

const resumeDetails=[
    <div className="resume-screen-container" key="education">
        <ResumeHeading
        heading={"National Institute Of Technology,India"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2021"}
        toDate={"2025"}
        />
        <ResumeHeading
        heading={"HIGHER SECONDARY"}
        subHeading={"Jawahar Navodaya Vidyalaya,Nainital"}
        fromDate={"2019"}
        toDate={"2020"}
        />
        <ResumeHeading
        heading={"HIGH SCHOOL"}
        subHeading={"Jawahar Navodaya Vidyalaya,Nainital"}
        fromDate={"2017"}
        toDate={"2018"}
        />
    </div>,
    <div className="resume-screen-container" key="work-experience">
        <ResumeHeading
        heading={"BHARAT INTERN"}
        subHeading={"Full Stack Developer"}
        fromDate={"2023"}
        toDate={"2024"}
        />
       
        <div className="experience-description">
            <span className="resume-description-text">
                Completed internship
            </span>
        </div>
<div className="experience-description">
    <span className="resume-description-text">
    -Real time Vedio chat and messaging app.
       
    </span>
    <br/>
    <span className="resume-description-text">
    -Make few full stack websites using javascript,React Js,Bootstrap,html,css,nodeJS,WebRTC,Mongoose,MongoDb,Heruko,Netify.
    </span>
    
</div>,<ResumeHeading
        heading={"CODECASA"}
        subHeading={"Front end developer"}
        fromDate={"2023"}
        toDate={"2024"}
        />
       
        <div className="experience-description">
            <span className="resume-description-text">
                Completed internship
            </span>
        </div>
<div className="experience-description">
    <span className="resume-description-text">
    -To do list,Ecommmerce Website,Zero and Cross game,Analog clock,LandingPage.
       
    </span>
    
    <span className="resume-description-text">
    -Make few front end websites using javascript,React Js,Bootstrap,html,css
    </span>
    
</div></div>,


<div className="resume-screen-container programming-skills-container" key="programming-skills">
    {programmingSkillsDetails.map((skill,index)=>(
        <div className="skill-parent" key={index}>
            <div className="heading-bullet-start"></div>
        <span>{skill.skill}</span>
        <div className="skill-percentage">
            <div style={{width:skill.ratingPercentage + "%"}}
            className="active-percentage">

            </div>
        </div>
        </div>
    
    ))}
</div>
,
<div className="resume-screen-container" key="projects">
    {projectsDetails.map((projectsDetails,index)=>(
        <ResumeHeading 
        key={index}
        heading={projectsDetails.title}
        subHeading={projectsDetails.subHeading}
        description={projectsDetails.description}
        fromDate={projectsDetails.duration.fromDate}
        toDate={projectsDetails.duration.toDate}
        />

    ))}
</div>,

<div className="resume-screen-container" key="interest">
    <ResumeHeading
    heading='Sports'
    description='Playing outdoor games is one of my favourite thing'
    
    />
    <ResumeHeading
    heading='Coding'
    description='Fun to do challenging codes ' 

    />
    <ResumeHeading
    heading='trekking'
    description='Its fun as its boosts creativeness and satifying '

    />
</div>

    ,
];

const handleCarousal=(index)=>{
    let offsetHeight=360;
    let newCarousalOffset={
        style:{transform:"translateY("+index *  offsetHeight *-1 +"px)"  },

    };

    setCarousalOfSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);

};

const getBullets=()=>{  
    return resumeBullets.map((bullet,index)=>(
        <div  onClick={()=>handleCarousal(index)}
        className={index===selectBulletIndex ? "bullet selected-bullet ":"bullet"}
        key={index}
        >

<img className="bullet-logo" src={require (`../../assets/Resume/${bullet.logosrc}`)}
alt="B"/>
<span className="bullet-label">{bullet.label}</span>
        </div>
    ));
};

const getResumeScreen=()=>{
    return(
        <div className="resume-details-carousal"
        style={carousalOfSetStyle.style}
        
        >

{resumeDetails.map((resumeDetail)=>resumeDetail)}


        </div>
    );
};



return(<>
<div className="resume-container screen-container " id={props.id || ""}>
    <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'my formal bio details'} />
    <div className="resume-card">
        <div className="resume-bullets">
            <div className="bullet-container">
                <div className="bullet-icons"></div>
           <div className="bullets">{getBullets()}</div>
            </div>
        </div>
        <div className="resume-bullet-details">{getResumeScreen()}</div>
    </div>
    </div>


</div>


</>)

}
export default Resume;