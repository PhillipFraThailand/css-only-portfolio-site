"use client";
import { FC, useMemo } from "react";
import styles from "./heroSection.module.css";
import { AnimatedWrapper } from "../animated-wrapper/AnimatedWrapper";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import dynamic from "next/dynamic";

export const HeroSection: FC = () => {
  const AnimatedCube = useMemo(
    () => (
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "120%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Spline
          style={{
            scale: "0.7",
          }}
          scene="https://prod.spline.design/L5ihqoHiQRDAs2R0/scene.splinecode"
        />
      </div>
    ),
    [],
  );

  const AnimatedText = useMemo(() => {
    return (
      <TypeAnimation
        sequence={[
          "Fullstack Developer",
          2800,
          "Specialised in IOS & Android Apps,",
          2000,
          "Websites & Backend Systems.",
          800,
        ]}
        wrapper="div"
        speed={15}
        deletionSpeed={40}
        style={{ fontSize: "3em", display: "inline-block" }}
        repeat={Infinity}
        preRenderFirstString
      />
    );
  }, []);

  return (
    <section className={styles.home}>
      <AnimatedWrapper>
        <div className={styles.homeContent}>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m <span>Phillip Eismark</span>
          </h1>
          {AnimatedText}
          <p>
            Get help understanding your needs with a free consultation Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit consectetur, commodi quo laudantium mollitia, illum, esse
            repellendus assumenda iure veniam. Ratione numquam asperiores
            nostrum libero eveniet?
          </p>
        </div>
      </AnimatedWrapper>
      {AnimatedCube}
    </section>
  );
};
