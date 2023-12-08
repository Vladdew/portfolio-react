import React, { useState } from "react";
import CvPDF from "./CvPDF";

const Heft = () => {
  const [isUnfolded, unfoldPDF] = useState(false);
  const cv = "/cv_de.pdf";
  //console.log("Heft", cv);
  const stop = e => {
    e.stopPropagation();
  };

  const onClick = e => {
    stop(e);
    unfoldPDF(false);
  };

  return (
    <div
      onClick={() => unfoldPDF(true)}
      className={"heft " + (isUnfolded ? "unfolded-heft" : "")}
    >
      <span className="heft__cl-title cl-title">Cover letter</span>
      <CvPDF props={cv} />
      <button onClick={e => onClick(e)} className="heft__cls cls" type="button">
        &#10006;
      </button>
    </div>
  );
};

export default Heft;
