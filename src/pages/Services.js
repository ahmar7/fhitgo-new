import s1 from "../assets/img/s1.jpeg";
import s2 from "../assets/img/s2.jpeg";
import s3 from "../assets/img/s3.jpeg";
import s4 from "../assets/img/s4.jpeg";
import s5 from "../assets/img/s5.jpeg";
import s6 from "../assets/img/s6.jpeg";
import React, { useState } from "react";
// import './Services.css'
import "./rad.css";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  const [isMouseInside, setMouseInside] = useState(false);
  const [isMouseInside2, setMouseInside2] = useState(false);
  const [isMouseInside3, setMouseInside3] = useState(false);
  const [isMouseInside4, setMouseInside4] = useState(false);
  const [isMouseInside5, setMouseInside5] = useState(false);
  const [isMouseInside6, setMouseInside6] = useState(false);

  const toggleClass = () => {
    // setMouseInside(!isMouseInside);
  };

  const toggleClass2 = () => {
    // setMouseInside2(!isMouseInside2);
  };
  const toggleClass3 = () => {
    // setMouseInside3(!isMouseInside3);
  };
  const toggleClass4 = () => {
    // setMouseInside4(!isMouseInside4);
  };
  const toggleClass5 = () => {
    // setMouseInside5(!isMouseInside5);
  };
  const toggleClass6 = () => {
    // setMouseInside6(!isMouseInside6);
  };
  return (
    <div
      className="rad-card-grid rad-spacing-vertical-md"
      id="redesign-tile"
      data-cmp-data-layer='{"redesign-tile":{"@type":"cio-sites/components/rad/blocks/tilegridv2","analytics-module-name":"tilegridv2-1","analytics-template-zone":"block-tilegrid"}}'
    >
      <div className="rad-card-grid__cards-viewport">
        <div
          className="rad-card-grid__cards-container"
          data-template-zone="block-tilegrid"
        >
          <div
            onMouseEnter={toggleClass}
            onMouseLeave={toggleClass}
            className={`rad-content-grid-card rad-content-grid-card--perspective${
              isMouseInside ? " rad-content-grid-card--open" : ""
            }`}
            id="perspective-a0f7c7b650"
            data-cta-title="Expand"
            data-card-title="Accenture Pulse of Change"
            data-cta-link="/in-en/about/company/pulse-of-change"
            data-content-type="perspective"
            data-analytics-asset-id="card-a0f7c7b650"
            data-cs-override-id="card-a0f7c7b650"
            data-analytics-asset-pos={1}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="true"
              aria-controls="perspective-a0f7c7b650"
              aria-label="Perspective: Accenture Pulse of Change"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <Link
              to="FHIRHealthExchange"
              target="_self"
              className="rad-content-grid-card__cta-cover"
              aria-label="pulse-of-change Expand"
              data-analytics-asset-id="card-a0f7c7b650"
              data-cs-override-id="card-a0f7c7b650"
              data-analytics-asset-pos={1}
              data-cmp-data-layer='{"tile-grid-card-1":{"xdm:linkURL":"/in-en/about/company/pulse-of-change","analytics-link-name":"Accenture Pulse of Change","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"perspective card button-1","analytics-template-zone":"block-tilegrid"}}'
              tabIndex={-1}
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__label">
              FHIR Health Exchange
            </div>
            <div className="rad-content-grid-card__title">
              Accenture Pulse of Change
            </div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content">
                <div className="rad-content-grid-card__half-image">
                  <div className="image radimage">
                    <div
                      data-cmp-lazy
                      data-cmp-lazythreshold={0}
                      data-cmp-dmimage
                      data-asset="/content/dam/accenture/final/accenture-com/imagery-4/Accenture-pulse-of-change-skim_Glance_Skim_640x452px.svg"
                      data-asset-id="ed476e43-9089-4c97-9028-a57e06701553"
                      data-title="Accenture Pulse of Change "
                      id="image-"
                      data-cmp-data-layer='{"image-":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture Pulse of Change ","analytics-module-name":"radimage-1"}}'
                      className="cmp-image "
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <img
                        className="cmp-image__image"
                        itemProp="contentUrl"
                        data-cmp-hook-image="image"
                        alt="Accenture Pulse of Change "
                        src={s1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    Charge entry into a provide management system or software is
                    the first step of the revenue cycle and often most
                    underestimated as well.
                  </p>
                </div>
                <Link
                  to="/FHIRHealthExchange"
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Accenture Pulse of Change"
                  data-cs-override-id="card-cta-a0f7c7b650"
                  data-analytics-asset-id="card-a0f7c7b650"
                  data-analytics-asset-pos={1}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-1":{"xdm:linkURL":"/in-en/about/company/pulse-of-change","analytics-link-name":"Expand:Accenture Pulse of Change","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"perspective card button-1","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={toggleClass2}
            onMouseLeave={toggleClass2}
            className={`rad-content-grid-card rad-content-grid-card--research-report-dark${
              isMouseInside2 ? " rad-content-grid-card--open" : ""
            }`}
            id="research-report-2c74138996"
            data-cta-title="Expand"
            data-card-title="Reinvention in the age of generative AI"
            data-cta-link="/in-en/insights/consulting/total-enterprise-reinvention"
            data-content-type="researchReport"
            data-analytics-asset-id="card-2c74138996"
            data-cs-override-id="card-2c74138996"
            data-analytics-asset-pos={2}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="false"
              aria-controls="research-report-2c74138996"
              aria-label="Research Report: Reinvention in the age of generative AI"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <Link
              to="/FHIRAnalytics "
              target="_self"
              className="rad-content-grid-card__cta-cover"
              aria-label="Reinvention in the age of AI Expand"
              data-barba-transition
              data-analytics-asset-id="card-2c74138996"
              data-cs-override-id="card-2c74138996"
              data-analytics-asset-pos={2}
              data-cmp-data-layer='{"tile-grid-card-2":{"xdm:linkURL":"/in-en/insights/consulting/total-enterprise-reinvention","analytics-link-name":"Reinvention in the age of generative AI","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-2","analytics-template-zone":"block-tilegrid"}}'
              tabIndex={-1}
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__full-image">
              <div className="image radimage">
                <div
                  data-cmp-lazy
                  data-cmp-lazythreshold={0}
                  data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Total-Enterprise-Reinvention-Glance-Skim-2024-600x848%3Arad-card-full?ts=1705037979121&fit=constrain&dpr=off"
                  data-cmp-dmimage
                  data-cmp-smartcroprendition="rad-card-full"
                  data-asset="/content/dam/accenture/final/accenture-com/imagery-5/Accenture-Total-Enterprise-Reinvention-Glance-Skim-2024-600x848.jpg"
                  data-asset-id="48ab5b76-a60e-42c1-b926-4379213455e0"
                  id="image-6"
                  data-cmp-data-layer='{"image-6":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-1"}}'
                  className="cmp-image "
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <img
                    className="cmp-image__image"
                    itemProp="contentUrl"
                    data-cmp-hook-image="image"
                    alt
                    src={s2}
                  />
                </div>
              </div>
            </div>
            <div className="rad-content-grid-card__label"> FHIR Analytics</div>
            <div className="rad-content-grid-card__title">Utility to allow</div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content" />
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    Utility to allow to convert FHIR data into your existing
                    data lake to make data analytics simple.
                  </p>
                </div>
                <Link
                  to="/FHIRAnalytics "
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Reinvention in the age of generative AI"
                  data-barba-transition
                  data-cs-override-id="card-cta-2c74138996"
                  data-analytics-asset-id="card-2c74138996"
                  data-analytics-asset-pos={2}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-2":{"xdm:linkURL":"/in-en/insights/consulting/total-enterprise-reinvention","analytics-link-name":"Expand:Reinvention in the age of generative AI","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-2","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={toggleClass3}
            onMouseLeave={toggleClass3}
            className={`rad-content-grid-card rad-content-grid-card--case-study${
              isMouseInside3 ? " rad-content-grid-card--open" : ""
            }`}
            id="case-study-7de0bd9db6"
            data-cta-title="Expand"
            data-card-title="Banking on BBVA's bold new future"
            data-cta-link="/in-en/case-studies/banking/bbva-banking-bold-new-future"
            data-content-type="caseStudy"
            data-analytics-asset-id="card-7de0bd9db6"
            data-cs-override-id="card-7de0bd9db6"
            data-analytics-asset-pos={3}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="false"
              aria-controls="case-study-7de0bd9db6"
              aria-label="Case Study: Banking on BBVA's bold new future"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <Link
              to="/DataMigrationServices"
              target="_self"
              className="rad-content-grid-card__cta-cover"
              aria-label="Banking on BBVA's bold new future Expand"
              data-barba-transition
              data-analytics-asset-id="card-7de0bd9db6"
              data-cs-override-id="card-7de0bd9db6"
              data-analytics-asset-pos={3}
              data-cmp-data-layer='{"tile-grid-card-3":{"xdm:linkURL":"/in-en/case-studies/banking/bbva-banking-bold-new-future","analytics-link-name":"Banking on BBVA&apos;s bold new future","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"case study card button-3","analytics-template-zone":"block-tilegrid"}}'
              tabIndex={-1}
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__label">
              Data Migration Services
            </div>
            <div className="rad-content-grid-card__title">
              Mapping proprietary
            </div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content">
                <div className="rad-content-grid-card__half-image">
                  <div className="image radimage">
                    <div
                      data-cmp-lazy
                      data-cmp-lazythreshold={0}
                      data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-BBVA-Glance-Skim-640x452%3Arad-card-half?ts=1700716450615&fit=constrain&dpr=off"
                      data-cmp-dmimage
                      data-cmp-smartcroprendition="rad-card-half"
                      data-asset="/content/dam/accenture/final/accenture-com/imagery-4/Accenture-BBVA-Glance-Skim-640x452.jpeg"
                      data-asset-id="81617d46-8f4e-4482-a420-2d2babb7ab8b"
                      id="image-03"
                      data-cmp-data-layer='{"image-03":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-1"}}'
                      className="cmp-image "
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <img
                        className="cmp-image__image"
                        itemProp="contentUrl"
                        data-cmp-hook-image="image"
                        alt
                        src={s3}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    Mapping proprietary data structures to the FHIR data model
                    and building the mapping engine
                  </p>
                </div>
                <Link
                  to="/DataMigrationServices"
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Banking on BBVA's bold new future"
                  data-barba-transition
                  data-cs-override-id="card-cta-7de0bd9db6"
                  data-analytics-asset-id="card-7de0bd9db6"
                  data-analytics-asset-pos={3}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-3":{"xdm:linkURL":"/in-en/case-studies/banking/bbva-banking-bold-new-future","analytics-link-name":"Expand:Banking on BBVA&apos;s bold new future","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"case study card button-3","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={toggleClass4}
            onMouseLeave={toggleClass4}
            className={`rad-content-grid-card rad-content-grid-card--research-report-dark${
              isMouseInside4 ? " rad-content-grid-card--open" : ""
            }`}
            id="research-report-87cebad8b2"
            data-cta-title="Expand"
            data-card-title="Work, workforce, workers: Reinvented in the age of generative AI"
            data-cta-link="/in-en/insights/consulting/gen-ai-talent"
            data-content-type="researchReport"
            data-analytics-asset-id="card-87cebad8b2"
            data-cs-override-id="card-87cebad8b2"
            data-analytics-asset-pos={4}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="false"
              aria-controls="research-report-87cebad8b2"
              aria-label="Research Report: Work, workforce, workers: Reinvented in the age of generative AI"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <Link
              to="/ManageServices"
              target="_self"
              className="rad-content-grid-card__cta-cover"
              aria-label="Work, workforce, workers: Reinvented in the age of generative AI Expand"
              data-barba-transition
              data-analytics-asset-id="card-87cebad8b2"
              data-cs-override-id="card-87cebad8b2"
              data-analytics-asset-pos={4}
              data-cmp-data-layer='{"tile-grid-card-4":{"xdm:linkURL":"/in-en/insights/consulting/gen-ai-talent","analytics-link-name":"Work, workforce, workers: Reinvented in the age of generative AI","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-4","analytics-template-zone":"block-tilegrid"}}'
              tabIndex={-1}
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__full-image">
              <div className="image radimage">
                <div
                  data-cmp-lazy
                  data-cmp-lazythreshold={0}
                  data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-GenAI-Talent-ITL-Glance-Image-v2-640x904%3Arad-card-full?ts=1705118666932&fit=constrain&dpr=off"
                  data-cmp-dmimage
                  data-cmp-smartcroprendition="rad-card-full"
                  data-asset="/content/dam/accenture/final/accenture-com/imagery-5/Accenture-GenAI-Talent-ITL-Glance-Image-v2-640x904.jpg"
                  data-asset-id="b1bdd76e-d8f5-4db4-bacf-dcf0a78010dc"
                  id="image-68d"
                  data-cmp-data-layer='{"image-68d":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-1"}}'
                  className="cmp-image "
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <img
                    className="cmp-image__image"
                    itemProp="contentUrl"
                    data-cmp-hook-image="image"
                    alt
                    src={s4}
                  />
                </div>
              </div>
            </div>
            <div className="rad-content-grid-card__label">Manage Services</div>
            <div className="rad-content-grid-card__title">
              System Configuration
            </div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content" />
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    System Configuration and Integration utilities. Ongoing
                    Operation and Support. Robust Security, Auto Scaling and
                    Disaster Recovery.
                  </p>
                </div>
                <Link
                  to="/ManageServices"
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Work, workforce, workers: Reinvented in the age of generative AI"
                  data-barba-transition
                  data-cs-override-id="card-cta-87cebad8b2"
                  data-analytics-asset-id="card-87cebad8b2"
                  data-analytics-asset-pos={4}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-4":{"xdm:linkURL":"/in-en/insights/consulting/gen-ai-talent","analytics-link-name":"Expand:Work, workforce, workers: Reinvented in the age of generative AI","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-4","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={toggleClass5}
            onMouseLeave={toggleClass5}
            className={`rad-content-grid-card rad-content-grid-card--research-report-dark${
              isMouseInside5 ? " rad-content-grid-card--open" : ""
            }`}
            id="research-report-a811300401"
            data-cta-title="Expand"
            data-card-title="Accenture Life Trends 2024"
            data-cta-link="/in-en/insights/song/accenture-life-trends"
            data-content-type="researchReport"
            data-analytics-asset-id="card-a811300401"
            data-cs-override-id="card-a811300401"
            data-analytics-asset-pos={5}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="false"
              aria-controls="research-report-a811300401"
              aria-label="Research Report: Accenture Life Trends 2024"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <Link
              to="/TechnicalConsulting"
              target="_self"
              className="rad-content-grid-card__cta-cover"
              aria-label="accenture-life-trends-2024 Expand"
              data-barba-transition
              data-analytics-asset-id="card-a811300401"
              data-cs-override-id="card-a811300401"
              data-analytics-asset-pos={5}
              data-cmp-data-layer='{"tile-grid-card-5":{"xdm:linkURL":"/in-en/insights/song/accenture-life-trends","analytics-link-name":"Accenture Life Trends 2024","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-5","analytics-template-zone":"block-tilegrid"}}'
              tabIndex={-1}
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__full-image">
              <div className="image radimage">
                <div
                  data-cmp-lazy
                  data-cmp-lazythreshold={0}
                  data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904%3Arad-card-full?ts=1700184505522&fit=constrain&dpr=off"
                  data-cmp-dmimage
                  data-cmp-smartcroprendition="rad-card-full"
                  data-asset="/content/dam/accenture/final/accenture-com/imagery-3/Accenture-LifeTrends-Glance-image-640x904.jpg"
                  data-asset-id="8ce3143d-4ca8-432e-b107-64d7f167b7ce"
                  id="image-baad"
                  data-cmp-data-layer='{"image-baad":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-1"}}'
                  className="cmp-image "
                  itemScope
                  itemType="http://schema.org/ImageObject"
                >
                  <img
                    className="cmp-image__image"
                    itemProp="contentUrl"
                    data-cmp-hook-image="image"
                    alt
                    src={s5}
                  />
                </div>
              </div>
            </div>
            <div className="rad-content-grid-card__label">
              {" "}
              Technical Consulting
            </div>
            <div className="rad-content-grid-card__title">Top Class SME</div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content" />
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    Top Class SME to to develop your own health data platform,
                    the FHIR experts.
                  </p>
                </div>
                <Link
                  to="/TechnicalConsulting"
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Accenture Life Trends 2024"
                  data-barba-transition
                  data-cs-override-id="card-cta-a811300401"
                  data-analytics-asset-id="card-a811300401"
                  data-analytics-asset-pos={5}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-5":{"xdm:linkURL":"/in-en/insights/song/accenture-life-trends","analytics-link-name":"Expand:Accenture Life Trends 2024","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"research report card button-5","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={toggleClass6}
            onMouseLeave={toggleClass6}
            className={`rad-content-grid-card rad-content-grid-card--perspective${
              isMouseInside6 ? " rad-content-grid-card--open" : ""
            }`}
            id="perspective-0bfc00b310"
            data-cta-title="Expand"
            data-card-title="Reinvention, by the numbers"
            data-cta-link="/in-en/insights/strategy/reinvention-by-numbers"
            data-content-type="perspective"
            data-analytics-asset-id="card-0bfc00b310"
            data-cs-override-id="card-0bfc00b310"
            data-analytics-asset-pos={6}
          >
            {/* DEV NOTE: aria-label text is copied from __label and __title below */}
            <button
              className="rad-content-grid-card__front-toggle"
              aria-expanded="false"
              aria-controls="perspective-0bfc00b310"
              aria-label="Perspective: Reinvention, by the numbers"
            />
            {/* DEV NOTE: aria-label text is copied from __content and rad-button--tertiary-dynamic below */}
            <a
              target="_self"
              href="#"
              className="rad-content-grid-card__cta-cover"
              tabIndex={-1}
              aria-label="Reinvention, by the numbers Expand"
              data-barba-transition
              data-analytics-asset-id="card-0bfc00b310"
              data-cs-override-id="card-0bfc00b310"
              data-analytics-asset-pos={6}
              data-cmp-data-layer='{"tile-grid-card-6":{"xdm:linkURL":"/in-en/insights/strategy/reinvention-by-numbers","analytics-link-name":"Reinvention, by the numbers","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"perspective card button-6","analytics-template-zone":"block-tilegrid"}}'
            />
            <button
              disabled
              className="rad-icon-button rad-content-grid-card__close-button"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="rad-icon-button__text">Close</div>
              <div className="rad-icon rad-icon__close" aria-hidden="true" />
            </button>
            <div className="rad-content-grid-card__label">
              Clinical Data integration
            </div>
            <div className="rad-content-grid-card__title">
              Reinvention, by the numbers
            </div>
            <div className="rad-content-grid-card__sliding-content">
              <div className="rad-content-grid-card__front-content">
                <div className="rad-content-grid-card__half-image">
                  <div className="image radimage">
                    <div
                      data-cmp-lazy
                      data-cmp-lazythreshold={0}
                      data-cmp-src="https://dynamicmedia.accenture.com/is/content/accenture/Reinvention_in_numbers_glance?ts=1705030227136&$none$&fit=constrain&dpr=off"
                      data-cmp-dmimage
                      data-asset="/content/dam/accenture/final/accenture-com/imagery-5/Reinvention_in_numbers_glance.svg"
                      data-asset-id="9f232b5b-b1fc-4a63-8384-b4950adc9988"
                      id="image-28e8f"
                      data-cmp-data-layer='{"image-28e8f":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-1"}}'
                      className="cmp-image "
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <img
                        className="cmp-image__image"
                        itemProp="contentUrl"
                        data-cmp-hook-image="image"
                        alt
                        src={s6}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rad-content-grid-card__back-content">
                <div className="rad-content-grid-card__content">
                  <p>
                    Our expert team will optimizing your entire revenue cycle,
                    we will off-load you from your most time-consuming tasks and
                    ensure that your medical practice is running at maximum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rad-button rad-button--ghost"
                  tabIndex={-1}
                  target="_self"
                  aria-label="Expand: Reinvention, by the numbers"
                  data-barba-transition
                  data-cs-override-id="card-cta-0bfc00b310"
                  data-analytics-asset-id="card-0bfc00b310"
                  data-analytics-asset-pos={6}
                  data-cmp-data-layer='{"tile-grid-card-cta-button-6":{"xdm:linkURL":"/in-en/insights/strategy/reinvention-by-numbers","analytics-link-name":"Expand:Reinvention, by the numbers","analytics-link-type": "engagement","analytics-engagement":"true","analytics-module-name":"perspective card button-6","analytics-template-zone":"block-tilegrid"}}'
                >
                  <div className="rad-button__text">Expand</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rad-card-grid__slider-container">
        <label
          htmlFor="carousel-slider-id"
          className="rad__range-input-slider-label"
        >
          Carousel slider control
        </label>
        <input
          id="carousel-slider-id"
          className="rad__range-input-slider-for-carousel rad-card-grid__slider"
          max={500}
          min={0}
          name="carousel slider"
          defaultValue={1}
          type="range"
        />
      </div>
    </div>
  );
};
export default Services;
