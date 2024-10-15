import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
import mysql from "../../../../../icons/tech/mysql.png";
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

const TechnologienCarousel = () => {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (carouselRef.current) {
        const speed = (e.clientX / window.innerWidth) * 10 - 15; // Уменьшил диапазон скорости
        carouselRef.current.style.animationDuration = `${15 - speed}s`;
        console.log(e.clientX);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel__decor">
        <h2 className="carousel__title">Technologien</h2>
      </div>

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
  );
};

export default TechnologienCarousel;
