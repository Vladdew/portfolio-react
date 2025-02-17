import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import html from "../../../../../icons/tech/html.png";
import css from "../../../../../icons/tech/css.png";
import js from "../../../../../icons/tech/js.png";
import ts from "../../../../../icons/tech/ts.png";
import react from "../../../../../icons/tech/react.png";
import next from "../../../../../icons/tech/next.png";
import d3 from "../../../../../icons/tech/d3js.png";
import konva from "../../../../../icons/tech/konva.png";
import node from "../../../../../icons/tech/node.png";
import figma from "../../../../../icons/tech/figma.png";
import cata from "../../../../../icons/tech/cw.png";
import gh from "../../../../../icons/tech/gh.png";
import ps from "../../../../../icons/tech/ps.png";
import wp from "../../../../../icons/tech/wp.png";
import mongo from "../../../../../icons/tech/mongo.png";

import "./index.scss";

const icons = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: js, alt: "JavaScript" },
  { src: ts, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: next, alt: "Next" },
  { src: d3, alt: "DDD" },
  { src: konva, alt: "Konva.js" },
  { src: node, alt: "Node.js" },
  { src: figma, alt: "Figma" },
  { src: gh, alt: "Github" },
  { src: ps, alt: "Photoshop" },
  { src: cata, alt: "Code wars" },
  { src: wp, alt: "WordPress" },
  { src: mongo, alt: "MongoDB" },
];

const TechnologienCarousel = (props: { isCv: boolean | "1" }) => {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const accumulatedX = useRef(0);
  const lastMouseX = useRef(0);
  const isHovering = useRef(false);

  const lastTouchX = useRef(0);
  const isSwiping = useRef(false);

  const getCurrentTranslateX = (el: HTMLElement): number => {
    const style = window.getComputedStyle(el);
    const transform = style.transform;
    if (transform && transform !== "none") {
      const match = transform.match(/matrix\(([^)]+)\)/);
      if (match) {
        const values = match[1].split(", ");
        return parseFloat(values[4]);
      }
    }
    return 0;
  };

  useEffect(() => {
    if (!props.isCv) return;
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;
    if (!carousel || !wrapper) return;

    const speedFactor = 2;
    const touchSpeedFactor = 2; // Теперь положительный, чтобы не было реверса

    const handleMouseEnter = (e: MouseEvent) => {
      isHovering.current = true;
      lastMouseX.current = e.clientX;
      accumulatedX.current = getCurrentTranslateX(carousel);
      carousel.style.animation = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering.current) return;

      const deltaX = e.clientX - lastMouseX.current;
      lastMouseX.current = e.clientX;

      accumulatedX.current -= deltaX * speedFactor;

      const w = carousel.offsetWidth;
      const minX = w * -1.6;
      const maxX = w * 0.01;

      accumulatedX.current = Math.max(
        minX,
        Math.min(accumulatedX.current, maxX)
      );

      carousel.style.transform = `translateX(${accumulatedX.current}px)`;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;

      const w = carousel.offsetWidth;
      const minX = w * -1.6;
      const maxX = w * 0.01;

      const progress = (maxX - accumulatedX.current) / (maxX - minX);
      const animationDuration = 160;
      const negativeDelay = -progress * animationDuration;

      carousel.style.animation = `scroll ${animationDuration}s linear infinite alternate`;
      carousel.style.animationDelay = `${negativeDelay}s`;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isSwiping.current = true;
      lastTouchX.current = e.touches[0].clientX;
      accumulatedX.current = getCurrentTranslateX(carousel);
      carousel.style.animation = "none";
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping.current) return;

      const deltaX = e.touches[0].clientX - lastTouchX.current;
      lastTouchX.current = e.touches[0].clientX;

      accumulatedX.current += deltaX * touchSpeedFactor; // Теперь движение естественное

      const w = carousel.offsetWidth;
      const minX = w * -1.6;
      const maxX = w * 0.01;

      accumulatedX.current = Math.max(
        minX,
        Math.min(accumulatedX.current, maxX)
      );

      carousel.style.transform = `translateX(${accumulatedX.current}px)`;
    };

    const handleTouchEnd = () => {
      isSwiping.current = false;

      const w = carousel.offsetWidth;
      const minX = w * -1.6;
      const maxX = w * 0.01;

      const progress = (maxX - accumulatedX.current) / (maxX - minX);
      const animationDuration = 160;
      const negativeDelay = -progress * animationDuration;

      carousel.style.animation = `scroll ${animationDuration}s linear infinite alternate`;
      carousel.style.animationDelay = `${negativeDelay}s`;
    };

    if (!isMobile) {
      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    } else {
      wrapper.addEventListener("touchstart", handleTouchStart);
      wrapper.addEventListener("touchmove", handleTouchMove);
      wrapper.addEventListener("touchend", handleTouchEnd);
    }

    if (!isMobile) {
      return () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    } else {
      return () => {
        wrapper.removeEventListener("touchstart", handleTouchStart);
        wrapper.removeEventListener("touchmove", handleTouchMove);
        wrapper.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current && props.isCv) {
      carouselRef.current.style.animationPlayState = "running";
      if (isMobile) {
        carouselRef.current.style.animationDuration = "160s";
      }
    } else {
      if (carouselRef.current) {
        // Если анимация должна остановиться, сбрасываем её продолжительность
        carouselRef.current.style.animationPlayState = "paused";
      }
    }
  }, [props.isCv]);

  return (
    <>
      <div className="carousel__decor">
        <h2 className="carousel__title">{t("tech.title")}</h2>
      </div>
      <div ref={wrapperRef} className="carousel-wrapper">
        <div ref={carouselRef} className="carousel">
          {icons.map((icon, index) => (
            <div key={index} className="carousel__icon">
              <img src={icon.src} alt={icon.alt} />
              <span className="carousel__icon-title">{icon.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnologienCarousel;
