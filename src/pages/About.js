import about from "../assets/img/about.png";
import React from "react";
const About = () => {
  return (
    <>
      <h1 className="overflow-hidden text-center py-10">About Us </h1>{" "}
      <div className="overflow-hidden md:flex py-8 ">
        <div className="overflow-hidden md:w-[50vw] w-[100vw] p-2 py-10">
          <img
            className="overflow-hidden w-[100vw]"
            src={about}
            alt="about image"
            height={100}
            width={100}
          />
        </div>
        <div className="overflow-hidden md:w-[70vw] py-10 md:py-0 px-6 md:px-20">
          <h2 className="overflow-hidden text-[var(--bg)]">
            Discover how we can help your organization thrive.
          </h2>
          <p>
            FHIRGo excels in healthcare digital tech, specializing in HL7 FHIR
            standards for seamless info exchange. With deep industry expertise,
            we tackle healthcare challenges using modern tech like Python,
            Apache Spark, Snowflake, and more. Our journey began with solving
            complex data issues, evolving into a fusion of experience and
            cutting-edge solutions. Trust FHIRGo for comprehensive healthcare IT
            services and a commitment to innovation.
          </p>
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default About;
