import { useState, useEffect, memo } from "react";
import CvPDF from "./CvPDF";
import Hr1 from "../../../../img/hr1.png";
import { useTranslation } from "react-i18next";

type Props = {
  onClick: () => void;
  isCv: boolean | "1";
};

const Heft = (props: Props) => {
  const [showIntro1, setShowIntro1] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!props.isCv) {
      setShowOverlay(false);
      return;
    }
    if (props.isCv === "1") {
      setShowOverlay(true);
      return;
    }
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 700);
    return () => clearTimeout(timer);
  }, [props.isCv]);

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
            props.onClick();
          }}
          className="heft__cls cls"
          type="button"
        >
          &#10006;
        </button>
      </div>
      <div
        onClick={() => {
          props.onClick();
          if (props.isCv === "1") {
            setTimeout(() => {
              setShowIntro1(true);
            }, 1000);
          }
        }}
        className={`overlay ${showOverlay ? "" : "overlay-hidden"}`}
      >
        <span className="overlay__span">{t("heft.over")}</span>
        <img className="overlay__img" src={Hr1} alt="" />
      </div>
    </div>
  );
};

export default memo(Heft);
