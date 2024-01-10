"use client";
import { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import styles from "./auroraBackground.module.css";

type AuroraBackgroundProps = {
  children: ReactNode;
};

// todo: add aurora toggle
export const AuroraBackground: FC<AuroraBackgroundProps> = ({ children }) => {
  const distStarRef = useRef<HTMLDivElement[]>([]);

  const rInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const setStars = useCallback(() => {
    const skyWidth = window.innerWidth;
    const height = window.innerHeight;

    distStarRef.current.forEach((star) => {
      let leftPosition = rInt(0, skyWidth);
      let topPosition = rInt(0, height * 1.5);

      let animationDuration = Math.random() * 10.2 + 0.5;
      let animationDelay = Math.random();

      star.style.left = leftPosition + "px";
      star.style.top = topPosition + "px";
      star.style.animationDelay = animationDelay + "s";
      star.style.animationDuration = animationDuration + "s";
    });
  }, []);

  useEffect(() => {
    setStars();
  }, [setStars]);

  return (
    <div className={`${styles.dark}`}>
      <div className={styles.aurora} />
      {Array.from({ length: 200 }).map((_, i) => (
        <div
          key={i}
          className={styles.distStar}
          ref={(element) => {
            if (element && element.classList.contains(styles.distStar)) {
              distStarRef.current[i] = element;
            }
          }}
        />
      ))}
      {children}
    </div>
  );
};
