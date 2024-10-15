import { useState } from "react";
import Heft from "../Content/view/Heft/Heft";
import Intro from "./view/cv/introSteps";
import { stepsMain } from "./view/cv/introSteps/steps";
import CV from "./view/cv";
import Projects from "./view/projects";

const Content = () => {
  const [isCV, setIsCV] = useState<boolean | "1">("1");

  const onClick = () => {
    setIsCV(!Boolean(isCV));
  };
  console.log("Render");
  return (
    <>
      <Projects />
      <Heft isCv={isCV} onClick={onClick} />
      <CV isCv={isCV} onClick={onClick} />
      {/* <Intro steps={stepsMain} /> */}
    </>
  );
};

export default Content;
