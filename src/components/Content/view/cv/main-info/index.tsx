import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { switchLanguage } from "./languageSlice";

import print from "../../../../../icons/print.png";
import en from "../../../../../icons/en.png";
import de from "../../../../../icons/de.png";
import cv from "../../../../../icons/cv.png";

import "./index.scss";

function MainInfo(props: { onClick: () => void }) {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const [lang, setLang] = useState("de");

  const changeLanguage = (language: "en" | "de") => {
    setLang(language);
    i18n.changeLanguage(language);
    dispatch(switchLanguage(language));
  };

  return (
    <div id="main-info" className="main-info">
      <span className="main-info__tools-container">
        <img
          title="Open CV"
          onClick={() => props.onClick()}
          className="main-info__opencv"
          alt="Open CV"
          src={cv}
        />
        <img
          title="Print to PDF"
          onClick={() => window.print()}
          className="main-info__print"
          alt="item"
          src={print}
        />
        <img
          title={lang === "en" ? "English" : "Deutsch"}
          className={
            lang === "en"
              ? "main-info__switchLang main-info__switchLang-en"
              : "main-info__switchLang main-info__switchLang-de"
          }
          alt="item"
          src={lang === "en" ? en : de}
          onClick={() => changeLanguage(lang === "en" ? "de" : "en")}
        />
      </span>

      <h2 className="main-info__name">
        <br />
        Presniakov
        <br />
        Vlad
      </h2>
      <div className="main-info__status">{t("main-info.status")}</div>
      <div className="main-info__address">{t("main-info.address")}</div>
    </div>
  );
}

export default MainInfo;
