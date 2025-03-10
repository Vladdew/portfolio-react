import React, { useEffect, useState } from "react";
import { Steps } from "intro.js-react";
import { useTranslation } from "react-i18next";

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

const IntroSteps1: React.FC<IntroStepsProps> = ({
  steps,
  onComplete,
  enabled = false,
}) => {
  const [stepsJSON, setStepsJSON] = useState<Step[]>([]);
  const [showIntro1, setShowIntro] = useState(false);

  const { t } = useTranslation();
  const fertigLocale = t("introSteps.done");

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

  return (
    <Steps
      enabled={showIntro1}
      steps={steps}
      initialStep={0}
      onExit={onExit}
      options={{
        nextLabel: "Weiter",
        prevLabel: "Zurück",
        doneLabel: "Ok",
        overlayOpacity: 0.8,
        tooltipClass: "custom-intro1-class",
        highlightClass: "intro-highlight",
        showBullets: false,
      }}
    />
  );
};

export default React.memo(IntroSteps1);
