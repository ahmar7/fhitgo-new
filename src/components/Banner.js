import React from "react";
import "./Fhirgo.css";
import { Link } from "react-router-dom";

const FhirbaseBanner = () => {
  return (
    <div className="fbanner">
      <div className="hero-banner parbase section">
        <div style={{ background: "", position: "relative" }}>
          <div className="row full-banner banner banner-right-center mk-four mk-font-light   ">
            <div className="shim dark_cta" />
            <div className="container mk-hero-l2 mk-custom-hero">
              <div className="col-sm-12">
                <div>
                  <div className="column_control parbase section">
                    <div style={{ backgroundImage: 'url("")' }}>
                      <div className="body_container">
                        <div className="row  ">
                          <div className="col_control ">
                            <div>
                              <div className="   rmpadlt">
                                <div>
                                  <div className="text parbase section">
                                    <div>
                                      <div className="inner-text-div  ">
                                        <h1>FHIRBASE </h1>
                                        <h3 className="uppercase">
                                          FHIR Server with different RDBMS
                                        </h3>
                                        <h3 className="uppercase">
                                          Supports API mechanism
                                        </h3>
                                        <h3 className="uppercase">
                                          Integrate with different API Gateways{" "}
                                        </h3>
                                        <h5>create your future with us</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" parbase section">
                                    {/* Button Component Sightly */}
                                    <div className="top ">
                                      <div className="mk-two-btn center-block txt-left">
                                        <Link
                                          data-player="Gsbl36Q4L"
                                          target="_self"
                                          to="/login"
                                        >
                                          <button className="orange-btn   ">
                                            <div className="btn-title">
                                              {" "}
                                              Request Demo
                                            </div>
                                          </button>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6  col  rmpadrt">
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FhirbaseBanner;
