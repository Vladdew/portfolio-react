import { useTranslation } from "react-i18next";
import "./index.scss";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="sections-wrap sections-wrap-about">
      <h3>
        <span>{t("about.title")}</span>
      </h3>
      <p className="sections-wrap__accent-black" />
      <div className="aboutMe__ul-container">
        <ul className="aboutMe">
          <li>
            <span className="aboutMe__heading">{t("about.birth")}:</span>
            <br />
            <span className="aboutMe__information">
              30.06.1986 in Luhansk/Ukraine
            </span>
          </li>
          <li>
            <span className="aboutMe__heading">{t("about.nation")}:</span>
            <br />
            <span className="aboutMe__information">Ukraine</span>
          </li>

          <li>
            <span className="aboutMe__heading">{t("about.lingua")}:</span>
            <br />
            <span className="aboutMe__information">{t("about.lingua2")}</span>
            <br />
            <span className="aboutMe__information aboutMe__information-absolute">
              {t("about.lingua3")}
            </span>
          </li>
          <li>
            <span className="aboutMe__heading">{t("about.education")}:</span>
            <br />
            <span className="aboutMe__information">
              {t("about.education2")}
            </span>
          </li>
        </ul>
        <ul className="aboutMe aboutMe2">
          <li>
            <span className="aboutMe__heading">{t("about.ae")}:</span>
            <br />
            <span className="aboutMe__information">{t("about.ae2")}</span>
          </li>
          <li>
            <span className="aboutMe__heading">{t("about.married")}:</span>
            <br />
            <span className="aboutMe__information">{t("about.married2")}</span>
          </li>
          <li>
            <span className="aboutMe__heading">{t("about.mob")}:</span>
            <br />
            <span className="aboutMe__information">{t("about.mob2")}</span>
          </li>
          <li>
            <span className="aboutMe__heading">{t("about.weiter")}:</span>
            <br />
            <span className="aboutMe__information">{t("about.weiter2")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
