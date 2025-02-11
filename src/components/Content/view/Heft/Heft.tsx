import { useState } from "react";
import CvPDF from "./CvPDF";
import Hr1 from "../../../../img/hr1.png";
import { useTranslation } from "react-i18next";

const Heft = (props: { onClick: () => void; isCv: boolean | "1" }) => {
  const [showIntro1, setShowIntro1] = useState<boolean>(false);
  const [hideOverlay, setHideOverlay] = useState<boolean>(false);

  const { t } = useTranslation();

  const overlayVivibilityHandler = () => {
    if (props.isCv) {
      setHideOverlay(true);
    }

    if (!props.isCv) {
      setTimeout(() => {
        setHideOverlay(false);
      }, 500);
    }
  };

  const onOverlayClick = () => {
    overlayVivibilityHandler();
    if (props.isCv === "1") {
      setTimeout(() => {
        setShowIntro1(true);
      }, 1000);
    }
    props.onClick();
  };

  return (
    <div className="heftContainer">
      <div
        className={
          props.isCv === "1"
            ? "heft"
            : props.isCv
            ? "heft animate-out"
            : "heft animate-in"
        }
      >
        <CvPDF showIntro1={showIntro1} isCv={props.isCv} />

        <div className="image-part-bottom"></div>
        <button
          onClick={() => {
            overlayVivibilityHandler();
            props.onClick();
          }}
          className="heft__cls cls"
          type="button"
        >
          &#10006;
        </button>
      </div>
      <div
        onClick={onOverlayClick}
        className={`overlay ${hideOverlay ? "overlay-hidden" : ""}`}
      >
        <span className="overlay__span">{t("heft.over")}</span>
        <img className="overlay__img" src={Hr1} alt="" />
      </div>
    </div>
  );
};

export default Heft;
