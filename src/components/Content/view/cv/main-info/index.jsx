import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { switchLanguage } from "./languageSlice";

import print from "../../../../../icons/print.png";
import en from "../../../../../icons/en.png";
import de from "../../../../../icons/de.png";
import "./index.scss";

function MainInfo() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const [lang, setLang] = useState("de");

  const changeLanguage = language => {
    setLang(language);
    i18n.changeLanguage(language);
    dispatch(switchLanguage(language));
  };

  return (
    <div id="main-info" className="main-info">
      <span className="main-info__switchLang-container">
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
        <img
          title="Print to PDF"
          onClick={() => window.print()}
          className="main-info__print"
          alt="item"
          src={print}
        />
      </span>

      <h2 className="main-info__name">
        <br />
        Vladyslav
      </h2>
      <div className="main-info__status">{t("main-info.status")}</div>
      <div className="main-info__address">{t("main-info.address")}</div>
    </div>
  );
}

export default MainInfo;
