import React, { useState, useEffect, useRef } from "react";
import phone from "../../../../../icons/phone.png";
import done from "../../../../../icons/done.png";
import email from "../../../../../icons/email.png";
import home from "../../../../../icons/home.png";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import "./index.scss";

const Contacts = () => {
  const [copyEmail, setCopyEmail] = useState(false);
  const [copyTel, setCopyTel] = useState(false);
  const [isHoveringTel, setIsHoveringTel] = useState(false);
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);

  const { t } = useTranslation();

  const telRef = useRef<HTMLSpanElement | null>(null);
  const emailRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const telElement = telRef.current;
    const emailElement = emailRef.current;

    if (!telElement || !emailElement) return; // Проверяем, что ссылки не null

    const handleMouseEnterTel = () => setIsHoveringTel(true);
    const handleMouseLeaveTel = () => setIsHoveringTel(false);
    const handleMouseEnterEmail = () => setIsHoveringEmail(true);
    const handleMouseLeaveEmail = () => setIsHoveringEmail(false);

    telElement.addEventListener("mouseenter", handleMouseEnterTel);
    telElement.addEventListener("mouseleave", handleMouseLeaveTel);
    emailElement.addEventListener("mouseenter", handleMouseEnterEmail);
    emailElement.addEventListener("mouseleave", handleMouseLeaveEmail);

    return () => {
      telElement.removeEventListener("mouseenter", handleMouseEnterTel);
      telElement.removeEventListener("mouseleave", handleMouseLeaveTel);
      emailElement.removeEventListener("mouseenter", handleMouseEnterEmail);
      emailElement.removeEventListener("mouseleave", handleMouseLeaveEmail);
    };
  }, []);

  return (
    <div className="sections-wrap">
      <h3>
        <span>{t("contacts.title")}</span>
      </h3>
      <p className="sections-wrap__accent-yellow" />
      <ul className="sections-wrap__contacts">
        <li
          className={
            isMobile && copyTel
              ? "sections-wrap__contactme copied-tel"
              : "sections-wrap__contactme"
          }
          onClick={() => {
            if (!isMobile) {
              setCopyTel(true);
              setTimeout(() => setCopyTel(false), 3000);
              navigator.clipboard.writeText("+49015156852622");
            }
          }}
        >
          <span
            className={`sections-wrap__icon-border sections-wrap__icon-border2 ${
              copyTel ? "sections-wrap__icon-border2-green" : ""
            }`}
          >
            <img
              className={`sections-wrap__icon-img ${copyTel ? "rotate" : ""}`}
              src={copyTel ? done : phone}
              alt="icon-copy-phone number"
            />
          </span>
          {!copyTel ? (
            <a
              className="sections-wrap__call-link"
              href={isMobile ? "tel:+49015156852622" : "#!"}
            >
              <span
                ref={telRef}
                data-tooltip-id="tooltip1"
                data-tooltip-content={isMobile ? "" : t("contacts.clickto")}
                className="sections-wrap__contact-title"
              >
                <span className="sections-wrap__contact-styles">
                  {t("contacts.phone")}
                </span>
                <br />
                +49 (0151) 5685 2622
              </span>
            </a>
          ) : (
            <a className="sections-wrap__call-link" href={"#!"}>
              <span className="sections-wrap__contact-title sections-wrap__contact-title-email-copied">
                {t("contacts.tel-copied")}
              </span>
            </a>
          )}
        </li>

        <li
          onClick={() => {
            setCopyEmail(true);
            setTimeout(() => setCopyEmail(false), 3000);
            navigator.clipboard.writeText("presnyakov.vladyslav@gmail");
          }}
          className={
            copyEmail
              ? "sections-wrap__contactme copied"
              : "sections-wrap__contactme"
          }
        >
          <span
            className={`sections-wrap__icon-border sections-wrap__icon-border1 ${
              copyEmail ? "sections-wrap__icon-border1-green" : ""
            }`}
          >
            <img
              className={`sections-wrap__icon-img ${copyEmail ? "rotate" : ""}`}
              src={copyEmail ? done : email}
              alt="icon-copy-email"
            />
          </span>
          {!copyEmail ? (
            <span
              ref={emailRef}
              className="sections-wrap__contact-title sections-wrap__contact-title-email"
              data-tooltip-id="tooltip2"
              data-tooltip-content={isMobile ? "" : t("contacts.clickto")}
            >
              <span className="sections-wrap__contact-styles">Email</span>
              <br />
              presnyakov.vladyslav <br />
              @gmail.com
            </span>
          ) : (
            <span className="sections-wrap__contact-title sections-wrap__contact-title-email-copied">
              {t("contacts.email-copied")}
            </span>
          )}
        </li>

        <li className="sections-wrap__contactme sections-wrap__contactme3">
          <span className="sections-wrap__icon-border sections-wrap__icon-border4">
            <img src={home} alt="contact" />
          </span>
          <a
            className="sections-wrap__home-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/%D0%93%D0%BE%D1%81%D0%BB%D0%B0%D1%80/@51.9249204,10.3434856,11z/data=!3m1!4b1!4m6!3m5!1s0x47a5409a8340441b:0xa340eceac807c2b!8m2!3d51.9059531!4d10.4289963!16zL20vMDE0cV82"
          >
            <span className="sections-wrap__contact-title">
              <span className="sections-wrap__contact-styles">
                {t("contacts.address-title")}
              </span>
              <br />
              38678, Clausthal / De
            </span>
          </a>
        </li>
      </ul>
      {isMobile ? "" : isHoveringTel && <Tooltip place="top" id="tooltip1" />}
      {isMobile ? "" : isHoveringEmail && <Tooltip place="top" id="tooltip2" />}
    </div>
  );
};

export default Contacts;
