import { useState } from "react";
import Heft from "../Content/view/Heft/Heft";
import Intro from "./view/cv/introSteps";
import { stepsMain } from "./view/cv/introSteps/steps";
import { stepsMain_mobile } from "./view/cv/introSteps/steps";
import CV from "./view/cv";
import Projects from "./view/projects";
import { isMobile } from "react-device-detect";

const Content = () => {
  const [isCV, setIsCV] = useState<boolean | "1">("1");

  const onClick = () => {
    setIsCV(!Boolean(isCV));
  };
  console.log("content");
  return (
    <>
      <Projects />
      <Heft isCv={isCV} onClick={onClick} />
      <CV isCv={isCV} onClick={onClick} />
      <Intro steps={isMobile ? stepsMain_mobile : stepsMain} />
    </>
  );
};

export default Content;
