import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ text, author, image }) => (
  <div className="vc_row wpb_row vc_inner row">
    <div className="vc_column_container col-md-6">
      <div className="wpb_wrapper vc_column-inner">
        <div className="vc_icon_element vc_icon_element-outer quote-icon m-b-sm vc_icon_element-align-center vc_icon_element-have-style">
          <div className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-have-style-inner vc_icon_element-size-sm vc_icon_element-style-rounded-outline vc_icon_element-outline vc_icon_element-background-color-white">
            <span className="vc_icon_element-icon entypo-icon entypo-icon-quote" />
          </div>
        </div>
        <div className="porto-testimonial wpb_content_element ">
          <div className="testimonial testimonial-style-2 testimonial-with-quotes testimonial-light">
            <blockquote className="testimonial-carousel white">
              <p>{text}</p>
            </blockquote>
            <div className="testimonial-author">
              <p>
                <strong>{author}</strong>
                <span />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="vc_column_container col-md-6">
      <div className="wpb_wrapper vc_column-inner">
        <div className="wpb_single_image wpb_content_element vc_align_left wpb_animate_when_almost_visible wpb_bounceInRight bounceInRight wpb_start_animation animated">
          <div className="wpb_wrapper">
            <div className="vc_single_image-wrapper vc_box_circle  vc_box_border_grey">
              <img
                decoding="async"
                className="vc_single_image-img "
                src={image}
                alt="Testimonial Author"
                title="Testimonial Author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Review = () => {
  const testimonials = [
    {
      text: "I am very pleased working with FHIRGo. FHIRGo team is extremely efficient and knowledgeable in HL7 FHIR Standards. Thank you so much for being so efficient and making my life easier!!",
      author: "Elizabeth",
      image:
        "https://fhirgo.com/wp-content/uploads/2022/05/doctor-at-work-scaled-1707x1707.jpg",
    },
    {
      text: "This is an organization with a lot of experience in Medical billing and credentialing. Their responsiveness and attention to detail are impressive. They provide accurate results in minimum time. Highly recommended.",
      author: "Claire",
      image:
        "https://fhirgo.com/wp-content/uploads/2022/05/doctors-infectionist-research-and-covid-concept-satisfied-young-asian-female-doctor-receive-good-res-scaled-1707x1707.jpg",
    },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="vc_row wpb_row section section-secondary m-t-none m-b-none section-no-borders">
      <div className="porto-wrap-container container">
        <div className="row">
          <div className="vc_column_container col-md-2">
            <div className="wpb_wrapper vc_column-inner" />
          </div>
          <div className="vc_column_container col-md-8">
            <div className="wpb_wrapper vc_column-inner">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="vc_column_container col-md-2">
            <div className="wpb_wrapper vc_column-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
