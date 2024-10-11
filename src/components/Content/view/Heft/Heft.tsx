import { useState } from "react";
import CvPDF from "./CvPDF";
import Hr1 from "../../../../img/hr1.png";

const Heft = (props: { onClick: () => void; isCv: boolean | "1" }) => {
  const [showIntro1, setShowIntro1] = useState<boolean>(false);

  return (
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
      <div
        onClick={() => {
          if (props.isCv === "1") {
            setTimeout(() => {
              setShowIntro1(true);
            }, 1500);
          }
          props.onClick();
        }}
        className="overlay"
      >
        <span className="heft__span">Anschreiben</span>
        <img src={Hr1} alt="" />
      </div>
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
  );
};

export default Heft;
