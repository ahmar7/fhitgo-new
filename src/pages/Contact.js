import React from "react";

const Contact = () => {
  return (
    <>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }
          body {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            width: 100vw;
            background: #fff;
            border-radius: 6px;
            padding: 20px 60px 30px 40px;
          }
          .container .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .container .content .left-side {
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
            position: relative;
          }
          .content .left-side::before {
            content: "";
            position: absolute;
            height: 70%;
            width: 2px;
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
            background: #afafb6;
          }
          .content .left-side .details {
            margin: 14px;
            text-align: center;
          }
          .content .left-side .details i {
            font-size: 30px;
            color: #3e2093;
            margin-bottom: 10px;
          }
          .content .left-side .details .topic {
            font-size: 18px;
            font-weight: 500;
          }
          .content .left-side .details .text-one,
          .content .left-side .details .text-two {
            font-size: 14px;
            color: #afafb6;
          }
          .container .content .right-side {
            width: 100%;
            margin-left: 75px;
          }
          .content .right-side .topic-text {
            font-size: 23px;
            font-weight: 600;
            color: #3e2093;
          }
          .right-side .input-box {
            height: 50px;
            width: 100%;
            margin: 12px 0;
          }
          .right-side .input-box input,
          .right-side .input-box textarea {
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-size: 16px;
            background: #f0f1f8;
            border-radius: 6px;
            padding: 0 15px;
            resize: none;
          }
          .right-side .message-box {
            min-height: 110px;
          }
          .right-side .input-box textarea {
            padding-top: 6px;
          }
          .right-side .button {
            display: inline-block;
            margin-top: 12px;
          }
          .right-side .button input[type="button"] {
            color: #fff;
            font-size: 18px;
            outline: none;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            background: #3e2093;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .button input[type="button"]:hover {
            background: #5029bc;
          }

          @media (max-width: 950px) {
            .container {
              width: 100%;
              padding: 30px 40px 40px 35px;
            }
            .container .content .right-side {
              width: 100%%;
              margin-left: 55px;
            }
          }
          @media (max-width: 820px) {
            .container {
              margin: 40px 0;
              height: 100%;
            }
            .container .content {
              flex-direction: column-reverse;
            }
            .container .content .left-side {
              width: 100%;
              flex-direction: row;
              margin-top: 40px;
              justify-content: center;
              flex-wrap: wrap;
            }
            .container .content .left-side::before {
              display: none;
            }
            .container .content .right-side {
              width: 100%;
              margin-left: 0;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">30 N Gould St Ste R</div>
              <div className="text-two">B, Sheridan, WY 82801</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">0307-3818051</div>
              <div className="text-two">+923073818051</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">info@fhirgo.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work for me or any types of queries related to my
              tutorial, you can send me a message from here. It&apos;s my
              pleasure to help you.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box"></div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
