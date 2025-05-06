import React, { useState } from "react";
import "./index.scss";
import { isMobile } from "react-device-detect";

type IPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: IPosition;
}

const TooltipComponent: React.FC<TooltipProps> = ({
  children,
  text,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {!isMobile ? (
        <span
          className="tooltip-wrapper"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {isVisible && (
            <span className={`tooltip-box tooltip-${position}`}>{text}</span>
          )}
          {children}
        </span>
      ) : (
        children
      )}
    </>
  );
};

export default TooltipComponent;
