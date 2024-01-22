import React from "react";
// import Slider from "react-slick";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./MySlider.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import Large1 from "../assets/img/large.jpeg";
import Api from "../assets/img/api.jpeg";
import Egh from "../assets/img/egh.jpeg";
const Banner = () => {
  const slides = [
    {
      src: Api,
      caption: "Accessible Via API ",
      SubCaption: "Seamless Integration ",
    },
    {
      src: Egh,
      caption: "ELECTRONIC HEALTH RECORD ",
      SubCaption: "IN A MIN",
    },
    {
      src: Large1,
      caption: "Fhirgo",
      SubCaption:
        "We are Simplifying The complex FHIR Data in Human Readable Format. ",
    },
  ];
  return (
    <div className="banner-container">
      <div id="banner-wrapper">
        <AwesomeSlider
          bullets={false}
          mobileTouch={true}
          dragging={true}
          organicArrows={true}
          animation="fadeInAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="container nou relative"
              data-src={slide.src}
            >
              {index === 0 && (
                <div className="captions-top">
                  <div className="s-caption slide-1">{slide.caption}</div>
                  <div className=" slide-sub-1 s-caption">
                    {slide.SubCaption}
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="captions-top">
                  <div className="s-caption slide-2">{slide.caption}</div>
                  <div className=" slide-sub-2 s-caption">
                    {slide.SubCaption}
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="captions-top2 ">
                  <div className="s-caption slide-1">{slide.caption}</div>
                  <br />
                  <div className=" slide-sub-1 s-caption">
                    {slide.SubCaption}
                  </div>
                  <div className=" decor slide-sub-1 s-caption">
                    Out of the Box Solutions
                  </div>
                </div>
              )}
            </div>
          ))}
        </AwesomeSlider>
        {/* END REVOLUTION SLIDER */}{" "}
      </div>
    </div>
  );
};

export default Banner;
