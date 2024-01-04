"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./heroSection.module.css";
import { AnimatedWrapper } from "../animated-wrapper/AnimatedWrapper";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// TODO: https://www.youtube.com/watch?v=WmvpJ4KX30s den første animation i denne video, men cubes skal væren oven på papiret som animeres op
// Derefter skal der komme nyt indhold, når der animeres på tværs af pages, eller når der rulles ned.
export const HeroSection: FC = () => {
  const [finishedLoading, setFinishedLoading] = useState(false);
  const containerRef = useRef(null);
  const cubeRef = useRef<SPEObject | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!cubeRef.current || !finishedLoading) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);

      // let partOne = ScrollTrigger.create({});

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(cubeRef.current.position, { x: 300, y: 0 });
      // .to(cubeRef.current.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0);
    }, [cubeRef, finishedLoading]);

    return () => ctx.revert();
  }, [finishedLoading]); // <- Important to only register the animation once the cube has loaded.

  const onLoad = (spline: Application) => {
    const obj = spline.findObjectByName("Cubes");

    if (obj) {
      cubeRef.current = obj;
    }
    setFinishedLoading(true);
  };

  const moveObj = () => {
    console.log(cubeRef);

    if (cubeRef.current) {
      cubeRef.current.position.x += 100;
      cubeRef.current.position.y += 100;
    }
  };

  const AnimatedCube = useMemo(
    () => (
      // <div
      //   style={{
      //     position: "absolute",
      //     height: "100%",
      //     width: "120%",
      //     pointerEvents: "none",
      //   }}
      // >
      <Spline
        style={{
          scale: "1",
          border: "1px solid red",
        }}
        scene="https://prod.spline.design/L5ihqoHiQRDAs2R0/scene.splinecode"
        onLoad={onLoad}
      />
      // </div>
    ),
    [],
  );

  const AnimatedText = useMemo(() => {
    return (
      <TypeAnimation
        sequence={[
          "",
          1300,
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
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.home}>
      <AnimatedWrapper>
        <div className={styles.homeContent}>
          <h1 className={styles.heroTitle}>
            {/* <button type="button" onClick={() => moveObj()}>
              moveObj
            </button> */}
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
