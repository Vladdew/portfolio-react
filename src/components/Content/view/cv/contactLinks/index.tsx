import { Tooltip } from "react-tooltip";
import wa from "../../../../../icons/wa.png";
import telega from "../../../../../icons/telega.png";
import linkedin from "../../../../../icons/linkedin.png";
import cata from "../../../../../icons/cata.png";
import gh from "../../../../../icons/gh.png";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import "./index.scss";

const ContactLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      {isMobile ? "" : <Tooltip id="contact-tt" />}
      <div className="sections-wrap__contact-links">
        {[
          {
            img: wa,
            text: "tooltip.writeWA",
            link: "https://wa.me/380991177577",
          },
          {
            img: telega,
            text: "tooltip.writeTG",
            link: "tg://resolve?domain=vladdew",
          },
          {
            img: linkedin,
            text: "tooltip.look",
            link: "https://www.linkedin.com/in/vlad-presnyakov/",
          },
          { img: gh, text: "tooltip.gh", link: "https://github.com/Vladdew" },
          {
            img: cata,
            text: "tooltip.cw",
            link: "https://www.codewars.com/users/%3CVladok%2F%3E",
          },
        ].map(({ img, text, link }, index) => (
          <div key={index} className="sections-wrap__contact-link">
            <a
              data-tooltip-id="contact-tt"
              data-tooltip-content={t(text)}
              className="sections-wrap__contact-link-anchor"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-wrapper">
                <img src={img} alt="icon" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactLinks;
