import React, { useContext } from "react";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { contactInfo } from "../../portfolio";
import "./Contact.css";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.emailAddress}
              >
                {contactInfo.emailAddress}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
