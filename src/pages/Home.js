import about from "../assets/img/about.png";
import arrow from "../assets/img/arrow.svg";
import React, { useEffect } from "react";
import Review1 from "../assets/img/review1.jpg";
import Review2 from "../assets/img/review2.jpg";
import Slider from "react-slick";
import Slidr from "../components/Slidr";
import serviceData from "../components/serviceData";
import resourceData from "../components/resourceData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../components/ReviewSlider";
import { NavLink } from "react-router-dom";
const Home = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const review = [
    {
      text: "I am very pleased working with FHIRGo. FHIRGo team is extremely efficient and knowledgeable in HL7 FHIR Standards. Thank you so much for being so efficient and making my life easier!!",
      author: "Elizabeth",
      image: Review1,
    },
    {
      text: "This is an organization with a lot of experience in Medical billing and credentialing. Their responsiveness and attention to detail are impressive. They provide accurate results in minimum time. Highly recommended.",
      author: "Claire",
      image: Review2,
    },
  ];

  return (
    <>
      <div className="overflow-hidden index overflow-x-hidden">
        <div className="overflow-hidden w-[100vw] overflow-hidden">
          <Slidr />
        </div>
        <h2 className="overflow-hidden text-center py-10">About Us </h2>
        <section className="overflow-hidden about md:flex py-4 md:px-10">
          <div className="overflow-hidden md:w-[70vw] p-8">
            <h5 className="overflow-hidden text-[var(--bg)]">
              Discover how we can help your organization thrive.
            </h5>
            <p>
              FHIRGo is a leading healthcare Digital technology transformation
              company specializing in HL7 Fast Healthcare Interoperability
              Resources...
            </p>
            <NavLink to="/About">
              <button>Read More</button>
            </NavLink>
          </div>
          <div className="overflow-hidden md:w-[50vw] w-[100vw] p-2">
            <img
              className="overflow-hidden md:w-[100vw] w-[100vw]"
              src={about}
              alt="about"
              height={100}
              width={100}
            />
          </div>
        </section>

        <h2 className="overflow-hidden text-center py-10">Services</h2>
        <section className="overflow-hidden services flex flex-wrap">
          {serviceData.map((e) => (
            <div
              className="overflow-hidden card h-[300px] md:w-1/3 w-[320px] p-4 mx-auto"
              key={e.title}
            >
              <NavLink to={e.link}>
                <h5 className="overflow-hidden p-4 pb-8 text-[var(--bg)] flex items-center text-lg justify-between">
                  <span>{e.title}</span>{" "}
                  <span>
                    <img src={arrow} alt="img" height={20} width={20} />
                  </span>
                </h5>
              </NavLink>
              <div>{e.content.substr(0, 100)}...</div>
            </div>
          ))}
        </section>

        <h2 className="overflow-hidden text-center py-10">Resources</h2>
        <section className="overflow-hidden resource reds">
          {resourceData.map((e) => (
            <div key={e.title} className="blog-card card mt-4 p-3">
              <img
                className="card-img-top rounded"
                src={e.image}
                alt="about image"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                  {e.title}
                </h5>
                <p className="card-text" style={{ fontSize: "1rem" }}>
                  {e.content.substr(0, 150)}...
                </p>
                <NavLink to={e.link} className="btn  ">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
          ))}
        </section>

        {/* <Review /> */}
        <section className="overflow-hidden review bg-[var(--bg)] w-[100vw] mx-auto">
          <Slider {...setting} className="overflow-hidden overflow-hidden">
            {review.map((e) => (
              <div
                key={e.author}
                className="overflow-hidden p-4 flex justify-between items-center text-white w-[100vw]"
              >
                <section className="overflow-hidden review bg-[var(--bg)] w-screen mx-auto">
                  <Slider {...setting} className="overflow-hidden">
                    {review.map((e) => (
                      <div
                        key={e.author}
                        className="overflow-hidden flex justify-between items-center text-white w-screen px-4"
                      >
                        <div className="overflow-hidden w-[50%] md:w-[30%] mx-auto">
                          <img
                            className="overflow-hidden w-[100%] rounded-full"
                            src={e.image}
                            alt="review"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="overflow-hidden w-[100%] mt-4 md:px-20">
                          <p>{e.text}</p>
                          <h5>{e.author}</h5>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </section>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
};

export default Home;
