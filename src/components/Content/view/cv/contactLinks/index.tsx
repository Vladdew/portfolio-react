import { Tooltip } from "react-tooltip";
import wa from "../../../../../icons/wa.png";
import telega from "../../../../../icons/telega.png";
import linkedin from "../../../../../icons/linkedin.png";
import cata from "../../../../../icons/cata.png";
import gh from "../../../../../icons/gh.png";
import { useTranslation } from "react-i18next";

import "./index.scss";

const ContactLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Tooltip id="contact-tt" />
      <div className="sections-wrap__contact-links">
        <div className="sections-wrap__contact-link">
          <a
            data-tooltip-id="contact-tt"
            data-tooltip-content={t("tooltip.write") + " WatsApp"}
            className="sections-wrap__telegram-link"
            href="https://wa.me/380991177577"
          >
            <img src={wa} alt="icon" />
          </a>
        </div>
        <div className="sections-wrap__contact-link">
          <a
            data-tooltip-id="contact-tt"
            data-tooltip-content={t("tooltip.write") + " Telegram"}
            className="sections-wrap__telegram-link"
            href="tg://resolve?domain=vladdew"
          >
            <img src={telega} alt="icon" />
          </a>
        </div>

        <a
          data-tooltip-id="contact-tt"
          data-tooltip-content={t("tooltip.look")}
          className="sections-wrap__contact-link"
          href="https://www.linkedin.com/in/vlad-presnyakov/"
        >
          <img src={linkedin} alt="icon" />
        </a>
        <a
          data-tooltip-id="contact-tt"
          data-tooltip-content={t("tooltip.gh")}
          className="sections-wrap__contact-link"
          href="https://github.com/Vladdew"
        >
          <img src={gh} alt="icon" />
        </a>
        <a
          data-tooltip-id="contact-tt"
          data-tooltip-content={t("tooltip.cw")}
          className="sections-wrap__contact-link"
          href="https://www.codewars.com/users/%3CVladok%2F%3E"
        >
          <img src={cata} alt="icon" />
        </a>
      </div>
    </>
  );
};

export default ContactLinks;
