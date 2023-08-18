import React ,{useState} from "react";
import Typical from "react-typical";
import axios from "axios";
import {toast} from "react";
// import imgBack from '../../../src/images/mailz.jpeg';
import imgBack from '../../../src/images/googleemailbackground.jpg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./ContactMe.css";


function ContactMe(props){
   let fadeInScreenHandler = (screen) => {
        // if (screen.fadeInScreen !== props.id) return;
        // Animations.animations.fadeInScreen(props.id);
      };
    const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [banner,setBanner]=useState("");
    const [bool,setBool]=useState(false);

    const handleName=(e)=>{
        setName(e.target.value);
        console.log(name);
    };
    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(email);
    };
    const handleMessage=(e)=>{
        setMessage(e.target.value);
        console.log(message);
    };
   const submitForm=async(e)=>{
    e.preventDefault();
    try{

        let data={
            name,
            email,
            message,
        };
        setBool(true)
        const res =await axios.post('/contact',data)
        if(name.length ===0 ||email.length ===0 ||message.length ===0){
            setBool(false) 
            
            setBanner(res.data.msg);
            toast.error(res.data.msg);
            
        }
        else if(res.status===200){
            setBanner(res.data.message)
            toast.success(res.data.msg)
            setBool(false);

            setName(" ");
            setEmail(" ");
            setMessage(" ");
        }
        else{
            setBanner("")
            toast.success(res.data.msg)
            setBool(false);

            setName(" ");
            setEmail(" ");
            setMessage(" ");
        }


    }catch(error){
        console.log(error)
            }

    
   };

    return(<>
    <div className="main-container " id={props.id || ""}>
   
    <ScreenHeading title={'ContactMe'} subHeading={'Lets Keep In Touch'} />
      
      <div className="central-form">
        <div className="col">
        <h2 className="title">
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            
                            "Get In Touch 📩 ",1000,
                                                   
                          ]}
                        />
                    </h2>
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
        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here! </h4>
                <img src={imgBack} alt="image not found"/>
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label className="" htmlform="name" >Name</label>
                <input type="text" onChange={handleName} value={name}/>

                <label className="" htmlform="email" >email</label>
                <input type="email" onChange={handleEmail} value={email}/>

                <label className="" htmlform="" >Message</label>
                <textarea type="text" onChange={handleMessage} value={message}/>
                <div className="send-btn">
                    <button type="submit" > send<i class="bi bi-send-check"/>
                    {bool?(<b className='load'>
                        <img src={load1} alt='image not respond'/>
                    </b>):("")}
                    </button>
                </div>
            </form>
        </div>
      </div>



    </div>
    
    </>)
}
export default ContactMe;


