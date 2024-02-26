import React, { useEffect, useState } from "react";
import CvPDF from "./CvPDF";

const Heft = (props: { onClick: () => void; isCv: boolean | "1" }) => {
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
      <CvPDF />
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
