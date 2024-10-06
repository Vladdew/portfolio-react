import React, { useState } from "react";
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
            <span className="aboutMe__heading">Geburstdatum:</span>
            <br />
            <span className="aboutMe__information">
              30.06.1986 in Luhansk/Ukraine
            </span>
          </li>
          <li>
            <span className="aboutMe__heading">Staatsangehörigkeit:</span>
            <br />
            <span className="aboutMe__information">Ukraine</span>
          </li>
          <li>
            <span className="aboutMe__heading">Familienstand:</span>
            <br />
            <span className="aboutMe__information">
              Verheiratet(1 Sohn 4 Jahre alt)
            </span>
          </li>
          <li>
            <span className="aboutMe__heading">Studium:</span>
            <br />
            <span className="aboutMe__information">
              Master in Computerwissenschaften, Forschungsingenieur
            </span>
          </li>
        </ul>
        <ul className="aboutMe aboutMe2">
          <li>
            <span className="aboutMe__heading">Arbeitserlaubnis:</span>
            <br />
            <span className="aboutMe__information">Vorhanden</span>
          </li>
          <li>
            <span className="aboutMe__heading">Sprachen:</span>
            <br />
            <span className="aboutMe__information">
              De B2, En B1. Ru, Ua- Muttersprachen
            </span>
          </li>
          <li>
            <span className="aboutMe__heading">Mobilitat:</span>
            <br />
            <span className="aboutMe__information">Eigener PKW vorhanden</span>
          </li>
          <li>
            <span className="aboutMe__heading">Weiterbildung:</span>
            <br />
            <span className="aboutMe__information">React Entwickler</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
