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
import Services from "./Services";
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
        {/* <h2 className="overflow-hidden text-center py-10">About Us </h2> */}
        <div className="container py-10">
          <div className="text-center">
            <h1>About Us</h1>
          </div>
          <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
            <p className="lead">
              Discover how we can help your organization thrive.
            </p>
          </div>
        </div>
        <section className="overflow-hidden about md:flex py-4 md:px-10">
          <div className="overflow-hidden fhr md:w-[70vw] p-8">
            <h5 className="overflow-hidden txtaj text-[var(--bg)]">
              Discover how we can help your organization thrive.
            </h5>
            <p className="mt-5 fhei">
              FHIRGo is a leading healthcare Digital technology transformation
              company specializing in HL7 Fast Healthcare Interoperability
              Resources
            </p>
            <p className="fhei">
              We are a leading healthcare industry SME and modernized several
              applications according to HL7 industry standards. You can rely on
              FHIRGo for all your healthcare-related IT services.
            </p>
            <p className="fhei">
              We started our journey by leveraging our healthcare industry
              experience and solving complex healthcare data and visibility
              issues. As we gained experience over several years, we blended the
              solutions with the latest emerging technologies like Python,
              Apache Spark, Snowflake, Hadoop, Databricks, Apigee, Node JS, and
              many more.
            </p>

            <NavLink
              style={{ backgroundColor: "#f56e41" }}
              className="btn btn-success "
              to="/About"
            >
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
        <div className="overflow-hidden about md:flex py-4 justify-center md:px-10">
          <Services />
        </div>
        {/* <h2 className="overflow-hidden text-center py-10">Services</h2>
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
        </section> */}

        {/* <h2 className="overflow-hidden text-center py-10">Resources</h2> */}
        <div className="container py-10">
          <div className="text-center">
            <h1>Resources</h1>
          </div>
          <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
            <p className="lead">List of our features resources</p>
          </div>
        </div>
        {/* <section className="overflow-hidden resource reds">
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
        </section> */}
        <div className="vc_row wpb_row vc_inner row overflow-hidden  overflow-hidden about md:flex py-4 px-10 reds">
          <div className="vc_column_container ">
            <div className="wpb_wrapper vc_column-inner">
              <div className="porto-image-frame  thumb-info-custom">
                <span className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom thumb-info-side-image thumb-info-no-zoom thumb-info-centered-icons thumb-info-no-borders thumb-info-box-shadow">
                  <a
                    href="http://sw-themes.com/porto_dummy%2br%20/Fresources/prepare-for-visit/"
                    title
                    target="_self"
                  >
                    <span className="thumb-info-side-image-wrapper">
                      <img
                        decoding="async"
                        alt
                        src="//fhirgo.com/wp-content/uploads/2023/01/R2-scaled-e1674865396160.jpeg"
                        className="img-responsive"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption">
                    <span className="thumb-info-caption-text">
                      <h5 className="font-weight-semibold m-b-xs">
                        Patient Access Application Programming Interface{" "}
                      </h5>
                      <p className="data-tct">
                        In order to better facilitate coordination of care, and
                        support movement toward value-based payment models, we
                        are proposing to require impacted payers to build and
                        maintain a Provider Access API to share patient data
                        with in-network providers with whom the patient has a
                        treatment relationship. We are proposing that they make
                        patient claims and encounter data (excluding cost
                        information), data elements identified in the United
                        States Core Data for Interoperability (USCDI) version 1,
                        and prior authorization requests and decisions available
                        to in-network providers beginning January 1, 2026.
                      </p>
                      <p />
                      <p>
                        <a
                          style={{ backgroundColor: "#f56e41" }}
                          className="btn btn-success "
                          href="https://www.cms.gov/newsroom/fact-sheets/advancing-interoperability-and-improving-prior-authorization-processes-proposed-rule-cms-0057-p-fact"
                        >
                          <button>Read More</button>
                        </a>
                      </p>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="vc_column_container ">
            <div className="wpb_wrapper vc_column-inner">
              <div className="porto-image-frame  thumb-info-custom">
                <span className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom thumb-info-side-image thumb-info-no-zoom thumb-info-centered-icons thumb-info-no-borders thumb-info-box-shadow">
                  <a
                    href="http://sw-themes.com/porto_dummy/resources/surgery-proccess/"
                    title
                    target="_self"
                  >
                    <span className="thumb-info-side-image-wrapper">
                      <img
                        decoding="async"
                        alt
                        src="//fhirgo.com/wp-content/uploads/2023/01/R3-scaled-e1674866156721.jpeg"
                        className="img-responsive"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption">
                    <span className="thumb-info-caption-text">
                      <h5 className="font-weight-semibold m-b-xs">
                        {" "}
                        Policies and Technology for Interoperability and Burden
                        Reduction
                      </h5>
                      <p className="data-tct">
                        The CMS Advancing Interoperability and Improving Prior
                        Authorization Processes proposed rule (CMS-0057-P) is
                        now available in the Federal Register and open for
                        public comment. This proposed rule builds on the
                        policies finalized in the CMS Interoperability and
                        Patient Access final rule (CMS-9115-F) published May
                        2020 and policies introduced in the CMS Interoperability
                        proposed rule (CMS-9123-P) published in December 2020,
                        which we are withdrawing in this proposed rule. The
                        newly proposed rule considers stakeholder feedback and
                        includes Medicare Advantage plans.
                      </p>
                      <p />
                      <p>
                        <a
                          style={{ backgroundColor: "#f56e41" }}
                          className="btn btn-success "
                          href="https://www.cms.gov/newsroom/fact-sheets/advancing-interoperability-and-improving-prior-authorization-processes-proposed-rule-cms-0057-p-fact"
                        >
                          <button>Read More</button>
                        </a>
                      </p>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="vc_column_container ">
            <div className="wpb_wrapper vc_column-inner">
              <div className="porto-image-frame  thumb-info-custom">
                <span className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom thumb-info-side-image thumb-info-no-zoom thumb-info-centered-icons thumb-info-no-borders thumb-info-box-shadow">
                  <a
                    href="http://sw-themes.com/porto_dummy/resources/patients/"
                    title
                    target="_self"
                  >
                    <span className="thumb-info-side-image-wrapper">
                      <img
                        decoding="async"
                        alt
                        src="//fhirgo.com/wp-content/uploads/2023/01/R1-scaled-e1674866376978.jpeg"
                        className="img-responsive"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption">
                    <span className="thumb-info-caption-text">
                      <h5 className="font-weight-semibold m-b-xs">
                        {" "}
                        Payer-to-Payer Data Exchange
                      </h5>
                      <p className="data-tct">
                        In December 2021, CMS announced enforcement discretion
                        for this policy until identified implementation
                        challenges could be addressed in future rulemaking;
                        <p />
                        <p>
                          In an effort to ensure patients’ data can follow them
                          throughout their healthcare journey, we are proposing
                          to require that payers exchange patient data when a
                          patient changes health plans with the patient’s
                          permission. Those data include claims and encounter
                          data (excluding cost information), data elements
                          identified in the USCDI version 1, and prior
                          authorization requests and decisions. For all impacted
                          payers, we are considering a proposal that would
                          require this exchange only if the patient opts into
                          data sharing.
                        </p>
                      </p>
                      <p>
                        <a
                          style={{ backgroundColor: "#f56e41" }}
                          className="btn btn-success "
                          href="https://www.cms.gov/newsroom/fact-sheets/advancing-interoperability-and-improving-prior-authorization-processes-proposed-rule-cms-0057-p-fact"
                        >
                          <button>Read More</button>
                        </a>
                      </p>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

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
