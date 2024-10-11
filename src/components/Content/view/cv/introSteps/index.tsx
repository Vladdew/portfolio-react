import React, { useEffect, useState } from "react";
import { Steps } from "intro.js-react";

import "intro.js/introjs.css";
import "./index.scss";

type Step = {
  element: string;
  intro: string;
};

type IntroStepsProps = {
  steps: Step[];
  onComplete?: () => void;
  enabled?: boolean;
};

const IntroSteps: React.FC<IntroStepsProps> = ({
  steps,
  onComplete,
  enabled = false,
}) => {
  const [stepsJSON, setStepsJSON] = useState<Step[]>([]);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (steps.length > 0) {
      setStepsJSON(steps);
    }
  }, [steps]);

  useEffect(() => {
    if (stepsJSON.length > 0 && !showIntro) {
      setShowIntro(true);
    }
  }, [stepsJSON]);

  const onExit = () => {
    if (onComplete) onComplete();
    setShowIntro(false);
  };

  return (
    <Steps
      enabled={enabled || showIntro}
      steps={stepsJSON}
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

export default React.memo(IntroSteps);
