import React, { useEffect, useState } from "react";
import { Steps } from "intro.js-react";

import "intro.js/introjs.css";

type Step = {
  element: string;
  intro: string;
};

type IntroStepsProps = {
  steps: Step[];
  onComplete?: () => void;
  enabled?: boolean;
};

const IntroSteps1: React.FC<IntroStepsProps> = ({
  steps,
  onComplete,
  enabled = false,
}) => {
  const [stepsJSON, setStepsJSON] = useState<Step[]>([]);
  const [showIntro1, setShowIntro] = useState(false);

  useEffect(() => {
    if (steps.length > 0) {
      setStepsJSON(steps);
    }
  }, [steps]);

  useEffect(() => {
    if (stepsJSON.length > 0 && enabled) {
      setShowIntro(true);
    }
  }, [enabled]);

  const onExit = () => {
    if (onComplete) onComplete();
    setShowIntro(false);
  };
  console.log("stepsJSON", stepsJSON, "showIntro1", showIntro1);

  return (
    <Steps
      enabled={showIntro1}
      steps={steps}
      initialStep={0}
      onExit={onExit}
      options={{
        nextLabel: "Weiter",
        prevLabel: "Zurück",
        doneLabel: "Fertig",
        overlayOpacity: 0.8,
        tooltipClass: "intro-tooltip",
        highlightClass: "intro-highlight",
      }}
    />
  );
};

export default React.memo(IntroSteps1);
