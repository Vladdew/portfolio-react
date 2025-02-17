import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { switchLanguage } from "./languageSlice";
import { Tooltip } from "react-tooltip";
import { isMobile } from "react-device-detect";
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
      {!isMobile && <Tooltip id="tooltip" data-tooltip-place="top" />}
      <div
        className={`controlls__tools-container ${
          menuFlag ? "controlls__tools-container-expanded" : ""
        }`}
      >
        {menuFlag && (
          <>
            {[
              {
                img: download,
                text: t("controlls.download"),
                title: isMobile ? "Herunterladen" : "",
                link: lang === "de" ? "pres_de.pdf" : "pres_en.pdf",
                download:
                  lang === "de" ? "presniakov_de.pdf" : "presniakov_en.pdf",
                className: "controlls__download",
              },
              {
                img: print,
                text: t("controlls.print"),
                onClick: printPDF,
                className: "controlls__print",
              },
              {
                img: lang === "en" ? en : de,
                text: t("controlls.lingua"),
                onClick: () => changeLanguage(lang === "en" ? "de" : "en"),
                className: "controlls__switchLang",
              },
              {
                img: cv,
                text: t("controlls.ll"),
                onClick: props.onClick,
                className: "controlls__opencv",
              },
            ].map(
              (
                { img, text, title, link, download, className, onClick },
                index
              ) => (
                <span
                  key={index}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={text}
                  title={title}
                  className={`controlls__iconWrap ${className}`}
                  onClick={onClick}
                  style={{ position: "relative" }} // Фиксация положения Tooltip
                >
                  {link ? (
                    <a href={link} download={download}>
                      <img src={img} alt={title} />
                    </a>
                  ) : (
                    <img src={img} alt={title} />
                  )}
                </span>
              )
            )}
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
    </>
  );
}

export default Controlls;
