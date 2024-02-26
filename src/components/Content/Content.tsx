import { useState } from "react";
import Heft from "../Content/view/Heft/Heft";

import CV from "./view/cv";
import Projects from "./view/projects";

const Content = () => {
  const [isCV, setIsCV] = useState<boolean | "1">("1");

  const onClick = () => {
    console.log(!Boolean(isCV));
    setIsCV(!Boolean(isCV));
  };

  return (
    <>
      <Projects />
      <Heft isCv={isCV} onClick={onClick} />
      <CV isCv={isCV} onClick={onClick} />
    </>
  );
};

export default Content;
