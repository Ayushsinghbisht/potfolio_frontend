import React from "react";
import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import pratham from '../../../src/img/Testimonial/lady.png';
import archit from '../../../src/img/Testimonial/man.png';
import abhinav from '../../../src/img/Testimonial/mike.png';
import mayank from '../../../src/img/Testimonial/mayank.png';

function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop:true,
        margin:25,
        nav:true,
        animateIn:"bounceInRight",
        animateOut:"bounceOutRight",
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            1000:{
                items:3,
                nav:true,
            },
            768:{
                items:2,
                nav:true,
            },
            480:{
                items:1,
                nav:true,
            },
            0:{
                items:1,
                nav:true,
            },
        }
    }



  return (
    <>
      <div className="try ">
        <ScreenHeading title={"Testimonial"} subHeading={"Inspiring words by friends"} />
        <div className="testimonial-section" id={props.id || ""}>
          <div className="container">
            <div className="row ">
              <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
                <div className="col-large-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p> <i className="fa fa-quote-left" />We had given Hackethon together it was such a neck to neck coding competitions <i className="fa fa-quote-right" /></p>
                      <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                        <img src={pratham} alt="no connection"></img>
                        <h5>Pratham Gupta</h5>
                        <p>Coding Community</p>
                    </div>
                  </div>
                </div>
                <div className="col-large-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p> <i className="fa fa-quote-left" />Made new relation with Colleges like IIT and Gec in field of sports<i className="fa fa-quote-right" /></p>
                      <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                        <img src={mayank} alt="no connection"></img>
                        <h5>Mayank Desai</h5>
                        <p>Campus Ambassdor</p>
                    </div>
                  </div>
                </div>
                <div className="col-large-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p> <i className="fa fa-quote-left" />Had done awaesome projects one is  Radio receiver and second is laser light manufacture <i className="fa fa-quote-right" /></p>
                      <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                        <img src={archit} alt="no connection"></img>
                        <h5>Archit</h5>
                        <p>Spectra President</p>
                    </div>
                  </div>
                </div>
                <div className="col-large-12">
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p> <i className="fa fa-quote-left" /> A responsive Movie app based website was our project using front end and API <i className="fa fa-quote-right" /></p>
                      <ul className="stars list-unstyled">
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                        <li>
                            <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="client-info">
                        <img src={abhinav} alt="no connection"></img>
                        <h5>Abhinav Chandra</h5>
                        <p>Meta President</p>
                    </div>
                  </div>
                </div>
              
              </OwlCarousel>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
