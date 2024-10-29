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

  useEffect(() => {
    let isHovering = false;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isHovering ||
        !carouselRef.current ||
        !wrapperRef.current ||
        !props.isCv
      )
        return;

      const speed = (e.clientX / window.innerWidth) * 10 - 15;
      carouselRef.current.style.animationDuration = `${8 - speed}s`;
      console.log(carouselRef.current.style.animationDuration);
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (carouselRef.current) {
        carouselRef.current.style.animationPlayState = "paused"; // Останавливаем анимацию при ховере
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (carouselRef.current) {
        //carouselRef.current.style.transition = ""; // Убираем плавность на выходе
        carouselRef.current.style.animationDuration = `160s`;
        carouselRef.current.style.animationPlayState = "running"; // Возвращаем стандартную анимацию
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current && props.isCv) {
      carouselRef.current.style.animationPlayState = "running";
      if (isMobile) {
        carouselRef.current.style.animationDuration = `30s`;
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
          {/* Дублируем иконки для бесконечной прокрутки */}
          {icons.map((icon, index) => (
            <div key={index + icons.length} className="carousel__icon">
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
