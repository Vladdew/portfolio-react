import { useState } from "react";
import CvPDF from "./CvPDF";

const Heft = (props: { onClick: () => void; isCv: boolean | "1" }) => {
  const [showFakeImgFlag, SetShowFakeImgFlag] = useState(false);

  return (
    <div
      className={
        props.isCv === "1"
          ? "heft"
          : props.isCv
          ? "heft animate-out"
          : "heft animate-in"
      }
      onMouseEnter={() => {
        SetShowFakeImgFlag(true);
      }}
      onMouseLeave={() => {
        SetShowFakeImgFlag(false);
      }}
    >
      <CvPDF isCv={props.isCv} flag={showFakeImgFlag} />
      <div
        onClick={() => {
          props.onClick();
        }}
        className="overlay"
      ></div>
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
