import React, { useState } from "react";
import phone from "../../../../../icons/phone.png";
import done from "../../../../../icons/done.png";
import email from "../../../../../icons/email.png";
import home from "../../../../../icons/home.png";
import { Tooltip } from "react-tooltip";

import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import "./index.scss";

const Contacts = () => {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="sections-wrap">
      <h3>
        <span>{t("contacts.title")}</span>
      </h3>
      <p className="sections-wrap__accent-yellow" />
      <ul className="sections-wrap__contacts">
        <li
          className={
            flag2
              ? "sections-wrap__contactme copied-tel"
              : "sections-wrap__contactme"
          }
          onClick={() => {
            setFlag2(true);
            setTimeout(() => {
              setFlag2(false);
            }, 3000);
            navigator.clipboard.writeText("+49015156852622");
          }}
        >
          <span className="sections-wrap__icon-border sections-wrap__icon-border2">
            <img
              className={`sections-wrap__icon-img ${flag2 ? "rotate" : ""}`}
              src={flag2 ? done : phone}
              alt="icon-copy-phone number"
            />
          </span>
          {!flag2 ? (
            <a
              className="sections-wrap__call-link"
              href={isMobile ? "tel:+49015156852622" : "#!"}
            >
              <span
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
            setFlag(true);
            setTimeout(() => {
              setFlag(false);
            }, 3000);
            navigator.clipboard.writeText("presnyakov.vladyslav@gmail");
          }}
          title="Copy to clipboard"
          className={
            flag
              ? "sections-wrap__contactme copied"
              : "sections-wrap__contactme"
          }
        >
          <span className="sections-wrap__icon-border sections-wrap__icon-border1">
            <img
              className="sections-wrap__icon-img"
              src={flag ? done : email}
              alt="icon-copy-email"
            />
          </span>
          {!flag ? (
            <span
              data-tooltip-id="tooltip1"
              data-tooltip-content={isMobile ? "" : t("contacts.clickto")}
              className="sections-wrap__contact-title sections-wrap__contact-title-email"
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
      <Tooltip place="top" id="tooltip1" />
    </div>
  );
};

export default Contacts;
