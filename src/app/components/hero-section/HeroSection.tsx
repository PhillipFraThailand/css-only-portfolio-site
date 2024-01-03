"use client";

import {
  FC,
  useEffect,
  useMemo,
  useRef,
  useLayoutEffect,
  useState,
} from "react";
import styles from "./heroSection.module.css";
import { AnimatedWrapper } from "../animated-wrapper/AnimatedWrapper";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import { Application, SPEObject } from "@splinetool/runtime";
import { useGSAP, useGSAPConfig } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const HeroSection: FC = () => {
  const [finishedLoading, setFinishedLoading] = useState(false);
  const containerRef = useRef(null);
  const cubeRef = useRef<SPEObject | null>(null);

  useIsomorphicLayoutEffect(() => {
    console.log("useIsomorphicLayoutEffect", useIsomorphicLayoutEffect);
    let ctx = gsap.context(() => {
      if (!cubeRef.current || !finishedLoading) {
        console.log("undef");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(cubeRef.current.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
        .to(cubeRef.current.position, { x: 500, y: 0 })
        .to(cubeRef.current.scale, { x: 0.5, y: 0.5, z: 0.5 });

      // ScrollTrigger.create({
      //   trigger: containerRef.current,
      //   start: "top 50%",
      //   end: "bottom bottom",
      //   scrub: true,
      // });

      // tl.to(cubeRef.current.position, { x: 500, y: 0 });
      // tl.to(cubeRef.current.scale, { x: 0.5, y: 0.5, z: 0.5 });
      // tl.to(cubeRef.current.rotation, { x: -Math.PI / 14, z: Math.PI / 36 });
    }, [cubeRef, finishedLoading]);

    return () => ctx.revert();
  }, [cubeRef.current, finishedLoading]);

  const onLoad = (spline: Application) => {
    console.log("onLoad");
    const obj = spline.findObjectByName("Cubes");
    if (obj) {
      cubeRef.current = obj;
      console.log("--->", cubeRef.current, obj);
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
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          pointerEvents: "none",
          // zIndex: 1,
        }}
      >
        <Spline
          style={{
            scale: "1",
          }}
          scene="https://prod.spline.design/L5ihqoHiQRDAs2R0/scene.splinecode"
          onLoad={onLoad}
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
    <section id="part1" ref={containerRef} className={styles.home}>
      <AnimatedWrapper>
        <div className={styles.homeContent}>
          <h1 className={styles.heroTitle}>
            <button type="button" onClick={() => moveObj()}>
              moveObj
            </button>
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
