"use client";

import { FC, useMemo, useRef } from "react";
import styles from "./heroSection.module.css";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "../type-animation/TypeAnimation";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.25, 1], [0, -distance / 4, -distance]);
}

export const HeroSection: FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -1500);

  return (
    <section>
      <motion.div ref={ref} style={{ y }} transition={{ duration: 1 }}>
        <div style={{ border: "1px solid red" }}>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m <span>Phillip Eismark</span>
          </h1>
          <TypeAnimation />
          <p>
            Get help understanding your needs with a free consultation Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit consectetur.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
