import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

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
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const { t } = useTranslation();
  // Проверяем localStorage и обновляем состояние
  useEffect(() => {
    const dontShow = localStorage.getItem("dontShowIntroAgain") === "true";
    setDontShowAgain(dontShow);

    // Если интро нужно показать, загружаем шаги
    if (!dontShow) {
      setStepsJSON(steps);
    }
  }, [steps]);

  // Показываем интро, если есть шаги и оно еще не показывалось
  useEffect(() => {
    if (stepsJSON.length > 0 && !dontShowAgain) {
      setShowIntro(true);
    }
  }, [stepsJSON, dontShowAgain]);

  const onExit = () => {
    if (onComplete) onComplete();
    setShowIntro(false);

    // Сохраняем состояние в localStorage при завершении интро
    if (dontShowAgain) {
      localStorage.setItem("dontShowIntroAgain", "true");
    }
  };

  // Обрабатываем изменение чекбокса
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setDontShowAgain(checked);
    //localStorage.setItem("dontShowIntroAgain", checked.toString());
  };

  // Добавляем чекбокс на последний шаг
  useEffect(() => {
    const lastStepIndex = stepsJSON.length - 1;
    if (stepsJSON[lastStepIndex]) {
      stepsJSON[lastStepIndex].intro = `
      ${stepsJSON[lastStepIndex].intro}
      <br /><br />
      <label>
        <input 
          type="checkbox" 
          id="dont-show-again" 
          ${dontShowAgain ? "checked" : ""} 
          onchange="handleCheckboxChange(event)" 
        /> 
        ${t("introSteps.dontshow")}
      </label>`;
    }
  }, [stepsJSON, dontShowAgain, t]);

  // Делаем функцию глобальной, чтобы использовать её в инлайне
  useEffect(() => {
    (window as any).handleCheckboxChange = handleCheckboxChange;
  }, []);

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
        tooltipClass: "custom-intro-class",
        highlightClass: "intro-highlight",
        showBullets: false,
        autoPosition: true,

        //showStepNumbers: true,
      }}
    />
  );
};

export default React.memo(IntroSteps);
