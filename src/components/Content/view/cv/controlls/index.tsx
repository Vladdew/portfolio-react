import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { switchLanguage } from "./languageSlice";
import { Tooltip } from "react-tooltip";
import download from "../../../../../icons/download.png";
import print from "../../../../../icons/print.png";
import en from "../../../../../icons/en.png";
import de from "../../../../../icons/de.png";
import cv from "../../../../../icons/cv.png";

import "./index.scss";

function Controlls(props: {
  onClick: (e: React.MouseEvent<Element>) => void;
  isCv: boolean | "1";
}) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState("de");
  const [menuFlag, setMenuFlag] = useState(false);

  const changeLanguage = (language: "en" | "de") => {
    setLang(language);
    i18n.changeLanguage(language);
    dispatch(switchLanguage(language));
  };

  function printPDF() {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = lang === "de" ? "pres_de.pdf" : "pres_en.pdf";
    document.body.appendChild(iframe);

    iframe.onload = function () {
      iframe.contentWindow!.focus();
      iframe.contentWindow!.print();
    };
  }

  function toggleMenu() {
    setMenuFlag(!menuFlag);
  }

  return (
    <>
      <div
        className={`controlls__tools-container ${
          menuFlag ? "controlls__tools-container-expanded" : ""
        }`}
      >
        {menuFlag && (
          <>
            <a
              data-tooltip-id="tooltip"
              data-tooltip-content={t("controlls.download")}
              title="Herunterladen"
              className="controlls__print controlls__iconWrap"
              href={lang === "de" ? "pres_de.pdf" : "pres_en.pdf"}
              //href={lang === "de" ? "/portfolio-react/pres_de_nofoto.pdf" : "/portfolio-react/pres_en_nofoto.pdf"}
              download={
                lang === "de" ? "presniakov_de.pdf" : "presniakov_en.pdf"
              }
            >
              <img alt="print" src={download} />
            </a>

            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={t("controlls.print")}
              title="Print to PDF"
              onClick={() => printPDF()}
              className="controlls__print controlls__iconWrap"
            >
              <img alt="print" src={print} />
            </span>
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={t("controlls.lingua")}
              title={lang === "en" ? "English" : "Deutsch"}
              className={`controlls__switchLang controlls__iconWrap ${
                lang === "en"
                  ? "controlls__switchLang-en"
                  : "controlls__switchLang-de"
              }`}
            >
              <img
                src={lang === "en" ? en : de}
                onClick={() => changeLanguage(lang === "en" ? "de" : "en")}
                alt={lang === "en" ? "change language" : "Sprache ändern"}
              />
            </span>

            <span
              data-tooltip-id="tooltip"
              data-tooltip-content={t("controlls.ll")}
              title={lang === "en" ? "Professional experience" : "Lebenslauf"}
              className="controlls__opencv"
            >
              <img src={cv} onClick={props.onClick} alt="Open cv" />
            </span>
          </>
        )}
        <span
          data-tooltip-id="tooltip"
          data-tooltip-delay-show={1000}
          onClick={() => toggleMenu()}
          className="controlls__menu-button-wrapper"
        >
          <span
            className={`controlls__menu-button ${
              menuFlag ? "controlls__menu-button-expanded" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      </div>
      <Tooltip place="bottom-end" id="tooltip" />
    </>
  );
}

export default Controlls;
